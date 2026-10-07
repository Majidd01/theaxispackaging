import { Helmet } from "react-helmet-async";
import {
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteImageUrl,
  absoluteUrl,
  truncateMeta,
} from "@/lib/seo";

export type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
  jsonLd?: object | object[] | null;
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Unified document head for SPA routes (react-helmet-async).
 * Does not affect visible layout.
 */
export function SeoHead({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  jsonLd,
  keywords,
  publishedTime,
  modifiedTime,
}: SeoHeadProps) {
  const canonical = absoluteUrl(path);
  const desc = truncateMeta(description);
  const ogImage = absoluteImageUrl(image || DEFAULT_OG_IMAGE);
  const robots = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd.filter(Boolean)
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta property="og:type" content={type === "product" ? "website" : type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="author" content={SITE_NAME} />
      <link rel="alternate" hrefLang="en-GB" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}

      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="theme-color" content="#0B3C5D" />
      {path === "/" ? (
        <link rel="preload" as="image" href="/assets/banner.png" fetchPriority="high" />
      ) : null}

      {schemas.map((schema, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      <link rel="home" href={SITE_URL} />
    </Helmet>
  );
}
