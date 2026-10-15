/**
 * Keyword map + unique titles/descriptions for static & template pages.
 * Primary topics avoid cannibalisation across products/industries.
 */

import { truncateMeta } from "./seo";

export type PageSeo = {
  path: string;
  pageType: string;
  primaryTopic: string;
  title: string;
  description: string;
  h1?: string;
};

export const STATIC_PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: "/",
    pageType: "Homepage",
    primaryTopic: "custom packaging UK",
    title: "Custom Packaging UK | Custom Printed Boxes | Axis Packaging",
    description: truncateMeta(
      "Axis Packaging supplies custom packaging and custom printed boxes for UK brands. Bespoke boxes and branded packaging from Leeds."
    ),
    h1: "Create Custom Boxes & Packaging of Your Dreams",
  },
  about: {
    path: "/about",
    pageType: "About",
    primaryTopic: "about Axis Packaging",
    title: "About Axis Packaging | Custom Packaging Supplier UK",
    description: truncateMeta(
      "Leeds custom packaging supplier for UK businesses. Custom printed boxes, food and bakery packaging, retail packaging, paper bags and branded packaging."
    ),
  },
  contact: {
    path: "/contact",
    pageType: "Contact",
    primaryTopic: "contact Axis Packaging",
    title: "Contact Axis Packaging | Custom Packaging Quote UK",
    description: truncateMeta(
      "Contact Axis Packaging in Leeds for custom packaging advice or a quote. Call +44 7398 429456 or email info@theaxispackaging.com."
    ),
  },
  products: {
    path: "/products",
    pageType: "Category",
    primaryTopic: "custom packaging products UK",
    title: "Custom Packaging Products UK | Axis Packaging",
    description: truncateMeta(
      "Browse custom packaging products from Axis Packaging — folding cartons, rigid boxes, mailers, kraft boxes, and more for UK retail and e-commerce brands."
    ),
  },
  industries: {
    path: "/industries",
    pageType: "Category",
    primaryTopic: "industry packaging solutions UK",
    title: "Industry Packaging Solutions UK | Axis Packaging",
    description: truncateMeta(
      "Explore industry-specific packaging solutions from Axis Packaging — cosmetics, food, retail, e-commerce, pharmacy, and more across the UK."
    ),
  },
  quote: {
    path: "/quote",
    pageType: "Landing",
    primaryTopic: "custom packaging quote UK",
    title: "Get a Custom Packaging Quote UK | Axis Packaging",
    description: truncateMeta(
      "Request a custom packaging quote from Axis Packaging. Share your specs for printed boxes, materials, and quantities — tailored for UK businesses."
    ),
  },
  sustainability: {
    path: "/sustainability",
    pageType: "Landing",
    primaryTopic: "sustainable packaging UK",
    title: "Sustainable Packaging UK | Axis Packaging",
    description: truncateMeta(
      "Ask Axis Packaging about paper-based and other packaging materials for UK orders. Any material requirement is confirmed on your quotation."
    ),
  },
  faqs: {
    path: "/faqs",
    pageType: "FAQ",
    primaryTopic: "custom packaging FAQs",
    title: "Custom Packaging FAQs | Axis Packaging",
    description: truncateMeta(
      "Answers to common questions about Axis Packaging — MOQs, production times, materials, custom printing, and shipping for UK packaging orders."
    ),
  },
  blog: {
    path: "/blog",
    pageType: "Blog",
    primaryTopic: "packaging insights blog",
    title: "Custom Packaging Blog UK | Tips & Guides | Axis Packaging",
    description: truncateMeta(
      "Explore custom packaging tips, printed box ideas and expert guides from Axis Packaging. Discover practical packaging solutions for UK businesses."
    ),
  },
  terms: {
    path: "/terms",
    pageType: "Policy",
    primaryTopic: "terms of service",
    title: "Terms of Service | Axis Packaging",
    description: truncateMeta(
      "Read the Terms of Service for Axis Packaging’s website and custom packaging services."
    ),
  },
  privacy: {
    path: "/privacy",
    pageType: "Policy",
    primaryTopic: "privacy policy",
    title: "Privacy Policy | Axis Packaging",
    description: truncateMeta(
      "Learn how Axis Packaging collects, uses, and protects personal information when you use our website or request a packaging quote."
    ),
  },
  moq: {
    path: "/moq",
    pageType: "Landing",
    primaryTopic: "packaging minimum order quantity",
    title: "Packaging Order Quantities | Axis Packaging",
    description: truncateMeta(
      "Ask Axis Packaging about order quantities for custom boxes and branded packaging. We prepare a quotation for the quantity you need."
    ),
  },
};

/** Improve product meta without inventing claims — UK commercial intent, unique per slug. */
export function buildProductSeo(input: {
  name: string;
  slug: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
}): { title: string; description: string; primaryTopic: string } {
  if (input.slug === "pop-displays") {
    return {
      title: truncateMeta("Custom POP Displays UK | Axis Packaging", 60),
      description: truncateMeta(
        input.metaDescription ||
          "Custom POP displays for UK shops, supermarkets and exhibitions. Cardboard, corrugated and fabric options, with printing confirmed on your quotation.",
        155
      ),
      primaryTopic: "custom pop displays",
    };
  }
  const primaryTopic = `${input.name} UK`.replace(/\s+/g, " ").trim();
  // Prefer clean UK commercial titles; avoid thin "Buy …" template titles.
  const title = `${stripBuyPrefix(input.name)} UK | Axis Packaging`;

  const description = truncateMeta(
    improveDescription(
      stripUnsupportedClaims(input.metaDescription || input.description),
      input.name
    ),
    155
  );

  return { title: truncateMeta(title, 60), description, primaryTopic };
}

function stripUnsupportedClaims(raw: string | undefined) {
  return (raw || "")
    .replace(/\bMOQ\s*100\b\.?/gi, "")
    .replace(/\bFree design proof\b\.?/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
}

function improveDescription(raw: string | undefined, name: string) {
  const base =
    raw?.trim() ||
    `Order ${name.toLowerCase()} from Axis Packaging in the UK. Custom sizes, printing options, and branded finishes for your products.`;
  if (/UK|United Kingdom|Leeds/i.test(base)) return base;
  return `${base.replace(/\.$/, "")} Available for UK businesses from Axis Packaging in Leeds.`;
}

export function buildIndustrySeo(input: {
  name: string;
  slug: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
}): { title: string; description: string; primaryTopic: string } {
  const primaryTopic = `${input.name} packaging UK`;
  const title = `${input.name} Packaging UK | Custom Boxes | Axis Packaging`;
  const description = truncateMeta(
    input.metaDescription ||
      input.description ||
      `Custom ${input.name.toLowerCase()} packaging solutions from Axis Packaging — tailored boxes and branding for UK businesses.`,
    155
  );
  return { title: truncateMeta(title, 60), description, primaryTopic };
}

function stripBuyPrefix(name: string) {
  return name.replace(/^Buy\s+/i, "").trim();
}

function ensureBrand(title: string) {
  if (/axis packaging/i.test(title)) return title;
  if (/\|?\s*Axis\s*$/i.test(title)) return title.replace(/\|\s*Axis\s*$/i, "| Axis Packaging");
  return `${title.replace(/\s*\|\s*$/, "")} | Axis Packaging`;
}
