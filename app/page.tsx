import { ChatSupport } from "@/components/chat-support";
import { FAQs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quotation } from "@/components/quotation";
import { SolutionFeatures } from "@/components/solution-features";
import { Testimonials } from "@/components/testimonials";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Eco-Packaging - Premium Custom Packaging Solutions</title>
        <meta name="description" content="Leading provider of custom packaging solutions including regular boxes, retail packaging, and more." />
        <link rel="canonical" href="https://theaxispackaging.com/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <SolutionFeatures />
        <Quotation />
        <FAQs />
        <Testimonials />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
}
