import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { SeoHead } from "@/components/seo-head"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"
import { TERMS_PAGE } from "@/lib/legal-page-content"
import { hasStaticContent } from "@/lib/has-static-content"
import { webPageSchema } from "@/lib/seo"

export default function TermsPage() {
  const seoData = STATIC_PAGE_SEO.terms
  const seo = (
    <SeoHead
      title={seoData.title}
      description={seoData.description}
      path={seoData.path}
      jsonLd={webPageSchema({
        title: seoData.title,
        description: seoData.description,
        path: seoData.path,
      })}
    />
  )
  if (hasStaticContent("/terms")) {
    return (
      <>
        {seo}
        <Footer />
      </>
    )
  }
  return (
    <div className="min-h-screen bg-white">
      {seo}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--axis-orange)] text-white mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">{TERMS_PAGE.h1}</h1>
            {TERMS_PAGE.updated ? <p className="text-gray-600">Last updated: {TERMS_PAGE.updated}</p> : null}
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">{TERMS_PAGE.intro}</p>
            {TERMS_PAGE.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
                {section.subsections?.map((subsection) => (
                  <div key={subsection.title}>
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mt-6 mb-3">{subsection.title}</h3>
                    {subsection.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-600 mb-4">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
