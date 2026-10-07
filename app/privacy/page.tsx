import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { SeoHead } from "@/components/seo-head"
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title={STATIC_PAGE_SEO.privacy.title}
        description={STATIC_PAGE_SEO.privacy.description}
        path={STATIC_PAGE_SEO.privacy.path}
      />
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--axis-orange)] text-white mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              At Axis Packaging, we are committed to protecting your privacy and ensuring the security of your personal
              information.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you request a quote, contact us, or
              subscribe to our newsletter.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              and communicate with you.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@axispackaging.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
