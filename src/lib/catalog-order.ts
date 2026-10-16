/**
 * Products listing order.
 * `listedOn` is set only when a product is actually added (YYYY-MM-DD).
 * Older products have no date and keep their existing relative order.
 * Sitemap generation uses the source array, not this sort.
 */
export type CatalogDated = { listedOn?: string };

export function newestFirst<T extends CatalogDated>(products: readonly T[]): T[] {
  return products
    .map((product, index) => ({ product, index }))
    .sort((a, b) => {
      const aTime = a.product.listedOn ? Date.parse(a.product.listedOn) : Number.NaN;
      const bTime = b.product.listedOn ? Date.parse(b.product.listedOn) : Number.NaN;
      const aHas = Number.isFinite(aTime);
      const bHas = Number.isFinite(bTime);
      if (aHas && bHas && aTime !== bTime) return bTime - aTime;
      if (aHas !== bHas) return aHas ? -1 : 1;
      return a.index - b.index;
    })
    .map((item) => item.product);
}
