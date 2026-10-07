import { readFileSync, writeFileSync } from "fs";

const table = readFileSync("seo-table.md", "utf8");
const counts = JSON.parse(readFileSync("seo-page-table.json", "utf8"));

const report = `# SEO Report — Axis Packaging

**Site:** https://theaxispackaging.com/  
**Brand:** Axis Packaging  
**Market:** United Kingdom  
**Report date:** 7 October 2026  
**Design constraint:** No visual redesign; SEO changes are metadata, technical, semantic, and safe content/branding fixes only.

---

## 1. Executive Summary

A full technical and on-page SEO implementation was completed for the Axis Packaging Vite + React SPA. Unique titles, meta descriptions, Open Graph/Twitter tags, canonicals, robots directives, and JSON-LD schema were rolled out across static, product, industry, and blog templates. The XML sitemap now includes products, industries, and published blog posts (110 indexable URLs in build output). Admin routes are noindexed and excluded from the sitemap. Brand typos (e.g. Packify.ai / theasxis) were corrected where clearly wrong. Production build completed successfully after changes.

**Key outcome:** Stronger UK commercial relevance, crawlability, and structured data — without changing the site’s visual design or core functionality.

---

## 2. Website Technology Detected

| Area | Detection |
|------|-----------|
| Framework | Vite 5 + React 18 + TypeScript SPA |
| Routing | react-router-dom (client-side) |
| Metadata | react-helmet-async (\`SeoHead\` component) |
| Styling | Tailwind CSS + shadcn/ui |
| State | Redux Toolkit |
| Blog data | \`public/blogs-data/blogs.json\` |
| Deploy | Vercel (\`vercel.json\` SPA rewrite) + Netlify-style \`_redirects\` |
| Analytics | GA4 \`G-7CGWJZE8QL\` in \`index.html\` |
| Search Console | Verification meta present (\`jM01qumzVf4bAKCk7S_eYDZel2tTe-aKtWR2gb_5BW0\`) |
| Sitemap | \`vite-plugin-sitemap\` → \`dist/sitemap.xml\` |
| Robots | \`public/robots.txt\` |

**Rendering note:** This is a client-rendered SPA. Metadata is injected via Helmet after JS execution. Google generally executes JS; other crawlers may be limited. SSR/prerender is recommended as a future enhancement (see §29).

---

## 3. Pages Audited

| Group | Count |
|-------|------:|
| Static / policy / utility | 12 (+ admin) |
| Product pages | ${counts.productCount} |
| Industry pages | ${counts.industryCount} |
| Published blog posts | ${counts.blogCount} |
| **Total mapped pages** | **${counts.count}** |
| Sitemap URLs (build) | 110 (excludes admin) |

---

## 4. Issues Found

1. Incomplete / inconsistent meta (missing OG/Twitter on most pages)
2. Weak or template “Buy …” product titles; limited UK intent
3. Broken Vite sitemap import path (\`./lib/constants\` did not exist)
4. Blog routes missing from sitemap
5. Soft-404: unknown routes redirected to homepage
6. Incorrect Netlify redirects mapping live product slugs to non-existent URLs
7. Admin blog crawlable / indexable
8. Brand errors: Packify.ai testimonials/alt; “theasxis Packaging” on contact H1
9. Company hours listed as PST for a Leeds UK business
10. Products \`?industry=\` URLs used as canonical (duplicate risk)
11. Dead Twitter \`#\` link in header
12. Dual GSC tokens (live \`index.html\` vs unused Next \`app/layout.tsx\`)
13. SPA performance: all routes eagerly loaded
14. Unrouted legacy pages (packaging-services / corrugated-*) still orphaned in codebase

---

## 5. Issues Fixed

1. Central \`SeoHead\` + SEO helpers for titles, descriptions, OG, Twitter, robots, canonicals, JSON-LD
2. Unique UK-focused titles/descriptions for all major templates
3. Fixed Vite \`@/lib\` alias + sitemap import from \`src/lib/constants\`
4. Sitemap includes products, industries, blog; excludes \`/admin\`
5. Dedicated 404 page with \`noindex\` (no homepage soft-redirect)
6. Removed harmful product 301s from \`_redirects\`
7. Admin \`noindex, nofollow\`
8. Brand string corrections (Packify / theasxis)
9. Removed incorrect PST timezone from hours string
10. Products listing always canonicalises to \`/products\`
11. Replaced dead Twitter link with non-crawlable span (visual parity)
12. Preserved live GSC verification in \`index.html\`
13. Route-level code splitting + vendor/helmet chunks
14. Footer internal links expanded (Products, Industries, Blog, FAQs, etc.)

---

## 6. Technical SEO Changes

- \`components/seo-head.tsx\` — unified head management
- \`src/lib/seo.ts\` — absolute URLs, schema builders
- \`src/lib/seo-page-data.ts\` — keyword map + title/description builders
- \`vite.config.mts\` — correct imports, blog routes, manual chunks, admin exclude
- \`public/robots.txt\` — allow site; disallow \`/admin\`; sitemap reference
- \`vercel.json\` — cache headers for static assets; security headers
- \`index.html\` — \`lang="en-GB"\`, default meta/OG/Twitter, preconnect to GTM
- Catch-all route → real 404 page

---

## 7. On-Page SEO Changes

- Homepage and all major templates: unique title + meta description
- Product pages: \`{Product Name} UK | Axis Packaging\` pattern via \`buildProductSeo\`
- Industry pages: \`{Industry} Packaging UK | Custom Boxes | Axis Packaging\`
- Blog index + posts: meta from \`blog.meta\` with fallbacks; article dates \`en-GB\`
- Canonical URLs consistently \`https://theaxispackaging.com{path}\`
- Keywords meta only where helpful (home / products) — not stuffed

---

## 8. Keyword Mapping

| Page type | Primary topic approach |
|-----------|------------------------|
| Home | custom packaging UK / custom printed boxes UK |
| Products hub | custom packaging products UK |
| Each product | product-specific + UK (e.g. Custom Cosmetic Boxes UK) |
| Industries hub | industry packaging solutions UK |
| Each industry | {industry} packaging UK |
| Quote | custom packaging quote UK |
| Sustainability | sustainable packaging UK |
| Blog | informational packaging topics (non-competing with product money pages) |
| Contact / About | branded navigational |

Cannibalisation control: products own product queries; industries own sector queries; home owns broad UK packaging head terms.

---

## 9. SEO Titles

Implemented via \`STATIC_PAGE_SEO\` and builders. Examples:

- Home: \`Custom Packaging UK | Custom Printed Boxes | Axis Packaging\`
- Contact: \`Contact Axis Packaging | Custom Packaging Quote UK\`
- Product example: \`Custom Cosmetic Boxes UK | Axis Packaging\`
- Industry example: \`Cosmetics Packaging UK | Custom Boxes | Axis Packaging\`

Full list: table in §31 / \`seo-page-table.json\`.

---

## 10. Meta Descriptions

Unique descriptions (~140–160 chars where practical) with UK benefit framing. Product descriptions append Leeds/UK context when missing. Blog uses existing \`meta.metaDescription\` / excerpt.

---

## 11. Heading Changes

- No visual H1 redesign.
- Contact H1 brand typo fixed: “theasxis Packaging” → “Axis Packaging” (same styling).
- Existing single H1 pattern retained on templates.
- Quote page H1 remains: “Get Your Custom Quote in Minutes”.

---

## 12. Internal Links Added

- Footer Quick Links: Industries, Packaging Blog, FAQs; Products anchor text clarified to “Custom Packaging Products”
- Existing product related-products + industry→product links retained
- Blog posts already include CTA links to commercial pages (unchanged structure)

---

## 13. Broken Links Fixed

- Removed incorrect Netlify 301s that redirected valid product URLs to missing slugs
- Soft-404 homepage redirects replaced with true 404 page
- Header Twitter \`href="#"\` removed from crawlable link graph
- Instagram UTM clutter cleaned to canonical profile URL

---

## 14. Image Optimizations

- Product main image: descriptive alt (first segment of alt string), width/height, \`fetchPriority="high"\`, \`decoding="async"\`
- Blog featured image: dimensions + high priority
- Homepage hero: improved aria-label; preload of \`/assets/banner.png\`
- **Not done (needs assets / design risk):** bulk WebP/AVIF conversion of existing PNG/JPG library — flagged for human/media pipeline

---

## 15. Core Web Vitals Improvements

- LCP: hero image preload on homepage; high fetch priority on product/blog heroes
- INP: route-level code splitting reduces initial JS parse
- CLS: width/height hints on key content images
- TTFB: static asset cache headers on Vercel

Further CWV gains likely need image compression CDN and optional prerender.

---

## 16. Performance Changes

- Lazy-loaded routes in \`src/App.tsx\`
- Manual chunks: \`vendor\`, \`helmet\`
- CSS code splitting enabled
- DNS prefetch / preconnect for Google Tag Manager
- Long-cache headers for hashed/static assets

---

## 17. Schema Added

| Schema | Where |
|--------|-------|
| Organization | Home, About, Contact |
| LocalBusiness (factual NAP only) | Home, Contact |
| WebSite | Home |
| WebPage / AboutPage / ContactPage / CollectionPage | Relevant templates |
| Product (no price/reviews/SKU) | Product pages |
| Service | Industry pages |
| BreadcrumbList | Products, industries, blog posts |
| FAQPage | Product FAQs / blog FAQs when present |
| BlogPosting | Blog posts |

**Not added:** AggregateRating, Review, Offer price — insufficient verified data.

---

## 18. Sitemap Changes

- Fixed data import path
- Added \`/blog\` + all published \`/blog/:slug\`
- Added all product + industry routes
- Excluded \`/admin\`, \`/admin/blog\`
- Hostname: \`https://theaxispackaging.com\`

---

## 19. Robots.txt Changes

\`\`\`
User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/
Sitemap: https://theaxispackaging.com/sitemap.xml
\`\`\`

---

## 20. Canonical Changes

- All templates use absolute HTTPS canonicals
- Products hub ignores \`?industry=\` in canonical (avoids duplicates)
- Blog uses path canonical (or \`meta.canonicalUrl\` when present via meta title/description path — path-based default)

---

## 21. Redirect Changes

- Removed incorrect product slug 301s from \`public/_redirects\`
- Kept SPA fallback \`/* → /index.html 200\`
- No blanket 404→homepage redirect

---

## 22. 404 Fixes

- New \`app/not-found.tsx\` with \`noindex\`
- Unknown routes render 404 (not homepage)
- Product/industry/blog missing entities also \`noindex\`

---

## 23. Duplicate Content Fixes

- Industry-filtered products URLs no longer self-canonicalise with query strings
- Admin noindexed
- Soft-404 homepage duplication removed

---

## 24. Accessibility / Semantic Improvements

- \`html lang="en-GB"\`
- Improved image alts / aria-labels where safe
- Footer/company copy clarifies Leeds UK positioning
- Form placeholders unchanged (no visual redesign)

---

## 25. Brand Consistency Issues

**Fixed**
- Packify.ai → Axis Packaging (testimonial + sustainability alt)
- theasxis Packaging → Axis Packaging (contact)
- Address trailing period normalised
- Hours: removed incorrect “PST”

**Flagged for human review (not auto-changed)**
- About page “Since 2014” and named team bios (may be template/demo)
- Testimonials names/companies and “50k+ / 4.9/5” style claims
- FDA / ISO / FSC / carbon-neutral claims for UK market accuracy
- MOQ page USD price ranges (may be demo)
- Asset filenames still contain \`packify-\` (paths only; not user-visible brand)
- Unused Next.js \`app/layout.tsx\` contains a different GSC token

---

## 26. Analytics / Search Console Findings

- **GA4:** \`G-7CGWJZE8QL\` in \`index.html\` — preserved, not duplicated
- **GSC verification:** \`jM01qumzVf4bAKCk7S_eYDZel2tTe-aKtWR2gb_5BW0\` — preserved
- Stale alternate verification in unused Next layout — left untouched; do not delete live tag
- No GTM container ID found (gtag only)

---

## 27. Remaining Issues

1. Client-only rendering limits some non-Google crawlers / social preview bots that do not execute JS well (mitigated by solid \`index.html\` defaults for home)
2. Original large PNG/JPG assets not recompressed to WebP/AVIF
3. Blog listing/detail pages still omit site Header/Footer (pre-existing layout)
4. Unrouted corrugated/services pages remain in repo but not linked
5. Lint script is a no-op (\`echo 'no lint'\`)
6. Dependency audit reported existing npm vulnerabilities (pre-existing; not introduced by SEO work)

---

## 28. Requires Human Review

1. Verify business founding year, team names, certifications, and testimonial authenticity
2. Confirm opening hours for Leeds (timezone + days)
3. Confirm FDA/FSC/ISO/carbon claims for UK advertising compliance
4. Review MOQ pricing table (USD figures)
5. Add real Twitter/X profile URL or permanently remove icon
6. Consider SSR/prerender (e.g. vite-plugin-ssr / prerender) for stronger SEO
7. Compress/convert media library to WebP with responsive \`srcset\`
8. Decide fate of unrouted packaging-services / corrugated pages (route, 301, or delete)
9. Optional: visible breadcrumbs styling already exists on product/industry — UI breadcrumb schema is present; no new visible breadcrumb UI added on pages that lacked it
10. Submit updated sitemap in Google Search Console after deploy

---

## 29. Future SEO Recommendations

1. Implement prerender or SSR for critical commercial URLs
2. Image CDN + AVIF/WebP pipeline
3. Build FAQPage JSON-LD for the main FAQs page from verified Q&A content
4. Create UK-specific landing content only where search demand justifies it (avoid doorway pages)
5. Monitor GSC for coverage / CWV after deploy
6. Add shipping/returns policy pages if they reflect real business practices
7. Strengthen E-E-A-T with verified author bios on blog posts
8. Local SEO: Google Business Profile alignment with NAP

---

## 30. Exact Files Modified

**Created**
- \`components/seo-head.tsx\`
- \`src/lib/seo.ts\`
- \`src/lib/seo-page-data.ts\`
- \`app/not-found.tsx\`
- \`scripts/generate-seo-table.mjs\`
- \`scripts/write-seo-report.mjs\`
- \`SEO-REPORT.md\`
- \`seo-page-table.json\` (generated inventory)

**Updated**
- \`index.html\`
- \`vite.config.mts\`
- \`tsconfig.json\`
- \`vercel.json\`
- \`public/robots.txt\`
- \`public/_redirects\`
- \`src/App.tsx\`
- \`src/lib/constants.ts\` (company NAP/hours only)
- \`src/lib/slices/testimonialsSlice.ts\`
- \`app/page.tsx\`
- \`app/about/page.tsx\`
- \`app/contact/page.tsx\`
- \`app/quote/page.tsx\`
- \`app/sustainability/page.tsx\`
- \`app/terms/page.tsx\`
- \`app/privacy/page.tsx\`
- \`app/moq/page.tsx\`
- \`app/faqs/page.tsx\`
- \`app/products/page.tsx\`
- \`app/products/[slug]/page.tsx\`
- \`app/industries/page.tsx\`
- \`app/industries/[slug]/page.tsx\`
- \`app/admin/blog/page.tsx\`
- \`components/blog-page-new.tsx\`
- \`components/blog-detail-new.tsx\`
- \`components/footer.tsx\`
- \`components/header.tsx\`
- \`components/hero.tsx\`
- \`components/sustainability.tsx\`

---

## 31. Full Page SEO Table

${table}

---

## 32. Build Verification

\`\`\`
npm install
npm run build
\`\`\`

**Result:** Success (Vite production build).  
**Sitemap:** \`dist/sitemap.xml\` generated with products, industries, and blog URLs; admin excluded.  
**Robots:** \`public/robots.txt\` copied to deploy output with site.

---

*End of SEO Report*
`;

writeFileSync("SEO-REPORT.md", report);
console.log("Wrote SEO-REPORT.md");
