import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Calculator, Truck, DollarSign, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { SeoHead } from "@/components/seo-head"
import { hasStaticContent } from "@/lib/has-static-content"
import { MOQ_PAGE } from "@/lib/moq-page-content"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"
import { webPageSchema } from "@/lib/seo"

const benefitIcons = [DollarSign, Truck, Package, Calculator]

export default function MOQPage() {
  const moqTiers = MOQ_PAGE.tiers.map((tier) => ({ ...tier, moq: tier.note }))
  const benefits = MOQ_PAGE.points.map((point, index) => ({
    icon: benefitIcons[index] || Package,
    title: point.title,
    description: point.content,
  }))

  const seoHead = (
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
  )

  if (hasStaticContent("/moq")) {
    return (
      <>
        {seoHead}
        <Footer />
        <ChatSupport />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {seoHead}
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[var(--axis-orange)] text-white mb-6">Order quantities</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{MOQ_PAGE.h1}</h1>
              <p className="text-xl text-blue-100 leading-relaxed">{MOQ_PAGE.intro}</p>
            </div>
          </div>
        </section>

        {/* MOQ Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{MOQ_PAGE.catalogueTitle}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{MOQ_PAGE.catalogueIntro}</p>
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
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{MOQ_PAGE.quantityTitle}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{MOQ_PAGE.quantityIntro}</p>
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
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8 text-center">{MOQ_PAGE.questionsTitle}</h2>

              <div className="space-y-6">
                {MOQ_PAGE.questions.map((item) => (
                  <Card key={item.question} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Request a quantity quotation</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Send the product and the quantity you need. The quotation confirms what can be supplied.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                  Request a quotation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent"
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  )
}
