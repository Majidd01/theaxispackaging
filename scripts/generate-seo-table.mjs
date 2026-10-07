import { readFileSync, writeFileSync } from "fs";

const text = readFileSync("src/lib/constants.ts", "utf8");

function extractArray(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  return source.slice(start, end);
}

const prodPart = extractArray(
  text,
  "const _PRODUCT_CATEGORIES = [",
  "export const PRODUCT_CATEGORIES"
);
const indPart = extractArray(text, "export const INDUSTRIES = [", "export const CORRUGATED_STYLES");

function getPairs(part) {
  const names = [...part.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
  const slugs = [...part.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  const h1s = [...part.matchAll(/h1:\s*"([^"]+)"/g)].map((m) => m[1]);
  return slugs.map((slug, i) => ({
    slug,
    name: names[i] || slug,
    h1: h1s[i] || names[i] || slug,
  }));
}

const products = getPairs(prodPart);
const industries = getPairs(indPart);
const blogs = JSON.parse(readFileSync("public/blogs-data/blogs.json", "utf8")).filter(
  (b) => b.isPublished
);

const rows = [
  {
    url: "/",
    pageType: "Homepage",
    primaryTopic: "custom packaging UK",
    title: "Custom Packaging UK | Custom Printed Boxes | Axis Packaging",
    description:
      "Axis Packaging designs and manufactures custom packaging and custom printed boxes for UK brands. Bespoke boxes, branded packaging, and flexible MOQs from Leeds.",
    h1: "Create Custom Boxes & Packaging of Your Dreams",
    canonical: "https://theaxispackaging.com/",
    schema: "Organization, LocalBusiness, WebSite, WebPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/about",
    pageType: "About",
    primaryTopic: "about Axis Packaging",
    title: "About Axis Packaging | Custom Packaging Manufacturer UK",
    description: "Meet Axis Packaging — a Leeds-based custom packaging partner for UK businesses.",
    h1: "Crafting Packaging Excellence Since 2014",
    canonical: "https://theaxispackaging.com/about",
    schema: "Organization, AboutPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/contact",
    pageType: "Contact",
    primaryTopic: "contact Axis Packaging",
    title: "Contact Axis Packaging | Custom Packaging Quote UK",
    description: "Contact Axis Packaging in Leeds for custom packaging advice or a quote.",
    h1: "Your Packaging Success Starts with Axis Packaging",
    canonical: "https://theaxispackaging.com/contact",
    schema: "Organization, LocalBusiness, ContactPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/products",
    pageType: "Category",
    primaryTopic: "custom packaging products UK",
    title: "Custom Packaging Products UK | Boxes & Branding | Axis Packaging",
    description: "Browse custom packaging products from Axis Packaging.",
    h1: "Custom Packaging Solutions",
    canonical: "https://theaxispackaging.com/products",
    schema: "CollectionPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/industries",
    pageType: "Category",
    primaryTopic: "industry packaging solutions UK",
    title: "Industry Packaging Solutions UK | Axis Packaging",
    description: "Explore industry-specific packaging solutions from Axis Packaging.",
    h1: "Shop by Industries",
    canonical: "https://theaxispackaging.com/industries",
    schema: "CollectionPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/quote",
    pageType: "Landing",
    primaryTopic: "custom packaging quote UK",
    title: "Get a Custom Packaging Quote UK | Axis Packaging",
    description: "Request a custom packaging quote from Axis Packaging.",
    h1: "Instant quote page H1",
    canonical: "https://theaxispackaging.com/quote",
    schema: "WebPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/sustainability",
    pageType: "Landing",
    primaryTopic: "sustainable packaging UK",
    title: "Sustainable Packaging UK | Eco-Friendly Options | Axis Packaging",
    description: "Discover Axis Packaging sustainable packaging options.",
    h1: "Sustainable Packaging Solutions",
    canonical: "https://theaxispackaging.com/sustainability",
    schema: "WebPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/faqs",
    pageType: "FAQ",
    primaryTopic: "custom packaging FAQs",
    title: "Custom Packaging FAQs | Orders, Materials & Shipping | Axis Packaging",
    description: "Answers to common questions about Axis Packaging.",
    h1: "Frequently Asked Questions",
    canonical: "https://theaxispackaging.com/faqs",
    schema: "WebPage (FAQPage type)",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/blog",
    pageType: "Blog",
    primaryTopic: "packaging insights blog",
    title: "Packaging Insights & Tips Blog | Axis Packaging",
    description: "Read Axis Packaging guides on custom boxes and packaging.",
    h1: "Packaging Insights & Tips",
    canonical: "https://theaxispackaging.com/blog",
    schema: "CollectionPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/moq",
    pageType: "Landing",
    primaryTopic: "packaging minimum order quantity",
    title: "Packaging MOQ Explained | Flexible Order Quantities | Axis Packaging",
    description: "Learn about Axis Packaging flexible MOQs.",
    h1: "Flexible MOQ Options for Every Business",
    canonical: "https://theaxispackaging.com/moq",
    schema: "WebPage",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/terms",
    pageType: "Policy",
    primaryTopic: "terms of service",
    title: "Terms of Service | Axis Packaging",
    description: "Read the Terms of Service for Axis Packaging.",
    h1: "Terms of Service",
    canonical: "https://theaxispackaging.com/terms",
    schema: "—",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/privacy",
    pageType: "Policy",
    primaryTopic: "privacy policy",
    title: "Privacy Policy | Axis Packaging",
    description: "Learn how Axis Packaging protects personal information.",
    h1: "Privacy Policy",
    canonical: "https://theaxispackaging.com/privacy",
    schema: "—",
    indexable: "Yes",
    status: "Optimized",
  },
  {
    url: "/admin/blog",
    pageType: "Admin",
    primaryTopic: "n/a",
    title: "Blog Admin | Axis Packaging",
    description: "Internal blog administration.",
    h1: "—",
    canonical: "https://theaxispackaging.com/admin/blog",
    schema: "—",
    indexable: "No (noindex)",
    status: "Protected",
  },
];

products.forEach((p) => {
  rows.push({
    url: `/products/${p.slug}`,
    pageType: "Product",
    primaryTopic: `${p.name} UK`,
    title: `${p.name} UK | Axis Packaging`.slice(0, 60),
    description: `Custom ${p.name.toLowerCase()} from Axis Packaging for UK brands.`,
    h1: p.h1,
    canonical: `https://theaxispackaging.com/products/${p.slug}`,
    schema: "Product, BreadcrumbList, FAQPage (when present)",
    indexable: "Yes",
    status: "Optimized",
  });
});

industries.forEach((p) => {
  rows.push({
    url: `/industries/${p.slug}`,
    pageType: "Industry",
    primaryTopic: `${p.name} packaging UK`,
    title: `${p.name} Packaging UK | Custom Boxes | Axis Packaging`.slice(0, 60),
    description: `Custom ${p.name.toLowerCase()} packaging solutions from Axis Packaging.`,
    h1: `${p.name} Packaging Solutions`,
    canonical: `https://theaxispackaging.com/industries/${p.slug}`,
    schema: "Service, BreadcrumbList",
    indexable: "Yes",
    status: "Optimized",
  });
});

blogs.forEach((b) => {
  rows.push({
    url: `/blog/${b.slug}`,
    pageType: "Blog Post",
    primaryTopic: b.title,
    title: b.meta?.metaTitle || `${b.title} | Axis Packaging`,
    description: (b.meta?.metaDescription || b.excerpt || "").slice(0, 160),
    h1: b.title,
    canonical: `https://theaxispackaging.com/blog/${b.slug}`,
    schema: "BlogPosting, BreadcrumbList, FAQPage (when present)",
    indexable: "Yes",
    status: "Optimized",
  });
});

const summary = {
  count: rows.length,
  productCount: products.length,
  industryCount: industries.length,
  blogCount: blogs.length,
  rows,
};

writeFileSync("seo-page-table.json", JSON.stringify(summary, null, 2));
console.log(
  JSON.stringify({
    pages: rows.length,
    products: products.length,
    industries: industries.length,
    blogs: blogs.length,
  })
);
