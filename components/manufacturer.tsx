"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Factory, Shield, Truck, Users } from "lucide-react";

export function Manufacturer() {
  const capabilities = [
    {
      icon: Factory,
      title: "State-of-the-Art Facilities",
      description: "Packaging options discussed around the product you need to pack",
      stat: "Custom packaging",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Talk to us about sizes, print and packaging options",
      stat: "24/7 Customer Support",
    },
    {
      icon: Clock,
      title: "Fast Production",
      description: "Fast turnaround options are confirmed on your quotation",
      stat: "24h Quote Response",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Packaging is supplied to the specification agreed on your quotation",
      stat: "Premium Quality Packaging",
    },
  ];

  const processes = [
    "Design Consultation",
    "Material Selection",
    "Prototype Development",
    "Quality Testing",
    "Mass Production",
    "Quality Control",
    "Packaging & Shipping",
    "Delivery & Support",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--axis-mid-blue)] text-white mb-4">
            <Factory className="h-4 w-4 mr-2" />
            Packaging Supply
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Custom Packaging for UK Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Axis Packaging supplies custom printed boxes and branded packaging for UK businesses. Tell us what you need and we will prepare a quotation.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[var(--axis-mid-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="h-8 w-8 text-[var(--axis-mid-blue)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="text-xl font-bold text-[var(--axis-orange)]">{capability.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Our Manufacturing Process
            </h3>
            <p className="text-gray-600">
              The steps below describe how an enquiry can be discussed. What is included is confirmed on your quotation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-4">
            {processes.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[var(--axis-orange)] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  {index + 1}
                </div>
                <div className="text-sm font-medium text-[var(--axis-dark-blue)]">{process}</div>
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-4 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-[var(--axis-dark-blue)] text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Request a Packaging Quotation
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tell us about your product and the packaging you need. We respond to quotation requests within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                <Factory className="h-4 w-4 mr-2" />
                Schedule Facility Tour
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent"
              >
                <Truck className="h-4 w-4 mr-2" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
