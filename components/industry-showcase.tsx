"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INDUSTRIES } from "@/lib/constants";
import { ArrowRight, Factory, Package, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function IndustryShowcase() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  // Get first 12 industries for homepage display
  const featuredIndustries = INDUSTRIES.slice(0, 12);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6">
            <Factory className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Industry Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6 leading-tight">
            Shop by{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Find the perfect packaging solutions tailored to your industry niche. Each industry has specific requirements and we understand them all.
          </p>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-1">25+</h3>
              <p className="text-sm text-gray-600">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-1">50+</h3>
              <p className="text-sm text-gray-600">Certified Facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-1">3000+</h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-1">15+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {featuredIndustries.map((industry) => (
            <Link 
              key={industry.slug} 
              to={`/industries/${industry.slug}`}
              className="group"
              onMouseEnter={() => setHoveredIndustry(industry.slug)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{industry.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-[var(--axis-dark-blue)] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-24 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-center text-orange-600 font-medium text-sm group-hover:text-orange-700 transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/industries">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -translate-x-8 -translate-y-8"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Industry-Specific Solutions?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Our packaging experts understand the unique challenges and requirements of each industry. Let us create the perfect packaging solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white px-6 py-3"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/quote">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] px-6 py-3"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
