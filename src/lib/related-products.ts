/**
 * Curated related products for every catalogue page.
 * Prerender and the product page both call relatedProductsFor.
 * Order is fixed. Entries are existing public slugs only.
 */
export const RELATED_PRODUCT_SLUGS: Readonly<Record<string, readonly string[]>> = {
  "folding-carton-boxes": ["rigid-boxes", "kraft-boxes", "stickers-labels"],
  "rigid-boxes": ["jewelry-boxes", "gift-boxes", "cosmetic-boxes"],
  "box-inserts": ["rigid-boxes", "jewelry-boxes", "gift-boxes"],
  "kraft-boxes": ["folding-carton-boxes", "stickers-labels", "paper-bags"],
  "stickers-labels": ["folding-carton-boxes", "cosmetic-boxes", "kraft-boxes"],
  "pop-displays": ["folding-carton-boxes", "kraft-boxes", "stickers-labels"],
  "paper-bags": ["tissue-paper", "apparel-packaging", "gift-boxes"],
  "reusable-bags": ["paper-bags", "apparel-packaging", "eco-friendly"],
  "eco-friendly": ["kraft-boxes", "paper-bags", "reusable-bags"],
  "gift-boxes": ["rigid-boxes", "tissue-paper", "jewelry-boxes"],
  "tissue-paper": ["gift-boxes", "mailer-boxes", "paper-bags"],
  "jewelry-boxes": ["rigid-boxes", "gift-boxes", "box-inserts"],
  "cosmetic-boxes": ["rigid-boxes", "stickers-labels", "paper-bags"],
  "candle-boxes": ["rigid-boxes", "home-decor-packaging-boxes", "gift-boxes"],
  "tin-containers": ["stickers-labels", "candle-boxes", "flexible-pouches"],
  "wine-boxes": ["gift-boxes", "corrugated-shipping", "rigid-boxes"],
  "apparel-packaging": ["mailer-boxes", "paper-bags", "tissue-paper"],
  "home-decor-packaging-boxes": ["candle-boxes", "gift-boxes", "corrugated-shipping"],

  "pizza-boxes": ["burger-boxes", "food-trays", "greaseproof-paper"],
  "burger-boxes": ["pizza-boxes", "food-trays", "paper-bags"],
  "noodle-boxes": ["flexible-pouches", "food-containers", "pizza-boxes"],
  "sandwich-boxes": ["bakery-boxes", "printed-bagel-sandwich-boxes", "food-trays"],
  "printed-bagel-sandwich-boxes": ["sandwich-boxes", "bakery-boxes", "food-containers"],
  "food-trays": ["burger-boxes", "pizza-boxes", "printed-food-trays"],
  "printed-food-trays": ["food-trays", "burger-boxes", "bakery-boxes"],
  "paper-cups": ["food-containers", "greaseproof-paper", "paper-bags"],
  "greaseproof-paper": ["food-trays", "burger-boxes", "bakery-boxes"],
  "bakery-boxes": ["food-containers", "food-trays", "greaseproof-paper"],
  "food-containers": ["bakery-boxes", "food-trays", "paper-cups"],
  "custom-restaurant-menu-cards": ["pizza-boxes", "burger-boxes", "paper-cups"],
  "flexible-pouches": ["tin-containers", "food-containers", "kraft-boxes"],

  "mailer-boxes": ["mailer-bags", "corrugated-shipping", "packing-tape"],
  "mailer-bags": ["mailer-boxes", "flexible-pouches", "folding-carton-boxes"],
  "corrugated-shipping": ["mailer-boxes", "packing-tape", "subscription-boxes"],
  "packing-tape": ["mailer-boxes", "corrugated-shipping", "mailer-bags"],
  "subscription-boxes": ["mailer-boxes", "corrugated-shipping", "tissue-paper"],
  "custom-office-boxes": ["gift-boxes", "mailer-boxes", "corrugated-shipping"],

  "custom-art-boxes": ["craft-boxes", "box-inserts", "mailer-boxes"],
  "craft-boxes": ["custom-art-boxes", "box-inserts", "kraft-boxes"],
  "custom-garden-plant-packaging": ["corrugated-shipping", "mailer-boxes", "subscription-boxes"],
  "hardware-boxes": ["automotive-boxes", "box-inserts", "corrugated-shipping"],
  "automotive-boxes": ["hardware-boxes", "box-inserts", "corrugated-shipping"],
  "sports-boxes": ["mailer-boxes", "corrugated-shipping", "box-inserts"],
  "musical-instrument-boxes": ["box-inserts", "corrugated-shipping", "rigid-boxes"],
  "media-packaging": ["mailer-boxes", "folding-carton-boxes", "corrugated-shipping"],
  "toy-packaging": ["gift-boxes", "stickers-labels", "corrugated-shipping"],
  "pet-packaging": ["kraft-boxes", "food-containers", "mailer-boxes"],
  electronics: ["box-inserts", "mailer-boxes", "corrugated-shipping"],
  pharmaceutical: ["supplement-bottles", "folding-carton-boxes", "corrugated-shipping"],
  "supplement-bottles": ["pharmaceutical", "stickers-labels", "folding-carton-boxes"],
};

export function relatedProductsFor<T extends { slug: string }>(slug: string, products: readonly T[]): T[] {
  const bySlug = new Map(products.map((product) => [product.slug, product]));
  const seen = new Set<string>();
  const result: T[] = [];
  for (const candidate of RELATED_PRODUCT_SLUGS[slug] ?? []) {
    if (!candidate || candidate === slug || seen.has(candidate)) continue;
    const product = bySlug.get(candidate);
    if (!product) continue;
    seen.add(candidate);
    result.push(product);
    if (result.length === 3) break;
  }
  return result;
}

export function validateRelatedProducts(products: readonly { slug: string }[]): string[] {
  const slugs = products.map((product) => product.slug);
  const known = new Set(slugs);
  const problems: string[] = [];
  const cataloguePrefix = new Set(slugs.slice(0, 3));

  if (known.size !== slugs.length) problems.push("duplicate catalogue slugs");

  for (const slug of slugs) {
    const recommendations = RELATED_PRODUCT_SLUGS[slug];
    if (!recommendations) {
      problems.push(`missing recommendations for ${slug}`);
      continue;
    }
    if (recommendations.length < 1 || recommendations.length > 3) {
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
      problems.push(`${slug} still uses the first catalogue products`);
    }
  }

  for (const slug of Object.keys(RELATED_PRODUCT_SLUGS)) {
    if (!known.has(slug)) problems.push(`recommendation map includes unknown ${slug}`);
  }

  return problems;
}
