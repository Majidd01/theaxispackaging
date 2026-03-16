import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Calculator, Truck, DollarSign, CheckCircle } from "lucide-react"
import { Helmet } from "react-helmet-async"

export default function MOQPage() {
  const moqTiers = [
    {
      category: "Custom Boxes",
      moq: "100 units",
      price: "$2.50 - $8.00",
      features: ["Custom design", "Multiple sizes", "Brand printing", "Fast turnaround"],
    },
    {
      category: "Retail Packaging",
      moq: "250 units",
      price: "$1.80 - $6.50",
      features: ["Display-ready", "Premium finishes", "Window options", "Shelf appeal"],
    },
    {
      category: "Food Packaging",
      moq: "500 units",
      price: "$0.75 - $3.20",
      features: ["FDA approved", "Grease resistant", "Temperature stable", "Food safe"],
    },
    {
      category: "Cosmetic Boxes",
      moq: "200 units",
      price: "$3.00 - $12.00",
      features: ["Luxury finishes", "Magnetic closures", "Foam inserts", "Premium materials"],
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Lower MOQs mean better pricing for small to medium businesses",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick turnaround times even for smaller order quantities",
    },
    {
      icon: Package,
      title: "Quality Assurance",
      description: "Same high-quality standards regardless of order size",
    },
    {
      icon: Calculator,
      title: "Flexible Options",
      description: "Customizable MOQs based on your specific requirements",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Minimum Order Quantities - Flexible Packaging Solutions - Axis Packaging</title>
        <meta name="description" content="Learn about our flexible minimum order quantities (MOQs). We offer small to large scale packaging solutions tailored to every business size." />
        <link rel="canonical" href="https://theaxispackaging.com/moq" />
      </Helmet>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[var(--axis-orange)] text-white mb-6">Minimum Order Quantities</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Flexible MOQ Options for Every Business</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We understand that every business has different needs. That's why we offer flexible minimum order
                quantities to accommodate businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* MOQ Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Our MOQ Structure</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing and flexible minimums designed to help your business grow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moqTiers.map((tier, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-[var(--axis-dark-blue)] text-white">
                    <CardTitle className="text-center">
                      <Package className="h-8 w-8 mx-auto mb-2" />
                      {tier.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-[var(--axis-orange)] mb-1">{tier.moq}</div>
                      <div className="text-sm text-gray-500">Minimum Order</div>
                      <div className="text-lg font-semibold text-[var(--axis-dark-blue)] mt-2">{tier.price}</div>
                      <div className="text-sm text-gray-500">per unit</div>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Why Our MOQ Policy Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Designed with your business success in mind</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-[var(--axis-orange)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8 text-center">
                MOQ Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">
                      Can I order less than the minimum quantity?
                    </h3>
                    <p className="text-gray-600">
                      While we have standard MOQs, we understand that sometimes you need smaller quantities. Contact us
                      to discuss your specific needs - we may be able to accommodate smaller orders with adjusted
                      pricing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">Do you offer volume discounts?</h3>
                    <p className="text-gray-600">
                      Yes! The more you order, the better the per-unit pricing becomes. Our sales team can provide
                      detailed volume pricing tiers based on your specific requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">How do MOQs affect lead times?</h3>
                    <p className="text-gray-600">
                      Smaller orders (at or near MOQ) typically have faster turnaround times. Larger orders may require
                      additional production time, but we'll always provide accurate timelines upfront.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a custom quote based on your specific quantity needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                Get Custom Quote
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent"
              >
                Discuss MOQ Options
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  )
}
