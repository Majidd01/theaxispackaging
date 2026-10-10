/**
 * Central SEO helpers for Axis Packaging (UK).
 * Keep factual — no invented ratings, prices, or reviews.
 */

export const SITE_URL = "https://www.theaxispackaging.com";
export const SITE_NAME = "Axis Packaging";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/banner.png`;
export const DEFAULT_LOCALE = "en_GB";

export const BUSINESS = {
  name: "Axis Packaging",
  legalName: "Axis Packaging",
  url: SITE_URL,
  phone: "+44 7398 429456",
  phoneE164: "+447398429456",
  email: "info@theaxispackaging.com",
  streetAddress: "104 Pudsey Road",
  addressLocality: "Leeds",
  postalCode: "LS12 3TZ",
  addressCountry: "GB",
  addressRegion: "England",
  description:
    "UK custom packaging manufacturer specialising in custom printed boxes, bespoke packaging, and branded packaging solutions for businesses across the United Kingdom.",
  sameAs: [
    "https://www.facebook.com/share/14YENMTyjLk/",
    "https://www.instagram.com/theaxispackaging/",
    "https://www.linkedin.com/company/the-axis-packaging/",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    // Prefer www host; leave external URLs unchanged.
    return path
      .replace(/^https?:\/\/theaxispackaging\.com(?=\/|$)/i, SITE_URL)
      .replace(/^https?:\/\/www\.theaxispackaging\.com(?=\/|$)/i, SITE_URL);
  }
  const normalised = path.startsWith("/") ? path : `/${path}`;
  const trimmed =
    normalised.length > 1 && normalised.endsWith("/")
      ? normalised.slice(0, -1)
      : normalised;
  return `${SITE_URL}${trimmed}`;
}

export function absoluteImageUrl(src?: string | null): string {
  if (!src) return DEFAULT_OG_IMAGE;
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return absoluteUrl(src);
  }
  const normalised = src.startsWith("/") ? src : `/${src}`;
  return absoluteUrl(encodeURI(normalised));
}

export function truncateMeta(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).trim()}…`;
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/assets/logo.png"),
    },
    image: DEFAULT_OG_IMAGE,
    description: BUSINESS.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "sales",
        email: BUSINESS.email,
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [...BUSINESS.sameAs],
  };
}

/** LocalBusiness — factual NAP only; no AggregateRating / Review. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    image: DEFAULT_OG_IMAGE,
    logo: absoluteUrl("/assets/logo.png"),
    description: BUSINESS.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: [...BUSINESS.sameAs],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: BUSINESS.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export function webPageSchema(opts: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type || "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    name: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

/** Product schema without invented price/availability/SKU/reviews. */
export function productSchema(opts: {
  name: string;
  description: string;
  image?: string;
  path: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: truncateMeta(opts.description, 5000),
    image: [absoluteImageUrl(opts.image)],
    url: absoluteUrl(opts.path),
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: opts.category || "Custom Packaging",
    manufacturer: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  image?: string;
  path: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: absoluteImageUrl(opts.image),
    url: absoluteUrl(opts.path),
    mainEntityOfPage: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: opts.author
      ? { "@type": "Person", name: opts.author }
      : { "@id": `${SITE_URL}/#organization` },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/logo.png"),
      },
    },
    inLanguage: "en-GB",
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: truncateMeta(opts.description, 5000),
    url: absoluteUrl(opts.path),
    image: absoluteImageUrl(opts.image),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: "Custom Packaging",
  };
}
