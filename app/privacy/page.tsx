import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Helmet } from "react-helmet-async"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - Axis Packaging</title>
        <meta name="description" content="Read Axis Packaging's privacy policy. We are committed to protecting your privacy and securing your personal information." />
        <link rel="canonical" href="https://theaxispackaging.com/privacy" />
      </Helmet>
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
