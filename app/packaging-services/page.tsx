"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { PACKAGING_SERVICES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Factory, Shield, ChevronLeft, ChevronRight, Users, Award } from "lucide-react"
import { Link } from "react-router-dom"

export default function PackagingServicesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(PACKAGING_SERVICES.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = PACKAGING_SERVICES.slice(startIndex, endIndex)

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
            Professional Packaging Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Our comprehensive packaging services cover every aspect of your project, 
            from initial design to final production and quality control.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Get Service Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              Download Service Guide
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
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">4+</h3>
              <p className="text-gray-600">Core Services</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">50+</h3>
              <p className="text-gray-600">Expert Team</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Browse Packaging Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional services ensure your packaging project is handled with expertise 
              and attention to detail at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {currentItems.map((item) => (
              <Card key={item.slug} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🔧</span>
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

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Why Choose Our Packaging Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver professional packaging services with expertise and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our experienced team of designers, engineers, and packaging specialists 
                ensure your project is handled with expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                End-to-End Service
              </h3>
              <p className="text-gray-600">
                From concept to production, we handle every aspect of your packaging 
                project with seamless coordination.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure your packaging meets the highest 
                standards and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Packaging Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our packaging services team is ready to help you create the perfect packaging 
            solution. Get started with a consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
                Schedule Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              Contact Services Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  )
} 