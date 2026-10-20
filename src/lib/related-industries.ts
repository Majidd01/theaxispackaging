/**
 * Curated related industries for every industry page.
 * Prerender and the industry page both call relatedIndustriesFor.
 * There is no subscription industry, so ecommerce points at shipping.
 */
export const RELATED_INDUSTRY_SLUGS: Readonly<Record<string, readonly string[]>> = {
  apparel: ["retail", "ecommerce", "gift"],
  "bakery-cake": ["restaurant", "food", "beverage"],
  "beer-liquor": ["wine", "beverage", "gift"],
  beverage: ["restaurant", "coffee", "tea"],
  candle: ["gift", "cosmetics", "retail"],
  "candy-sweets": ["chocolate", "gift", "bakery-cake"],
  cannabis: ["retail", "ecommerce", "shipping"],
  chocolate: ["candy-sweets", "gift", "bakery-cake"],
  coffee: ["beverage", "restaurant", "tea"],
  cosmetics: ["soap", "retail", "ecommerce"],
  ecommerce: ["retail", "apparel", "shipping"],
  electronics: ["shipping", "retail", "ecommerce"],
  food: ["restaurant", "bakery-cake", "beverage"],
  gift: ["jewelry", "candle", "chocolate"],
  jewelry: ["gift", "cosmetics", "presentation"],
  pets: ["retail", "ecommerce", "toy"],
  pharmaceutical: ["retail", "ecommerce", "shipping"],
  presentation: ["gift", "jewelry", "retail"],
  restaurant: ["food", "bakery-cake", "beverage"],
  retail: ["ecommerce", "apparel", "cosmetics"],
  shipping: ["ecommerce", "apparel", "electronics"],
  soap: ["cosmetics", "retail", "gift"],
  toy: ["retail", "gift", "ecommerce"],
  tea: ["coffee", "beverage", "gift"],
  wine: ["beer-liquor", "beverage", "gift"],
};

export function relatedIndustriesFor<T extends { slug: string }>(slug: string, industries: readonly T[]): T[] {
  const bySlug = new Map(industries.map((industry) => [industry.slug, industry]));
  const seen = new Set<string>();
  const result: T[] = [];
  for (const candidate of RELATED_INDUSTRY_SLUGS[slug] ?? []) {
    if (!candidate || candidate === slug || seen.has(candidate)) continue;
    const industry = bySlug.get(candidate);
    if (!industry) continue;
    seen.add(candidate);
    result.push(industry);
    if (result.length === 3) break;
  }
  return result;
}

export function validateRelatedIndustries(industries: readonly { slug: string }[]): string[] {
  const slugs = industries.map((industry) => industry.slug);
  const known = new Set(slugs);
  const problems: string[] = [];
  const cataloguePrefix = new Set(slugs.slice(0, 3));

  if (known.size !== slugs.length) problems.push("duplicate industry slugs");

  for (const slug of slugs) {
    const recommendations = RELATED_INDUSTRY_SLUGS[slug];
    if (!recommendations) {
      problems.push(`missing recommendations for ${slug}`);
      continue;
    }
    if (recommendations.length !== 3) {
      problems.push(`${slug} has ${recommendations.length} recommendations`);
    }
    if (new Set(recommendations).size !== recommendations.length) {
      problems.push(`duplicate recommendations for ${slug}`);
    }
    if (recommendations.includes(slug)) problems.push(`self recommendation for ${slug}`);
    for (const recommendation of recommendations) {
      if (!known.has(recommendation)) problems.push(`${slug} recommends missing ${recommendation}`);
    }
    if (recommendations.length === 3 && recommendations.every((item) => cataloguePrefix.has(item))) {
      problems.push(`${slug} still uses the first catalogue industries`);
    }
  }

  for (const slug of Object.keys(RELATED_INDUSTRY_SLUGS)) {
    if (!known.has(slug)) problems.push(`recommendation map includes unknown ${slug}`);
  }

  return problems;
}
