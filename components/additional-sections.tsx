"use client"

import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { CORRUGATED_STYLES, CORRUGATED_OPTIONS, CORRUGATED_INSPIRATIONS, PACKAGING_SERVICES } from "@/lib/constants"

export function AdditionalSections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Corrugated Box Styles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Corrugated Box Styles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of corrugated box styles designed for different applications and strength requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORRUGATED_STYLES.slice(0, 4).map((style) => (
              <Link key={style.name} to="/corrugated-styles" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img src={style.image} alt={style.name} className="w-full h-32 md:h-56 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{style.description}</p>
                  <div className="flex items-center text-[var(--axis-orange)] font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Corrugated Options */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Corrugated Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various flute types and configurations to meet your specific packaging needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORRUGATED_OPTIONS.slice(0, 4).map((option) => (
              <Link key={option.name} to="/corrugated-options" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img src={option.image} alt={option.name} className="w-full h-32 md:h-56 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                    {option.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <div className="flex items-center text-[var(--axis-orange)] font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Corrugated Inspirations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Corrugated Inspirations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get inspired by creative corrugated packaging designs and innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORRUGATED_INSPIRATIONS.slice(0, 4).map((inspiration) => (
              <Link key={inspiration.name} to="/corrugated-inspirations" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img src={inspiration.image} alt={inspiration.name} className="w-full h-32 md:h-56 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                    {inspiration.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{inspiration.description}</p>
                  <div className="flex items-center text-[var(--axis-orange)] font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Packaging Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Packaging Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive packaging services from design to delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGING_SERVICES.slice(0, 4).map((service) => (
              <Link key={service.name} to="/packaging-services" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img src={service.image} alt={service.name} className="w-full h-32 md:h-56 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-[var(--axis-orange)] font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 