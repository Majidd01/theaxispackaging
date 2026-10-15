import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Calculator, Truck, DollarSign, CheckCircle } from "lucide-react"
import { SeoHead } from "@/components/seo-head"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"
import { webPageSchema } from "@/lib/seo"

export default function MOQPage() {
  const moqTiers = [
    {
      category: "Custom Boxes",
      moq: "Quoted",
      price: "On quotation",
      features: ["Custom design", "Multiple sizes", "Brand printing", "Fast turnaround options"],
    },
    {
      category: "Retail Packaging",
      moq: "Quoted",
      price: "On quotation",
      features: ["Display-ready", "Premium finishes", "Window options", "Shelf appeal"],
    },
    {
      category: "Food Packaging",
      moq: "Quoted",
      price: "On quotation",
      features: ["Food packaging", "Printed options", "Sizes to discuss", "Quoted per project"],
    },
    {
      category: "Cosmetic Boxes",
      moq: "Quoted",
      price: "On quotation",
      features: ["Finish options", "Closure options", "Insert options", "Premium materials"],
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Quotations",
      description: "Tell us the quantity you need and we will include it in your quotation",
    },
    {
      icon: Truck,
      title: "24h Quote Response",
      description: "We respond to quotation requests within 24 hours",
    },
    {
      icon: Package,
      title: "Premium Quality Packaging",
      description: "Packaging options are discussed around the product you need to pack",
    },
    {
      icon: Calculator,
      title: "Order Quantities",
      description: "Ask for the quantity you need. A minimum is confirmed on the quotation",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={STATIC_PAGE_SEO.moq.title}
        description={STATIC_PAGE_SEO.moq.description}
        path={STATIC_PAGE_SEO.moq.path}
        jsonLd={webPageSchema({
          title: STATIC_PAGE_SEO.moq.title,
          description: STATIC_PAGE_SEO.moq.description,
          path: STATIC_PAGE_SEO.moq.path,
        })}
      />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[var(--axis-orange)] text-white mb-6">Minimum Order Quantities</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Order Quantities for Your Packaging</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Tell us the product and the quantity you need. We will use those details to prepare a quotation.
              </p>
            </div>
          </div>
        </section>

        {/* MOQ Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Packaging We Can Quote</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Order quantities and prices are confirmed on your quotation, not published as a fixed rate
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
                      <div className="text-sm text-gray-500">Order quantity</div>
                      <div className="text-lg font-semibold text-[var(--axis-dark-blue)] mt-2">{tier.price}</div>
                      <div className="text-sm text-gray-500">Price</div>
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
                      Tell us the quantity you need. We will confirm whether that quantity can be supplied when we
                      prepare your quotation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">Do you offer volume discounts?</h3>
                    <p className="text-gray-600">
                      Include the quantities you are considering and we will show the relevant prices on your quotation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">How do MOQs affect lead times?</h3>
                    <p className="text-gray-600">
                      Timing depends on the packaging and the quantity. We confirm the expected timing on your
                      quotation. Quotation requests receive a 24h quote response.
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
