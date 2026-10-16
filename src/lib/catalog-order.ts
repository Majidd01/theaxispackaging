/**
 * Products listing order.
 * Dated products (`listedOn`, YYYY-MM-DD, only when actually added) come first, newest first.
 * Featured products (`featuredOrder`, lower number first) come next.
 * Everything else keeps its existing source order.
 * A future product with `listedOn` appears before the featured group.
 * Sitemap generation uses the source array, not this sort.
 */
export type CatalogDated = { listedOn?: string; featuredOrder?: number };

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

      const aFeature = typeof a.product.featuredOrder === "number" ? a.product.featuredOrder : Number.NaN;
      const bFeature = typeof b.product.featuredOrder === "number" ? b.product.featuredOrder : Number.NaN;
      const aFeatured = Number.isFinite(aFeature);
      const bFeatured = Number.isFinite(bFeature);
      if (aFeatured && bFeatured && aFeature !== bFeature) return aFeature - bFeature;
      if (aFeatured !== bFeatured) return aFeatured ? -1 : 1;

      return a.index - b.index;
    })
    .map((item) => item.product);
}
