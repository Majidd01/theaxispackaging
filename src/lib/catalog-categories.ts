/**
 * Customer filters for the products catalogue.
 * Membership is by existing slug. All Products is the full ordered catalogue,
 * so a product in more than one filter still appears once there.
 */
export const PRODUCTS_PER_PAGE = 8;

export const CATALOG_FILTERS = [
  { id: "all", label: "All Products" },
  { id: "food", label: "Food & Takeaway" },
  { id: "bakery", label: "Bakery" },
  { id: "jewellery", label: "Jewellery" },
  { id: "retail", label: "Retail & Gift" },
  { id: "shipping", label: "Shipping" },
  { id: "specialist", label: "Specialist" },
] as const;

export type CatalogFilterId = (typeof CATALOG_FILTERS)[number]["id"];

const CATEGORY_SLUGS: Record<Exclude<CatalogFilterId, "all">, readonly string[]> = {
  food: [
    "printed-food-trays",
    "custom-restaurant-menu-cards",
    "pizza-boxes",
    "burger-boxes",
    "noodle-boxes",
    "sandwich-boxes",
    "printed-bagel-sandwich-boxes",
    "food-trays",
    "greaseproof-paper",
    "paper-cups",
    "bakery-boxes",
    "food-containers",
    "flexible-pouches",
    "tin-containers",
  ],
  bakery: [
    "bakery-boxes",
    "printed-bagel-sandwich-boxes",
    "greaseproof-paper",
    "sandwich-boxes",
  ],
  jewellery: ["jewelry-boxes", "rigid-boxes", "box-inserts"],
  retail: [
    "gift-boxes",
    "cosmetic-boxes",
    "tissue-paper",
    "jewelry-boxes",
    "folding-carton-boxes",
    "rigid-boxes",
    "box-inserts",
    "reusable-bags",
    "paper-bags",
    "kraft-boxes",
    "stickers-labels",
    "pop-displays",
    "custom-restaurant-menu-cards",
    "apparel-packaging",
    "candle-boxes",
    "wine-boxes",
    "home-decor-packaging-boxes",
    "eco-friendly",
    "tin-containers",
  ],
  shipping: [
    "mailer-boxes",
    "corrugated-shipping",
    "packing-tape",
    "subscription-boxes",
    "mailer-bags",
  ],
  specialist: [
    "toy-packaging",
    "electronics",
    "pharmaceutical",
    "supplement-bottles",
    "automotive-boxes",
    "sports-boxes",
    "pet-packaging",
    "hardware-boxes",
    "craft-boxes",
    "custom-garden-plant-packaging",
    "custom-office-boxes",
    "musical-instrument-boxes",
    "media-packaging",
    "custom-art-boxes",
  ],
};

export function isCatalogFilter(value: string | null): value is Exclude<CatalogFilterId, "all"> {
  return value != null && Object.prototype.hasOwnProperty.call(CATEGORY_SLUGS, value);
}

export function filterCatalog<T extends { slug: string }>(
  products: readonly T[],
  category: string | null
): T[] {
  if (!isCatalogFilter(category)) return [...products];
  const allowed = new Set(CATEGORY_SLUGS[category]);
  return products.filter((product) => allowed.has(product.slug));
}
