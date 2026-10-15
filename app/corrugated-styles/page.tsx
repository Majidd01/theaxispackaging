"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { CORRUGATED_STYLES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Factory, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CorrugatedStylesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(CORRUGATED_STYLES.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = CORRUGATED_STYLES.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Corrugated Box Styles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore our comprehensive range of corrugated box styles designed for every packaging need. 
            From single wall to triple wall, we have the perfect solution for your products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">Custom</h3>
              <p className="text-gray-600">Corrugated Styles</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">Premium</h3>
              <p className="text-gray-600">Quality Packaging</p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">24h</h3>
              <p className="text-gray-600">Quote Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corrugated Styles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Browse Corrugated Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of corrugated box styles, each designed for specific applications 
              and strength requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {currentItems.map((item) => (
              <Card key={item.slug} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">📦</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[var(--axis-orange)] transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 text-[var(--axis-dark-blue)]">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
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
                  className={currentPage === page ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90" : ""}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom Corrugated Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our corrugated packaging experts can help you choose the perfect style for your products. 
            Get a custom quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  )
} 