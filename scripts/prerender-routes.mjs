import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";

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

  const body = page.body || "";
  html = html.replace("<div id=\"root\"></div>", `<div id="root">${body}</div>`);
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
pages.push({
  path: "/",
  title: home.title,
  description: home.description,
  image: "/assets/banner.png",
  type: "website",
  keywords: "custom packaging UK, custom boxes UK, custom printed boxes UK, bespoke packaging UK, branded packaging",
  body: `<main><h1>${esc(home.h1 || home.title)}</h1><p>${esc(home.description)}</p></main>`,
  jsonLd: [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    webPageSchema({ title: home.title, description: home.description, path: "/" }),
  ],
});

for (const [key, page] of Object.entries(STATIC_PAGE_SEO)) {
  if (key === "home") continue;
  pages.push({
    path: page.path,
    title: page.title,
    description: page.description,
    image: "/assets/banner.png",
    type: page.pageType === "Blog" ? "website" : "website",
    body: `<main><h1>${esc(page.h1 || page.title)}</h1><p>${esc(page.description)}</p></main>`,
    jsonLd: [
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
if (slugs.size !== 47) {
  throw new Error(`Expected 47 products, found ${slugs.size}`);
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
    body: productBody(product, h1),
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
    body: `<main><h1>${esc(industry.h1 || built.title)}</h1><p>${esc(industry.description)}</p></main>`,
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
for (const blog of blogs.filter((item) => item.isPublished && item.slug)) {
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
    body: `<main><h1>${esc(blog.title)}</h1><p>${esc(description)}</p></main>`,
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

if (productFiles.length !== 47 || sitemapProducts !== 47 || missingImages.length || brokenLinks.length) {
  process.exit(1);
}
if (!sampleTitle || sampleTitle.includes("Custom Packaging UK | Custom Printed Boxes")) {
  console.error("Pizza boxes raw title is still the homepage title");
  process.exit(1);
}
