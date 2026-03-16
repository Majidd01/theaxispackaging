import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Helmet } from "react-helmet-async"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - Axis Packaging</title>
        <meta name="description" content="Read Axis Packaging's Terms of Service. This document outlines the rules and regulations for using our website and custom packaging services." />
        <link rel="canonical" href="https://theaxispackaging.com/terms" />
      </Helmet>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--axis-orange)] text-white mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              These Terms of Service govern your use of Axis Packaging's website and services.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using our website, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">Services</h2>
            <p className="text-gray-600 mb-4">
              Axis Packaging provides custom packaging solutions and related services as described on our website.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--axis-dark-blue)] mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at legal@axispackaging.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
