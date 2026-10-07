import { ChatSupport } from "@/components/chat-support";
import { FAQs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quotation } from "@/components/quotation";
import { SolutionFeatures } from "@/components/solution-features";
import { Testimonials } from "@/components/testimonials";
import { SeoHead } from "@/components/seo-head";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { localBusinessSchema, organizationSchema, websiteSchema, webPageSchema } from "@/lib/seo";

export default function Home() {
  const seo = STATIC_PAGE_SEO.home;
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image="/assets/banner.png"
        keywords="custom packaging UK, custom boxes UK, custom printed boxes UK, bespoke packaging UK, branded packaging"
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema({
            title: seo.title,
            description: seo.description,
            path: seo.path,
          }),
        ]}
      />
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
