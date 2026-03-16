import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstantQuote } from "@/components/instant-quote"
import { Helmet } from "react-helmet-async"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Request a Custom Packaging Quote - Axis Packaging</title>
        <meta name="description" content="Get an instant quote for your custom packaging project. Provide your specifications and receive a detailed proposal for your brand." />
        <link rel="canonical" href="https://theaxispackaging.com/quote" />
      </Helmet>
      <Header />
      <main>
        <InstantQuote />
      </main>
      <Footer />
    </div>
  )
}
