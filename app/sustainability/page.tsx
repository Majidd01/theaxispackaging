import { Footer } from "@/components/footer"
import { SeoHead } from "@/components/seo-head"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"
import { SUSTAINABILITY_PAGE } from "@/lib/sustainability-page-content"
import { webPageSchema } from "@/lib/seo"
import { hasStaticContent } from "@/lib/has-static-content"
import { Link } from "react-router-dom"

function renderLinked(text: string) {
  const links = [...SUSTAINABILITY_PAGE.links].sort((a, b) => b.phrase.length - a.phrase.length)
  let parts: Array<string | JSX.Element> = [text]
  links.forEach((link) => {
    const next: Array<string | JSX.Element> = []
    parts.forEach((part) => {
      if (typeof part !== "string") {
        next.push(part)
        return
      }
      const needle = link.phrase.toLowerCase()
      const lower = part.toLowerCase()
      let cursor = 0
      let found = lower.indexOf(needle, cursor)
      if (found === -1) {
        next.push(part)
        return
      }
      while (found !== -1) {
        const before = part.slice(cursor, found)
        const match = part.slice(found, found + link.phrase.length)
        if (before) next.push(before)
        next.push(
          <Link key={`${link.href}-${found}`} to={link.href} className="text-[var(--axis-orange)] hover:underline font-medium">
            {match}
          </Link>
        )
        cursor = found + link.phrase.length
        found = lower.indexOf(needle, cursor)
      }
      if (part.slice(cursor)) next.push(part.slice(cursor))
    })
    parts = next
  })
  return parts
}

export default function SustainabilityPage() {
  const seo = STATIC_PAGE_SEO.sustainability
  const jsonLd = webPageSchema({
    title: seo.title,
    description: seo.description,
    path: seo.path,
  })

  if (hasStaticContent("/sustainability")) {
    return (
      <>
        <SeoHead title={seo.title} description={seo.description} path={seo.path} jsonLd={jsonLd} />
        <Footer />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <SeoHead title={seo.title} description={seo.description} path={seo.path} jsonLd={jsonLd} />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-4">{SUSTAINABILITY_PAGE.h1}</h1>
            <p className="text-xl text-gray-600">{renderLinked(SUSTAINABILITY_PAGE.intro)}</p>
          </div>
        </section>
        {SUSTAINABILITY_PAGE.sections.map((section) => (
          <section key={section.title} className="py-12 bg-white border-t">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{renderLinked(section.intro)}</p>
              {section.subsections?.map((item) => (
                <div key={item.title} className="mb-6">
                  <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{renderLinked(item.content)}</p>
                </div>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.bullets.map((item) => (
                    <li key={item} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
