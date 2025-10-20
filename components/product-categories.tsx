"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Package, Shield, Star, Truck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const placeholderImg = "/assets/placeholder.jpg";

interface ProductCategoriesProps {
  selectedIndustry?: {
    name: string;
    description: string;
    icon: string;
    slug: string;
  } | null;
}

export function ProductCategories({ selectedIndustry }: ProductCategoriesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(PRODUCT_CATEGORIES.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = PRODUCT_CATEGORIES.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            {selectedIndustry
              ? `${selectedIndustry.name} Packaging Solutions`
              : "One for All Solution"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {selectedIndustry
              ? `Explore our specialized packaging products perfect for the ${selectedIndustry.name} industry. Each solution is designed to meet your specific requirements and enhance your brand presence.`
              : "Get everything custom packaging your business needs all in one place. From folding cartons to luxury rigid boxes, we have it all."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {currentProducts.map((product, index) => (
            <Link 
              key={product.slug} 
              to={`/products/${product.slug}`}
              className="group transform hover:-translate-y-2 transition-all duration-500 block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  {/* Product Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || placeholderImg}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = placeholderImg;
                      }}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Product Number Badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xs font-bold text-[var(--axis-dark-blue)]">
                        #{String(startIndex + index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Product Name */}
                    <CardTitle className="text-lg text-center text-[var(--axis-dark-blue)] group-hover:text-orange-600 transition-colors duration-300 font-bold">
                      {product.name}
                    </CardTitle>
                    
                    {/* Quick Features */}
                    <div className="mt-3 flex justify-center space-x-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span>Premium</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                        <span>Custom</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-16">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className={
                  currentPage === page
                    ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                    : ""
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Product Features */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600">Highest quality materials and craftsmanship</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
              Custom Design
            </h3>
            <p className="text-gray-600">Tailored to your brand and requirements</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">Quick turnaround times worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Certified</h3>
            <p className="text-gray-600">ISO certified and compliant materials</p>
          </div>
        </div>
      </div>
    </section>
  );
}
