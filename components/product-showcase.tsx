"use client"

import { Link } from "react-router-dom"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { Package } from "lucide-react"

export function ProductShowcase() {
  const items = [
    { name: "Folding Cartons", img: "/assets/packify-corrugated-boxes.png", slug: "folding-carton-boxes" },
    { name: "Rigid Boxes", img: "/assets/packify-luxury-boxes.png", slug: "rigid-boxes" },
    { name: "Mailer Bags", img: "/assets/packify-mailers.png", slug: "mailer-bags" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-16 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute -bottom-16 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full text-sm font-medium text-orange-700 mb-6 shadow-lg backdrop-blur-sm">
            <Package className="w-4 h-4 mr-2" />
            Featured Products
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 bg-clip-text - mb-4">
            Featured Packaging
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular packaging solutions designed to elevate your brand
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link 
              key={item.name} 
              to={`/products/${item.slug}`} 
              className="group transform hover:-translate-y-2 transition-all duration-500 block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-[var(--axis-dark-blue)] group-hover:text-orange-600 transition-colors duration-300 text-lg mb-2">
                    {item.name}
                  </h3>
                  <div className="flex justify-center space-x-2">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
