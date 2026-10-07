import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstantQuote } from "@/components/instant-quote"
import { SeoHead } from "@/components/seo-head"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"
import { webPageSchema } from "@/lib/seo"

export default function QuotePage() {
  const seo = STATIC_PAGE_SEO.quote
  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        jsonLd={webPageSchema({ title: seo.title, description: seo.description, path: seo.path })}
      />
      <Header />
      <main>
        <InstantQuote />
      </main>
      <Footer />
    </div>
  )
}
