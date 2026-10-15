"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, Users, Award } from "lucide-react"

export function Quote() {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your quote within 24 hours",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Free design consultation included",
    },
    {
      icon: Award,
      title: "Best Pricing",
      description: "Competitive rates with no hidden fees",
    },
    {
      icon: Calculator,
      title: "Accurate Estimates",
      description: "Detailed breakdown of all costs",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--axis-mid-blue)] text-white mb-4">Get Started</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Ready to Get Your Custom Quote?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us what you need to pack and we will prepare a quotation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">Why Choose Our Quote Process?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[var(--axis-mid-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-[var(--axis-mid-blue)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--axis-dark-blue)] mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[var(--axis-dark-blue)] mb-3">What's Included in Your Quote:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Detailed pricing breakdown</li>
                <li>• Material recommendations</li>
                <li>• Design mockups and samples</li>
                <li>• Production timeline</li>
                <li>• Shipping and delivery options</li>
                <li>• Volume discount opportunities</li>
              </ul>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
              <CardTitle className="text-center">
                <Calculator className="h-8 w-8 mx-auto mb-2" />
                Get Your Free Quote Now
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                    Start Your Custom Packaging Journey
                  </h3>
                  <p className="text-gray-600">
                    Fill out our quick form and receive a comprehensive quote tailored to your specific needs.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2 text-green-700">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Response Time: Within 24 Hours</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white py-4 text-lg"
                >
                  Start Quote Process
                </Button>

                <p className="text-sm text-gray-500">
                  No commitment required • Free consultation included • Secure and confidential
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
