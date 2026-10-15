import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Heart, Target, Users } from "lucide-react"
import { SeoHead } from "@/components/seo-head"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"
import { organizationSchema, webPageSchema } from "@/lib/seo"
import { ABOUT_PAGE } from "@/lib/about-page-content"
import { hasStaticContent } from "@/lib/has-static-content"
import { Link } from "react-router-dom"

const valueIcons = [Target, Heart, Users, Award]

export default function AboutPage() {
  const seoHead = (
    <SeoHead
      title={STATIC_PAGE_SEO.about.title}
      description={STATIC_PAGE_SEO.about.description}
      path={STATIC_PAGE_SEO.about.path}
      jsonLd={[
        organizationSchema(),
        webPageSchema({
          title: STATIC_PAGE_SEO.about.title,
          description: STATIC_PAGE_SEO.about.description,
          path: STATIC_PAGE_SEO.about.path,
          type: "AboutPage",
        }),
      ]}
    />
  )

  if (hasStaticContent("/about")) {
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
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[var(--axis-orange)] text-white mb-6">{ABOUT_PAGE.badge}</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{ABOUT_PAGE.h1}</h1>
              <p className="text-xl text-blue-100 leading-relaxed">{ABOUT_PAGE.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">{ABOUT_PAGE.storyTitle}</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {ABOUT_PAGE.story.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={ABOUT_PAGE.storyImage}
                  alt={ABOUT_PAGE.storyAlt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{ABOUT_PAGE.valuesTitle}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{ABOUT_PAGE.valuesIntro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ABOUT_PAGE.values.map((value, index) => {
                const Icon = valueIcons[index]
                return (
                  <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-[var(--axis-orange)]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{ABOUT_PAGE.focusTitle}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{ABOUT_PAGE.focusIntro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {ABOUT_PAGE.focus.map((item) => (
                <Card key={item.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-44 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <Link to={item.href} className="text-[var(--axis-orange)] font-medium">
                      {item.linkLabel}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{ABOUT_PAGE.ctaTitle}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{ABOUT_PAGE.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                  {ABOUT_PAGE.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent"
                >
                  {ABOUT_PAGE.ctaSecondary}
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
