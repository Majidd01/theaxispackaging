import { newestFirst } from "./catalog-order";
import { PRODUCT_CATEGORIES } from "./constants";

export type CatalogMenuProduct = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

/**
 * Desktop Products menu cards, in the same order as the /products catalogue.
 * Dated products stay first. Nothing here is a second copy of the catalogue.
 */
export const CATALOG_MENU_PRODUCTS: CatalogMenuProduct[] = newestFirst(PRODUCT_CATEGORIES).map((product) => ({
  name: product.name,
  slug: product.slug,
  description: product.description,
  image: product.image,
}));

/** Three columns by two rows: the menu stays the same size as the previous six cards. */
export const PRODUCT_MENU_CARD_COUNT = 6;
