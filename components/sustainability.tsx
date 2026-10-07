"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Recycle, Award, TreePine, Droplets, Sun } from "lucide-react"

export function Sustainability() {
  const sustainabilityFeatures = [
    {
      icon: Recycle,
      title: "100% Recyclable Materials",
      description: "All our packaging materials are fully recyclable and eco-friendly",
    },
    {
      icon: TreePine,
      title: "FSC Certified Paper",
      description: "Sourced from responsibly managed forests with FSC certification",
    },
    {
      icon: Droplets,
      title: "Water-Based Inks",
      description: "Using eco-friendly, water-based printing inks for all designs",
    },
    {
      icon: Sun,
      title: "Solar-Powered Facilities",
      description: "Our manufacturing facilities run on renewable solar energy",
    },
  ]

  const certifications = [
    "FSC Certified",
    "ISO 14001",
    "Carbon Neutral",
    "ROHS Compliant",
    "Recyclable Materials",
    "Biodegradable Options",
  ]

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-green-600 text-white mb-4">
                <Leaf className="h-4 w-4 mr-2" />
                Sustainable Packaging
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Eco-Friendly Solutions for a Better Tomorrow
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're committed to protecting our planet while delivering exceptional packaging solutions. Our
                sustainable practices don't compromise on quality or design.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-3">Our Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                    <Award className="h-3 w-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More About Our Sustainability</Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <img
                  src="/assets/packify-eco-friendly-packaging.png"
                  alt="Axis Packaging sustainable packaging materials"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Floating Impact Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50%</div>
                <div className="text-sm text-gray-600">Carbon Footprint Reduction</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1M+</div>
                <div className="text-sm text-gray-600">Trees Saved Annually</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
