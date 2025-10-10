"use client";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CORRUGATED_INSPIRATIONS,
  CORRUGATED_OPTIONS,
  CORRUGATED_STYLES,
  INDUSTRIES,
  PACKAGING_SERVICES,
} from "@/lib/constants";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Factory,
  Package,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function IndustriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const industriesPerPage = 25;
  const totalPages = Math.ceil(INDUSTRIES.length / industriesPerPage);
  const startIndex = (currentPage - 1) * industriesPerPage;
  const endIndex = startIndex + industriesPerPage;
  const currentIndustries = INDUSTRIES.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Shop by Industries</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find the perfect packaging solutions tailored to your industry niche. Each industry has
            specific requirements and we understand them all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
              >
                Request a Quote
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">25+</h3>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">50+</h3>
              <p className="text-gray-600">Certified Facilities</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">3000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Shop by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect packaging solutions tailored to your industry niche. Each industry
              has specific requirements and we understand them all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentIndustries.map((industry) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{industry.icon}</span>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[var(--axis-orange)] transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-2 text-[var(--axis-dark-blue)]">
                      {industry.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {industry.description}
                    </CardDescription>
                    <div className="mt-4">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-32 md:h-56 object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
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
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Corrugated Box Styles */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Corrugated Box Styles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our range of corrugated box styles designed for different applications and
                strength requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORRUGATED_STYLES.slice(0, 4).map((style) => (
                <Link key={style.name} to="/corrugated-styles" className="group">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-32 md:h-56 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                        {style.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{style.description}</p>
                      <div className="flex items-center text-[var(--axis-orange)] font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Corrugated Options */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Corrugated Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from various flute types and configurations to meet your specific packaging
                needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORRUGATED_OPTIONS.slice(0, 4).map((option) => (
                <Link key={option.name} to="/corrugated-options" className="group">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-32 md:h-56 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                        {option.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      <div className="flex items-center text-[var(--axis-orange)] font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Corrugated Inspirations */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Corrugated Inspirations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get inspired by creative corrugated packaging designs and innovative solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORRUGATED_INSPIRATIONS.slice(0, 4).map((inspiration) => (
                <Link key={inspiration.name} to="/corrugated-inspirations" className="group">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <img
                        src={inspiration.image}
                        alt={inspiration.name}
                        className="w-full h-32 md:h-56 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var( --axis-primary-skyblue)] transition-colors">
                        {inspiration.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{inspiration.description}</p>
                      <div className="flex items-center text-[var(--axis-orange)] font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Packaging Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Packaging Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive packaging services from design to delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGING_SERVICES.slice(0, 4).map((service) => (
                <Link key={service.name} to="/packaging-services" className="group">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-32 md:h-56 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center text-[var(--axis-orange)] font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions CTA */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Industry-Specific Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our packaging experts understand the unique challenges and requirements of each
            industry. Let us create the perfect packaging solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?from=industries">
              <Button
                size="lg"
                className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]"
              >
                Download Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Why Choose Axis Packaging for Industry Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver industry-specific expertise with every packaging solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of industry regulations, requirements, and best practices for
                each sector.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Certified Manufacturing
              </h3>
              <p className="text-gray-600">
                Access to certified facilities worldwide ensuring quality and compliance for every
                industry.
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
                Rigorous quality control processes ensuring your packaging meets industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
}
