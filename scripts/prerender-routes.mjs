import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { blogsCacheKey } from "./blogs-cache-key.mjs";
import {
  aboutStaticHtml,
  blogArticleStaticHtml,
  blogIndexStaticHtml,
  collectLocalRefs,
  contactStaticHtml,
  faqsStaticHtml,
  homeIntroHtml,
  moqStaticHtml,
  quoteIntroHtml,
  sustainabilityStaticHtml,
} from "./prerender-static-content.mjs";
import {
  industriesIndexStaticHtml,
  industryStaticHtml,
  productStaticHtml,
  productsIndexStaticHtml,
} from "./prerender-catalog-content.mjs";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html is missing. Run vite build first.");
  process.exit(1);
}

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

const constants = await server.ssrLoadModule("/src/lib/constants.ts");
const seoPage = await server.ssrLoadModule("/src/lib/seo-page-data.ts");
const seoLib = await server.ssrLoadModule("/src/lib/seo.ts");
const aboutContent = await server.ssrLoadModule("/src/lib/about-page-content.ts");
const contactContent = await server.ssrLoadModule("/src/lib/contact-page-content.ts");
const faqContent = await server.ssrLoadModule("/src/lib/faq-page-content.ts");
const blogIndexContent = await server.ssrLoadModule("/src/lib/blog-index-content.ts");
const homeIntro = await server.ssrLoadModule("/src/lib/home-intro.ts");
const sustainabilityContent = await server.ssrLoadModule("/src/lib/sustainability-page-content.ts");
const quoteContent = await server.ssrLoadModule("/src/lib/quote-page-content.ts");
const moqContent = await server.ssrLoadModule("/src/lib/moq-page-content.ts");
const catalogOrder = await server.ssrLoadModule("/src/lib/catalog-order.ts");
await server.close();

const { PRODUCT_CATEGORIES, INDUSTRIES, STATIC_PAGE_SEO } = {
  PRODUCT_CATEGORIES: constants.PRODUCT_CATEGORIES,
  INDUSTRIES: constants.INDUSTRIES,
  STATIC_PAGE_SEO: seoPage.STATIC_PAGE_SEO,
};
const {
  absoluteUrl,
  absoluteImageUrl,
  truncateMeta,
  breadcrumbSchema,
  productSchema,
  faqPageSchema,
  blogPostingSchema,
  serviceSchema,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  webPageSchema,
} = seoLib;

const template = fs.readFileSync(templatePath, "utf8");
const ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setMeta(html, key, content) {
  const re = new RegExp(
    `(<meta\\b[^>]*\\b(?:name|property)="${key}"[^>]*\\bcontent=")[\\s\\S]*?(")`
  );
  if (!re.test(html)) throw new Error(`Missing meta ${key}`);
  return html.replace(re, `$1${esc(content)}$2`);
}

function renderPage(page) {
  const canonical = absoluteUrl(page.path);
  const description = truncateMeta(page.description);
  const image = absoluteImageUrl(page.image);
  const ogType = page.type === "product" ? "website" : page.type || "website";
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`);
  html = setMeta(html, "description", description);
  html = setMeta(html, "robots", page.robots || ROBOTS);
  html = html.replace(
    /(<link\b[^>]*\brel="canonical"[^>]*\bhref=")[^"]*(")/,
    `$1${esc(canonical)}$2`
  );
  html = setMeta(html, "og:type", ogType);
  html = setMeta(html, "og:title", page.title);
  html = setMeta(html, "og:description", description);
  html = setMeta(html, "og:url", canonical);
  html = setMeta(html, "og:image", image);
  html = setMeta(html, "twitter:title", page.title);
  html = setMeta(html, "twitter:description", description);
  html = setMeta(html, "twitter:image", image);

  const extras = [
    `<meta data-rh="true" name="googlebot" content="${esc(page.robots || ROBOTS)}" />`,
    page.keywords
      ? `<meta data-rh="true" name="keywords" content="${esc(page.keywords)}" />`
      : "",
    `<meta data-rh="true" property="og:image:alt" content="${esc(page.title)}" />`,
    `<meta data-rh="true" name="author" content="Axis Packaging" />`,
    `<link data-rh="true" rel="alternate" hrefLang="en-GB" href="${esc(canonical)}" />`,
    `<link data-rh="true" rel="alternate" hrefLang="x-default" href="${esc(canonical)}" />`,
    page.publishedTime
      ? `<meta data-rh="true" property="article:published_time" content="${esc(page.publishedTime)}" />`
      : "",
    page.modifiedTime
      ? `<meta data-rh="true" property="article:modified_time" content="${esc(page.modifiedTime)}" />`
      : "",
    ...(page.jsonLd || []).filter(Boolean).map(
      (schema) =>
        `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema)}</script>`
    ),
  ]
    .filter(Boolean)
    .join("\n\t\t");

  if (!html.includes('<link rel="preconnect"')) {
    throw new Error("Could not find the preconnect marker in dist/index.html");
  }
  html = html.replace('<link rel="preconnect"', `${extras}\n\t\t<link rel="preconnect"`);
  if (page.path === "/") {
    const heroPreload =
      '<link rel="preload" as="image" type="image/avif" href="/assets/hero/banner-960.avif" imagesrcset="/assets/hero/banner-640.avif 640w, /assets/hero/banner-960.avif 960w, /assets/hero/banner-1280.avif 1280w, /assets/hero/banner-1536.avif 1536w" imagesizes="100vw" fetchpriority="high" />';
    html = html.replace('<link rel="preconnect"', `${heroPreload}\n\t\t<link rel="preconnect"`);
  }

  const body = page.body || "";
  if (page.path === "/") {
    const withHeader = html.replace(
      '<div id="header-root"></div>',
      `<div id="header-root">${page.header}</div>`
    );
    const withHero = withHeader.replace(
      '<div id="app-root"></div>',
      `${page.hero}\n\t\t${page.homeIntro || ""}\n\t\t<div id="app-root"></div>`
    );
    if (withHero === html || !withHero.includes('id="static-hero"')) {
      throw new Error("Could not place the preserved homepage hero outside the React root");
    }
    html = withHero;
  } else if (page.staticContent || page.beforeRoot) {
    const next = html.replace(
      '<div id="app-root"></div>',
      `${page.beforeRoot || ""}${page.staticContent || ""}\n\t\t<div id="app-root"></div>`
    );
    if (next === html || (page.staticContent && !next.includes('id="static-content"'))) {
      throw new Error(`Could not place static content for ${page.path}`);
    }
    html = next;
  } else {
    const next = html.replace('<div id="app-root"></div>', `<div id="app-root">${body}</div>`);
    if (next === html) {
      throw new Error(`Could not find app-root for ${page.path}`);
    }
    html = next;
  }
  return html;
}

function writeRoute(routePath, html) {
  if (routePath === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html);
    return;
  }
  const rel = routePath.replace(/^\//, "").replace(/\/$/, "");
  fs.mkdirSync(path.join(distDir, rel), { recursive: true });
  fs.writeFileSync(path.join(distDir, rel, "index.html"), html);
  fs.writeFileSync(path.join(distDir, `${rel}.html`), html);
}

function icon(className, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true">${inner}</svg>`;
}

function homepageBody(home) {
  const heading = "Create Custom Boxes & Packaging of Your Dreams";
  if ((home.h1 || home.title) !== heading) {
    throw new Error("Homepage hero heading no longer matches the visible hero");
  }
  const quoteButton =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 bg-gradient-to-r from-[var(--axis-orange)] to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105";
  const outlineButton =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-2 border-white text-white hover:bg-white hover:text-[var(--axis-orange)] bg-white/10 backdrop-blur-md px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105";
  const headerQuote =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 text-sm font-medium transition-colors bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)] text-white px-6 py-2 rounded-lg";
  const headerContact =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 text-sm font-medium transition-colors border border-sky-600 bg-background text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white px-6 py-2 rounded-lg";
  const nav = [
    ["Home", "/"],
    ["Products", "/products"],
    ["Industries", "/industries"],
    ["Blog", "/blog"],
    ["Sustainability", "/sustainability"],
  ]
    .map(([name, href]) => {
      const chevron = name === "Products" || name === "Industries" ? icon("h-4 w-4", `<path d="m6 9 6 6 6-6"/>`) : "";
      const itemClass = chevron
        ? "flex items-center gap-1 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
        : "text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200";
      return `<a href="${href}" class="${itemClass}">${name}${chevron}</a>`;
    })
    .join("");

  const markup = `<div class="opacity-100 transition-opacity duration-300"><div class="min-h-screen bg-background"><header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"><div class="bg-[var(--axis-orange)] text-white py-2 px-4"><div class="container mx-auto flex justify-between items-center text-sm"><div class="flex items-center space-x-6"><div class="flex items-center space-x-2">${icon("h-4 w-4", `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`)}<a href="tel:+447398429456" class="hover:underline">+44 7398 429456</a></div><div class="flex items-center space-x-2">${icon("h-4 w-4", `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`)}<span>info@theaxispackaging.com</span></div></div><div class="hidden md:flex items-center space-x-4"><span>Follow us:</span><div class="flex space-x-3"><a href="https://www.facebook.com/share/14YENMTyjLk/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-200 transition-colors">${icon("h-4 w-4", `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`)}</a><span class="opacity-70" aria-hidden="true">${icon("h-4 w-4", `<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>`)}</span><a href="https://www.instagram.com/theaxispackaging/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-200 transition-colors">${icon("h-4 w-4", `<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>`)}</a><a href="https://www.linkedin.com/company/the-axis-packaging/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-200 transition-colors">${icon("h-4 w-4", `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>`)}</a></div></div></div></div><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between h-20 sm:h-20"><a href="/" class="flex items-center space-x-3 group"><div class="relative"><img src="/assets/logo-320.webp" alt="Axis Packaging Logo" width="320" height="320" class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover group-hover:scale-105 transition-transform duration-200" style="height:120px;width:120px;transform:scale(1.3)" /></div><div><span class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 bg-clip-text -">Axis Packaging</span><p class="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block">Your Box, Your Brand</p></div></a><nav class="hidden lg:flex items-center space-x-8">${nav}</nav><div class="hidden lg:flex items-center space-x-4"><a href="/quote"><button class="${headerQuote}" type="button">Get Quote</button></a><a href="/contact"><button class="${headerContact}" type="button">Contact Us</button></a></div><button class="lg:hidden p-2" type="button" aria-label="Toggle menu">${icon("h-6 w-6", `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`)}</button></div></div></header><main><section class="relative flex items-center justify-center overflow-hidden" style="height:85vh;min-height:600px"><div class="absolute inset-0"><picture><source type="image/avif" srcset="/assets/hero/banner-640.avif 640w, /assets/hero/banner-960.avif 960w, /assets/hero/banner-1280.avif 1280w, /assets/hero/banner-1536.avif 1536w" sizes="100vw" /><source type="image/webp" srcset="/assets/hero/banner-640.webp 640w, /assets/hero/banner-960.webp 960w, /assets/hero/banner-1280.webp 1280w, /assets/hero/banner-1536.webp 1536w" sizes="100vw" /><img src="/assets/hero/banner-1280.webp" alt="Custom printed packaging boxes by Axis Packaging UK" width="1536" height="1024" fetchpriority="high" decoding="sync" class="absolute inset-0 h-full w-full object-cover" /></picture><div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div><div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10"></div></div><div class="relative z-10 container mx-auto px-4 py-12 lg:py-16 text-center"><div class="max-w-5xl mx-auto"><div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100/95 to-orange-100/95 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 mb-6 shadow-2xl border border-yellow-200/50 hover:scale-105 transition-transform duration-300">${icon("w-4 h-4 mr-2 text-orange-600", `<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>`)}<span>Premium Packaging Solutions</span></div><h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight" style="text-shadow:3px 3px 6px rgba(0,0,0,0.9)">Create Custom Boxes &amp; <span class="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text -">Packaging</span> of Your Dreams</h1><p class="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed" style="text-shadow:2px 2px 4px rgba(0,0,0,0.8)">Order personalized, high-quality custom printed packaging and branded boxes your customers will love all-in-one place.</p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"><a href="/quote"><button class="${quoteButton}" type="button">Request a Quote${icon("ml-2 h-5 w-5", `<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>`)}</button></a><a href="/products"><button class="${outlineButton}" type="button">Choose Packaging Style${icon("ml-2 h-5 w-5", `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>`)}</button></a></div><div class="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 mb-6"><div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20">${icon("w-4 h-4 text-green-300", `<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>`)}<span class="font-bold">24/7</span><span>Customer Support</span></div><div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20">${icon("w-4 h-4 text-yellow-300", `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>`)}<span class="font-bold">Fast</span><span>Turnaround Options</span></div><div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20">${icon("w-4 h-4 text-orange-300", `<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>`)}<span class="font-bold">Custom</span><span>Printed Packaging</span></div></div><div class="mt-6"><span class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100/95 to-emerald-100/95 backdrop-blur-md text-green-800 rounded-full text-sm font-semibold shadow-xl border border-green-200/50 hover:scale-105 transition-transform duration-300">${icon("w-4 h-4 text-green-600", `<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>`)}Premium Quality Packaging</span></div></div></div></section></main></div></div>`;
  const headerStart = markup.indexOf("<header");
  const headerEnd = markup.indexOf("</header>");
  const sectionStart = markup.indexOf("<section");
  const sectionEnd = markup.indexOf("</section>");
  if (headerStart < 0 || headerEnd < 0 || sectionStart < 0 || sectionEnd < 0) {
    throw new Error("Homepage prerender markup is missing the header or hero");
  }
  return {
    header: markup.slice(headerStart, headerEnd + "</header>".length),
    hero: markup
      .slice(sectionStart, sectionEnd + "</section>".length)
      .replace("<section ", '<section id="static-hero" '),
  };
}

function productBody(product, h1) {
  const alt = (product.alt || product.name).split(",")[0].trim();
  const links = [
    { phrase: "All packaging products", href: "/products" },
    ...((product.internalLinks || []).map((link) => ({ phrase: link.phrase, href: link.href }))),
  ];
  const linkHtml = links
    .map((link) => `<li><a href="${esc(link.href)}">${esc(link.phrase)}</a></li>`)
    .join("");
  return `<main><h1>${esc(h1)}</h1><img src="${esc(product.image)}" alt="${esc(alt)}" width="800" height="384" /><p>${esc(product.description)}</p><nav aria-label="Related packaging"><ul>${linkHtml}</ul></nav></main>`;
}

const pages = [];
const home = seoPage.STATIC_PAGE_SEO.home;
const homeShell = homepageBody(home);
pages.push({
  path: "/",
  title: home.title,
  description: home.description,
  image: "/assets/banner.jpg",
  type: "website",
  keywords: "custom packaging UK, custom boxes UK, custom printed boxes UK, bespoke packaging UK, branded packaging",
  header: homeShell.header,
  hero: homeShell.hero,
  body: "",
  homeIntro: homeIntroHtml(homeIntro.HOME_INTRO),
  jsonLd: [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    webPageSchema({ title: home.title, description: home.description, path: "/" }),
  ],
});

for (const [key, page] of Object.entries(STATIC_PAGE_SEO)) {
  if (key === "home" || key === "blog") continue;
  const rich = {
    about: {
      staticContent: aboutStaticHtml(aboutContent.ABOUT_PAGE),
      jsonLd: [
        organizationSchema(),
        webPageSchema({
          title: page.title,
          description: page.description,
          path: page.path,
          type: "AboutPage",
        }),
      ],
    },
    contact: {
      staticContent: contactStaticHtml(contactContent.CONTACT_PAGE),
      jsonLd: [
        organizationSchema(),
        localBusinessSchema(),
        webPageSchema({
          title: page.title,
          description: page.description,
          path: page.path,
          type: "ContactPage",
        }),
      ],
    },
    faqs: {
      staticContent: faqsStaticHtml(faqContent.FAQ_PAGE_COPY, faqContent.FAQ_PAGE_ITEMS),
      jsonLd: [
        webPageSchema({
          title: page.title,
          description: page.description,
          path: page.path,
        }),
        faqPageSchema(
          faqContent.FAQ_PAGE_ITEMS.map((faq) => ({ question: faq.question, answer: faq.answer }))
        ),
      ],
    },
  }[key];
  pages.push({
    path: page.path,
    title: page.title,
    description: page.description,
    image: "/assets/banner.jpg",
    type: "website",
    body: rich || ["products", "industries", "sustainability", "moq", "quote"].includes(key) ? "" : `<main><h1>${esc(page.h1 || page.title)}</h1><p>${esc(page.description)}</p><h2>Related pages</h2><nav aria-label="Related pages"><ul><li><a href="/products">Packaging products</a></li><li><a href="/industries">Industries</a></li><li><a href="/quote">Request a quotation</a></li><li><a href="/contact">Contact us</a></li><li><a href="/faqs">Packaging FAQs</a></li></ul></nav></main>`,
    staticContent:
      rich?.staticContent ||
      (key === "products" ? productsIndexStaticHtml(catalogOrder.newestFirst(PRODUCT_CATEGORIES)) : undefined) ||
      (key === "industries" ? industriesIndexStaticHtml(INDUSTRIES) : undefined) ||
      (key === "sustainability" ? sustainabilityStaticHtml(sustainabilityContent.SUSTAINABILITY_PAGE) : undefined) ||
      (key === "moq" ? moqStaticHtml(moqContent.MOQ_PAGE) : undefined),
    beforeRoot: key === "quote" ? quoteIntroHtml(quoteContent.QUOTE_GUIDE) : "",
    jsonLd: rich?.jsonLd || [
      webPageSchema({
        title: page.title,
        description: page.description,
        path: page.path,
        type: page.path === "/products" || page.path === "/industries" ? "CollectionPage" : "WebPage",
      }),
    ],
  });
}

const missingImages = [];
const brokenLinks = [];
const slugs = new Set(PRODUCT_CATEGORIES.map((product) => product.slug));
if (slugs.size !== 49) {
  throw new Error(`Expected 49 products, found ${slugs.size}`);
}

for (const product of PRODUCT_CATEGORIES) {
  const built = seoPage.buildProductSeo(product);
  const routePath = `/products/${product.slug}`;
  const imageFile = path.join(root, "public", (product.image || "").replace(/^\//, ""));
  if (!product.image || !fs.existsSync(imageFile)) missingImages.push(product.slug);
  for (const link of product.internalLinks || []) {
    const target = link.href.replace(/^\//, "").split("/");
    if (target[0] === "products" && !slugs.has(target[1])) brokenLinks.push(`${product.slug} -> ${link.href}`);
    if (target[0] === "industries" && !INDUSTRIES.some((industry) => industry.slug === target[1])) {
      brokenLinks.push(`${product.slug} -> ${link.href}`);
    }
  }
  const h1 = product.h1 || product.name;
  const faqs = product.faqs || [];
  pages.push({
    path: routePath,
    title: built.title,
    description: built.description,
    image: product.image,
    type: "product",
    keywords: `${built.primaryTopic}, custom packaging UK, custom printed boxes`,
    body: "",
    staticContent: productStaticHtml(product, PRODUCT_CATEGORIES),
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.breadcrumbName || product.name, path: routePath },
      ]),
      productSchema({
        name: product.name,
        description: product.description,
        image: product.image,
        path: routePath,
        category: "Custom Packaging",
      }),
      faqPageSchema(faqs),
    ],
  });
}

for (const industry of INDUSTRIES) {
  const built = seoPage.buildIndustrySeo(industry);
  const routePath = `/industries/${industry.slug}`;
  pages.push({
    path: routePath,
    title: built.title,
    description: built.description,
    image: industry.image,
    type: "website",
    body: "",
    staticContent: industryStaticHtml(industry, PRODUCT_CATEGORIES, INDUSTRIES),
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: industry.name, path: routePath },
      ]),
      serviceSchema({
        name: `${industry.name} Packaging`,
        description: industry.description,
        path: routePath,
        image: industry.image,
      }),
    ],
  });
}

const blogs = JSON.parse(fs.readFileSync(path.join(root, "public/blogs-data/blogs.json"), "utf8"));
const publishedBlogs = blogs
  .filter((item) => item.isPublished && item.slug)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
const blogIndex = STATIC_PAGE_SEO.blog;
pages.push({
  path: blogIndex.path,
  title: blogIndex.title,
  description: blogIndex.description,
  image: "/assets/banner.jpg",
  type: "website",
  staticContent: blogIndexStaticHtml(blogIndexContent.BLOG_INDEX_COPY, publishedBlogs),
  jsonLd: [
    organizationSchema(),
    webPageSchema({
      title: blogIndex.title,
      description: blogIndex.description,
      path: blogIndex.path,
      type: "CollectionPage",
    }),
  ],
});
for (const blog of publishedBlogs) {
  const routePath = `/blog/${blog.slug}`;
  const title = blog.meta?.metaTitle || `${blog.title} | Axis Packaging`;
  const description = blog.meta?.metaDescription || blog.excerpt || blog.title;
  pages.push({
    path: routePath,
    title,
    description,
    image: blog.meta?.ogImage || blog.featuredImage,
    type: "article",
    publishedTime: blog.publishedAt,
    modifiedTime: blog.updatedAt || blog.publishedAt,
    staticContent: blogArticleStaticHtml(blog, publishedBlogs),
    body: "",
    jsonLd: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: blog.title, path: routePath },
      ]),
      blogPostingSchema({
        title: blog.title,
        description,
        image: blog.featuredImage,
        path: routePath,
        author: blog.author,
        datePublished: blog.publishedAt,
        dateModified: blog.updatedAt || blog.publishedAt,
      }),
      faqPageSchema((blog.faqs || []).map((faq) => ({ question: faq.question, answer: faq.answer }))),
    ],
  });
}

const paths = new Set();
for (const page of pages) {
  if (paths.has(page.path)) throw new Error(`Duplicate prerender path ${page.path}`);
  paths.add(page.path);
  writeRoute(page.path, renderPage(page));
}

const redirectLines = [
  "# Prerendered HTML is served before the app shell.",
  ...pages
    .filter((page) => page.path !== "/")
    .map((page) => `${page.path}  ${page.path.replace(/^\//, "")}.html  200`),
  "/*    /index.html   200",
  "",
];
fs.writeFileSync(path.join(distDir, "_redirects"), redirectLines.join("\n"));

const productFiles = PRODUCT_CATEGORIES.filter((product) =>
  fs.existsSync(path.join(distDir, "products", `${product.slug}.html`))
);
const sitemap = fs.readFileSync(path.join(distDir, "sitemap.xml"), "utf8");
const sitemapProducts = (sitemap.match(/\/products\//g) || []).length;
const robots = fs.readFileSync(path.join(distDir, "robots.txt"), "utf8");
const sample = fs.readFileSync(path.join(distDir, "products", "pizza-boxes.html"), "utf8");
const sampleTitle = (sample.match(/<title>([^<]*)<\/title>/) || [])[1];
const canonicals = sample.match(/rel="canonical"/g) || [];
const descriptions = sample.match(/name="description"/g) || [];

console.log(
  JSON.stringify(
    {
      pages: pages.length,
      products: PRODUCT_CATEGORIES.length,
      productFiles: productFiles.length,
      sitemapProducts,
      robotsHasSitemap: robots.includes("Sitemap: https://www.theaxispackaging.com/sitemap.xml"),
      robotsAllowsProducts: !/Disallow:\s*\/products/.test(robots),
      sampleTitle,
      sampleCanonicals: canonicals.length,
      sampleDescriptions: descriptions.length,
      missingImages,
      brokenLinks,
    },
    null,
    2
  )
);

if (productFiles.length !== 49 || sitemapProducts !== 49 || missingImages.length || brokenLinks.length) {
  process.exit(1);
}
if (!sampleTitle || sampleTitle.includes("Custom Packaging UK | Custom Printed Boxes")) {
  console.error("Pizza boxes raw title is still the homepage title");
  process.exit(1);
}
const homeHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const heroStart = homeHtml.indexOf('<section id="static-hero"');
const heroEnd = homeHtml.indexOf('<div id="app-root"');
const homeHero = heroStart >= 0 && heroEnd > heroStart ? homeHtml.slice(heroStart, heroEnd) : "";
const appRoot = homeHtml.slice(homeHtml.indexOf('<div id="app-root"'));
if (
  !homeHero.includes("/assets/hero/banner-1280.webp") ||
  !homeHero.includes("image/avif") ||
  homeHero.includes("Corrugated Shipping Boxes.jpg") ||
  !homeHero.includes("Create Custom Boxes &amp; ") ||
  !homeHero.includes("Order personalized, high-quality custom printed packaging") ||
  (homeHero.match(/<h1[\s>]/g) || []).length !== 1 ||
  appRoot.includes("<h1") ||
  appRoot.includes("/assets/hero/banner-1280.webp") ||
  !homeHtml.includes(home.description) ||
  (homeHtml.match(/name="description"/g) || []).length !== 1
) {
  console.error("Homepage prerender no longer matches the visible hero or its meta description");
  process.exit(1);
}
const versionedBlogsUrl = `/blogs-data/blogs.json?v=${blogsCacheKey(root)}`;
const bundles = fs.readdirSync(path.join(distDir, "assets")).filter((name) => name.endsWith(".js"));
const bundleHasVersion = bundles.some((name) =>
  fs.readFileSync(path.join(distDir, "assets", name), "utf8").includes(versionedBlogsUrl)
);
const sampleBlogHtml = fs.readFileSync(
  path.join(distDir, "blog", "custom-packaging-small-business-uk.html"),
  "utf8"
);
if (
  !bundleHasVersion ||
  !sampleBlogHtml.includes("<h1") ||
  !sampleBlogHtml.includes('rel="canonical"') ||
  (sampleBlogHtml.match(/name="description"/g) || []).length !== 1 ||
  sampleBlogHtml.includes("Blog Not Found")
) {
  console.error("Blog JSON cache key or prerendered blog SEO is missing");
  process.exit(1);
}

function sliceBetween(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker);
  return start >= 0 && end > start ? html.slice(start, end) : "";
}

const staticChecks = [
  {
    file: path.join(distDir, "about.html"),
    phrases: ["Custom packaging for UK businesses", "How we can help", "Custom printed boxes"],
  },
  {
    file: path.join(distDir, "contact.html"),
    phrases: ["Your Packaging Success", "static-contact-form", "What are your minimum order quantities?"],
  },
  {
    file: path.join(distDir, "faqs.html"),
    phrases: ["Frequently Asked Questions", "What are your minimum order quantities?"],
    htmlPhrases: ["FAQPage"],
  },
  {
    file: path.join(distDir, "blog.html"),
    phrases: ["Packaging Insights", "custom-packaging-small-business-uk"],
  },
];
for (const blogSlug of [
  "complete-guide-corrugated-box-packaging",
  "food-grade-containers-safe-storage-freshness",
  "custom-packaging-small-business-uk",
]) {
  const blog = publishedBlogs.find((item) => item.slug === blogSlug);
  const heading = blog?.content?.find((block) => block.type === "heading2")?.content;
  const answer = blog?.faqs?.[0]?.answer?.slice(0, 40);
  staticChecks.push({
    file: path.join(distDir, "blog", `${blogSlug}.html`),
    phrases: [blog.title, heading, answer].filter(Boolean),
  });
}
for (const check of staticChecks) {
  const html = fs.readFileSync(check.file, "utf8");
  const staticBody = sliceBetween(html, '<main id="static-content"', '<div id="app-root"');
  const appRootHtml = html.slice(html.indexOf('<div id="app-root"'));
  const missingPhrase = check.phrases.find((phrase) => !staticBody.includes(phrase) && !staticBody.includes(esc(phrase)));
  const missingHtmlPhrase = (check.htmlPhrases || []).find((phrase) => !html.includes(phrase));
  if (!staticBody || missingPhrase || missingHtmlPhrase || appRootHtml.includes("<h1") || (staticBody.match(/<h1[\s>]/g) || []).length !== 1) {
    console.error(`Prerendered content missing for ${check.file}: ${missingPhrase || missingHtmlPhrase || "structure"}`);
    process.exit(1);
  }
}
if ((fs.readFileSync(path.join(distDir, "blog.html"), "utf8").match(/href="\/blog\//g) || []).length < 38) {
  console.error("Blog index is missing article links");
  process.exit(1);
}

const routePaths = new Set(pages.map((page) => page.path));
const brokenStaticLinks = [];
const missingStaticImages = [];
for (const page of pages) {
  if (!page.staticContent) continue;
  const refs = collectLocalRefs(page.staticContent);
  for (const href of refs.hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathOnly = href.replace(/&amp;/g, "&").split(/[?#]/)[0];
    if (pathOnly !== "/" && !routePaths.has(pathOnly)) brokenStaticLinks.push(`${page.path} -> ${href}`);
  }
  for (const src of refs.images) {
    if (!src.startsWith("/") || src.startsWith("//")) continue;
    const file = path.join(root, "public", decodeURIComponent(src.replace(/&amp;/g, "&").split(/[?#]/)[0].replace(/^\//, "")));
    if (!fs.existsSync(file)) missingStaticImages.push(`${page.path} -> ${src}`);
  }
}
if (brokenStaticLinks.length || missingStaticImages.length) {
  console.error(JSON.stringify({ brokenStaticLinks, missingStaticImages }, null, 2));
  process.exit(1);
}
