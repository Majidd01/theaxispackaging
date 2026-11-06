const {
  createHandler,
  handleEnquiry,
  resetEnquiryRateLimit,
  messageFor,
} = require("../api/enquiry.js");

let failed = 0;

function assert(condition, message) {
  if (!condition) {
    failed += 1;
    console.error(`FAIL ${message}`);
  }
}

function mockResponse() {
  return {
    statusCode: 0,
    headers: {},
    payload: null,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
    },
  };
}

const validProduct = {
  form: "product",
  name: "Alex Buyer",
  email: "alex@example.co.uk",
  phone: "+44 7700 900123",
  product: "Custom Pizza Boxes",
  quantity: "500",
  dimensions: { length: "250", width: "200", depth: "40", unit: "mm" },
  material: "Corrugated",
  companyWebsite: "",
};

async function main() {
  resetEnquiryRateLimit();
  const sent = [];
  const accepted = await handleEnquiry({
    body: validProduct,
    ip: "203.0.113.10",
    sendMail: async (enquiry) => {
      sent.push(enquiry);
    },
  });
  assert(accepted.status === 200 && accepted.body.ok === true, "valid product enquiry is accepted");
  assert(sent.length === 1 && sent[0].email === "alex@example.co.uk", "mail payload uses the customer email");

  const mail = messageFor(sent[0], {
    ENQUIRY_FROM: "info@theaxispackaging.com",
    ENQUIRY_TO: "info@theaxispackaging.com",
    SMTP_USER: "info@theaxispackaging.com",
  });
  assert(mail.to === "info@theaxispackaging.com", "recipient is the Axis inbox");
  assert(mail.replyTo === "alex@example.co.uk", "reply-to is the customer");
  assert(mail.from.includes("info@theaxispackaging.com"), "from address is the Zoho mailbox");
  assert(!JSON.stringify(mail).includes("not-a-real-password"), "message does not contain a password");

  resetEnquiryRateLimit();
  const missing = await handleEnquiry({
    body: { ...validProduct, email: "not-an-email" },
    ip: "203.0.113.11",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(missing.status === 400 && missing.body.ok === false, "invalid email is rejected");

  resetEnquiryRateLimit();
  const honeypot = await handleEnquiry({
    body: { ...validProduct, companyWebsite: "https://spam.example" },
    ip: "203.0.113.12",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(honeypot.status === 400, "honeypot submission is rejected");

  resetEnquiryRateLimit();
  const injected = await handleEnquiry({
    body: { ...validProduct, email: "alex@example.co.uk\nBcc: attacker@example.com" },
    ip: "203.0.113.13",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(injected.status === 400, "header injection in email is rejected");

  resetEnquiryRateLimit();
  let attempts = 0;
  for (let i = 0; i < 5; i += 1) {
    const result = await handleEnquiry({
      body: validProduct,
      ip: "203.0.113.14",
      sendMail: async () => {
        attempts += 1;
      },
    });
    assert(result.status === 200, `request ${i + 1} within the rate limit is accepted`);
  }
  const limited = await handleEnquiry({
    body: validProduct,
    ip: "203.0.113.14",
    sendMail: async () => {
      attempts += 1;
    },
  });
  assert(limited.status === 429 && attempts === 5, "the sixth request is rate limited before sending");

  resetEnquiryRateLimit();
  const failedSend = await handleEnquiry({
    body: validProduct,
    ip: "203.0.113.15",
    sendMail: async () => {
      throw new Error("smtp down");
    },
  });
  assert(failedSend.status === 502 && failedSend.body.ok === false, "transport failure does not report success");

  const unconfigured = mockResponse();
  await createHandler({ env: {} })({ method: "POST", body: validProduct, headers: {} }, unconfigured);
  assert(unconfigured.statusCode === 503 && unconfigured.payload.ok === false, "missing SMTP configuration is rejected");

  const wrongMethod = mockResponse();
  await createHandler({ env: {} })({ method: "GET", headers: {} }, wrongMethod);
  assert(wrongMethod.statusCode === 405, "GET is rejected");

  resetEnquiryRateLimit();
  const delivered = [];
  const transportOptions = [];
  const env = {
    SMTP_HOST: "smtp.zoho.eu",
    SMTP_PORT: "465",
    SMTP_SECURE: "true",
    SMTP_USER: "info@theaxispackaging.com",
    SMTP_PASSWORD: "not-a-real-password",
    ENQUIRY_FROM: "info@theaxispackaging.com",
    ENQUIRY_TO: "info@theaxispackaging.com",
  };
  const response = mockResponse();
  await createHandler({
    env,
    createTransportFactory(options) {
      transportOptions.push(options);
      return {
        sendMail: async (message) => {
          delivered.push(message);
          return { messageId: "mock-1" };
        },
      };
    },
  })(
    {
      method: "POST",
      body: {
        form: "contact",
        name: "Sam Contact",
        email: "sam@example.co.uk",
        description: "Need boxes for a shop launch.",
        companyWebsite: "",
      },
      headers: { "x-forwarded-for": "198.51.100.20, 10.0.0.1" },
    },
    response,
  );
  assert(response.statusCode === 200 && response.payload.ok === true, "mocked transport accepts a contact enquiry");
  assert(delivered.length === 1 && delivered[0].replyTo === "sam@example.co.uk", "mocked message uses reply-to");
  assert(delivered[0].to === "info@theaxispackaging.com", "mocked message is addressed to Axis");
  assert(transportOptions[0]?.auth?.user === env.SMTP_USER, "SMTP authentication uses the server mailbox");
  assert(transportOptions[0]?.host === "smtp.zoho.eu" && transportOptions[0]?.secure === true, "SMTP uses the configured Zoho host");
  assert(!JSON.stringify(response.payload).includes(env.SMTP_PASSWORD), "API response does not include the SMTP password");
  assert(!JSON.stringify(delivered[0]).includes(env.SMTP_PASSWORD), "mocked message does not include the SMTP password");

  const forms = [
    {
      form: "homepage",
      name: "Home Buyer",
      email: "home@example.co.uk",
      agreeToTerms: true,
      description: "Need 250 x 200 x 100 mm boxes",
      companyWebsite: "",
    },
    {
      form: "instant",
      name: "Instant Buyer",
      email: "instant@example.co.uk",
      productType: "Mailer boxes",
      quantity: "1000",
      companyWebsite: "",
    },
  ];
  for (const body of forms) {
    resetEnquiryRateLimit();
    const result = await handleEnquiry({
      body,
      ip: `203.0.113.${body.form.length}`,
      sendMail: async () => {},
    });
    assert(result.status === 200, `${body.form} form is accepted`);
  }

  resetEnquiryRateLimit();
  const usaSent = [];
  const usa = await handleEnquiry({
    body: {
      form: "homepage",
      name: "USA Buyer",
      email: "usa@example.com",
      agreeToTerms: true,
      deliveryCountry: "US",
      deliveryCity: "Austin",
      deliveryRegion: "TX",
      deliveryPostcode: "78701",
      deliveryNotes: "Suite 200",
      companyWebsite: "",
    },
    ip: "203.0.113.40",
    sendMail: async (enquiry) => {
      usaSent.push(enquiry);
    },
  });
  assert(usa.status === 200 && usaSent[0]?.deliveryRegion === "TX" && usaSent[0]?.deliveryPostcode === "78701", "USA city, state and ZIP are accepted");
  const usaMail = messageFor(usaSent[0], {
    ENQUIRY_FROM: "info@theaxispackaging.com",
    ENQUIRY_TO: "info@theaxispackaging.com",
    SMTP_USER: "info@theaxispackaging.com",
  });
  assert(usaMail.text.includes("United States") && usaMail.text.includes("78701") && usaMail.text.includes("Austin"), "USA destination is in the business email");
  assert(!usaMail.text.includes("usa@example.com\n") || usaMail.replyTo === "usa@example.com", "reply-to stays the customer");

  resetEnquiryRateLimit();
  const uk = await handleEnquiry({
    body: {
      form: "contact",
      name: "UK Buyer",
      email: "uk@example.co.uk",
      deliveryCountry: "GB",
      deliveryCity: "Leeds",
      deliveryPostcode: "ls12 3tz",
      companyWebsite: "",
    },
    ip: "203.0.113.41",
    sendMail: async () => {},
  });
  assert(uk.status === 200, "UK town and postcode are accepted");

  resetEnquiryRateLimit();
  const badZip = await handleEnquiry({
    body: {
      form: "instant",
      name: "Bad Zip",
      email: "zip@example.com",
      productType: "Mailer boxes",
      quantity: "500",
      deliveryCountry: "US",
      deliveryCity: "Austin",
      deliveryRegion: "TX",
      deliveryPostcode: "7870",
      companyWebsite: "",
    },
    ip: "203.0.113.42",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(badZip.status === 400, "invalid ZIP code is rejected");

  resetEnquiryRateLimit();
  const badPostcode = await handleEnquiry({
    body: {
      form: "homepage",
      name: "Bad Postcode",
      email: "post@example.co.uk",
      agreeToTerms: true,
      deliveryCountry: "GB",
      deliveryCity: "Leeds",
      deliveryPostcode: "NOT A POSTCODE",
      companyWebsite: "",
    },
    ip: "203.0.113.43",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(badPostcode.status === 400, "invalid UK postcode is rejected");

  resetEnquiryRateLimit();
  const badCountry = await handleEnquiry({
    body: {
      form: "contact",
      name: "Other Country",
      email: "other@example.com",
      deliveryCountry: "Canada",
      deliveryCity: "Toronto",
      companyWebsite: "",
    },
    ip: "203.0.113.44",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(badCountry.status === 400, "arbitrary country text is rejected");

  resetEnquiryRateLimit();
  const honeypotWithDestination = await handleEnquiry({
    body: {
      form: "product",
      ...validProduct,
      deliveryCountry: "US",
      deliveryCity: "Austin",
      deliveryRegion: "TX",
      deliveryPostcode: "78701",
      companyWebsite: "https://spam.example",
    },
    ip: "203.0.113.45",
    sendMail: async () => {
      throw new Error("should not send");
    },
  });
  assert(honeypotWithDestination.status === 400, "honeypot still rejects a USA destination enquiry");

  if (failed) {
    console.error(`${failed} assertion(s) failed`);
    process.exit(1);
  }
  console.log("enquiry api mock transport tests passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
