const nodemailer = require("nodemailer");

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map();

const FORMS = new Set(["homepage", "product", "instant", "contact"]);

function resetEnquiryRateLimit() {
  attempts.clear();
}

function text(value, max) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function isEmail(value) {
  return (
    typeof value === "string" &&
    value.length <= 254 &&
    !/[\r\n]/.test(value) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}

function positiveNumber(value) {
  if (typeof value !== "string" && typeof value !== "number") return false;
  const raw = String(value).trim();
  if (!/^\d+(\.\d+)?$/.test(raw)) return false;
  const number = Number(raw);
  return Number.isFinite(number) && number > 0 && number < 100000;
}

function quantityText(value) {
  const quantity = text(value, 12);
  return /^\d+$/.test(quantity) && Number(quantity) > 0 && Number(quantity) < 10000000 ? quantity : "";
}

function dimensionsText(value) {
  if (typeof value === "string") return text(value, 200);
  if (!value || typeof value !== "object" || Array.isArray(value)) return "";
  const length = text(value.length, 20);
  const width = text(value.width, 20);
  const depth = text(value.depth || value.height, 20);
  const unit = value.unit === "in" ? "in" : value.unit === "mm" ? "mm" : "";
  const parts = [length, width, depth].filter(Boolean);
  if (!parts.length) return "";
  return `${parts.join(" x ")}${unit ? ` ${unit}` : ""}`.slice(0, 200);
}

function lineCount(value) {
  return (String(value).match(/https?:\/\//gi) || []).length;
}

function smtpConfigured(env) {
  return ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "ENQUIRY_TO"].every(
    (key) => typeof env[key] === "string" && env[key].trim() !== "",
  );
}

function clientIp(req) {
  const forwarded = req.headers?.["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function tooMany(ip, now) {
  const recent = (attempts.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    attempts.set(ip, recent);
    return true;
  }
  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

function validate(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Check the form and try again." };
  }
  if (text(body.companyWebsite, 200)) {
    return { error: "Check the form and try again." };
  }
  if (!FORMS.has(body.form)) return { error: "Check the form and try again." };

  const name = text(body.name, 100);
  const email = text(body.email, 254);
  const phone = text(body.phone, 30);
  const company = text(body.company, 120);
  const product = text(body.product || body.productType, 120);
  const quantity = quantityText(body.quantity);
  const material = text(body.material, 80);
  const printing = text(body.printing || body.print, 80);
  const finishing = text(body.finishing, 80);
  const timeline = text(body.timeline, 80);
  const budget = text(body.budget, 80);
  const description = text(body.description || body.additionalRequirements || body.message, 4000);
  const fileName = text(body.fileName, 180);
  const additionalOption = text(body.additionalOption, 80);
  const addUp = text(body.addUp, 80);
  const dimensions = dimensionsText(body.dimensions);

  if (!name || !isEmail(email)) return { error: "Check the form and try again." };
  if (phone && !/^[0-9+().\-\s]{5,30}$/.test(phone)) return { error: "Check the form and try again." };
  if (lineCount([description, company, product].join(" ")) > 5) {
    return { error: "Check the form and try again." };
  }

  if (body.form === "homepage" && body.agreeToTerms !== true) {
    return { error: "Check the form and try again." };
  }
  if (body.form === "product") {
    const size = body.dimensions || {};
    if (
      !product ||
      !phone ||
      !quantity ||
      !positiveNumber(size.length) ||
      !positiveNumber(size.width) ||
      !positiveNumber(size.depth || size.height)
    ) {
      return { error: "Check the form and try again." };
    }
  }
  if (body.form === "instant" && (!product || !quantity)) {
    return { error: "Check the form and try again." };
  }

  return {
    enquiry: {
      form: body.form,
      name,
      email,
      phone,
      company,
      product,
      quantity,
      dimensions,
      material,
      printing,
      finishing,
      timeline,
      budget,
      description,
      fileName,
      additionalOption,
      addUp,
    },
  };
}

function subjectFor(enquiry) {
  if (enquiry.form === "product") return `Product quote enquiry: ${enquiry.product} from ${enquiry.name}`;
  if (enquiry.form === "instant") return `Instant quote enquiry from ${enquiry.name}`;
  if (enquiry.form === "contact") return `Contact enquiry from ${enquiry.name}`;
  return `Homepage quote enquiry from ${enquiry.name}`;
}

function messageFor(enquiry, env) {
  const lines = [
    "New website enquiry",
    "",
    `Form: ${enquiry.form}`,
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not provided"}`,
    `Company: ${enquiry.company || "Not provided"}`,
    `Product: ${enquiry.product || "Not provided"}`,
    `Quantity: ${enquiry.quantity || "Not provided"}`,
    `Dimensions: ${enquiry.dimensions || "Not provided"}`,
    `Material: ${enquiry.material || "Not provided"}`,
    `Printing: ${enquiry.printing || "Not provided"}`,
    `Finishing: ${enquiry.finishing || "Not provided"}`,
    `Additional option: ${enquiry.additionalOption || "Not provided"}`,
    `Add-up: ${enquiry.addUp || "Not provided"}`,
    `Timeline: ${enquiry.timeline || "Not provided"}`,
    `Budget: ${enquiry.budget || "Not provided"}`,
    "",
    enquiry.description || "No further details provided.",
  ];
  if (enquiry.fileName) {
    lines.push("", `Design file selected: ${enquiry.fileName}`, "The file was not uploaded. Ask the customer to reply with it.");
  }
  const fromAddress = text(env.ENQUIRY_FROM, 254) || text(env.SMTP_USER, 254);
  return {
    from: `Axis Packaging <${fromAddress}>`,
    to: text(env.ENQUIRY_TO, 254),
    replyTo: enquiry.email,
    subject: subjectFor(enquiry).slice(0, 180),
    text: lines.join("\n"),
  };
}

async function handleEnquiry({ body, ip = "unknown", sendMail, now = Date.now() }) {
  const validated = validate(body);
  if (validated.error) return { status: 400, body: { ok: false, error: validated.error } };
  if (tooMany(ip, now)) {
    return { status: 429, body: { ok: false, error: "Please wait a few minutes and try again." } };
  }
  try {
    await sendMail(validated.enquiry);
    return { status: 200, body: { ok: true } };
  } catch {
    return { status: 502, body: { ok: false, error: "We could not send your enquiry. Please try again." } };
  }
}

function createTransport(env, factory) {
  const port = Number(env.SMTP_PORT);
  const secure = env.SMTP_SECURE === "true" || port === 465;
  return factory({
    host: env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASSWORD,
    },
  });
}

function createHandler({ env = process.env, createTransportFactory = nodemailer.createTransport } = {}) {
  return async function handler(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      res.status(405).json({ ok: false, error: "Method not allowed" });
      return;
    }
    if (!smtpConfigured(env) || !isEmail(text(env.ENQUIRY_TO, 254))) {
      res.status(503).json({ ok: false, error: "Enquiry email is not configured." });
      return;
    }
    const result = await handleEnquiry({
      body: req.body,
      ip: clientIp(req),
      sendMail: async (enquiry) => {
        const transport = createTransport(env, createTransportFactory);
        await transport.sendMail(messageFor(enquiry, env));
      },
    });
    res.status(result.status).json(result.body);
  };
}

module.exports = createHandler();
module.exports.createHandler = createHandler;
module.exports.handleEnquiry = handleEnquiry;
module.exports.resetEnquiryRateLimit = resetEnquiryRateLimit;
module.exports.messageFor = messageFor;
