import { lazy, Suspense, type ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Quotation } from "@/components/quotation";
import { SeoHead } from "@/components/seo-head";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { localBusinessSchema, organizationSchema, websiteSchema, webPageSchema } from "@/lib/seo";

const SolutionFeatures = lazy(() =>
  import("@/components/solution-features").then((module) => ({ default: module.SolutionFeatures })),
);
const FAQs = lazy(() => import("@/components/faqs").then((module) => ({ default: module.FAQs })));
const Testimonials = lazy(() =>
  import("@/components/testimonials").then((module) => ({ default: module.Testimonials })),
);
const ChatSupport = lazy(() =>
  import("@/components/chat-support").then((module) => ({ default: module.ChatSupport })),
);

function ReservedSection({ children, className }: { children: ReactNode; className: string }) {
  return <Suspense fallback={<div className={className} />}>{children}</Suspense>;
}

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
        <ReservedSection className="min-h-[1914px] md:min-h-[1181px] lg:min-h-[838px]">
          <SolutionFeatures />
        </ReservedSection>
        <Quotation />
        <ReservedSection className="min-h-[2481px] md:min-h-[1743px] lg:min-h-[1713px]">
          <FAQs />
        </ReservedSection>
        <ReservedSection className="min-h-[3232px] md:min-h-[1927px] lg:min-h-[1932px]">
          <Testimonials />
        </ReservedSection>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatSupport />
      </Suspense>
    </div>
  );
}
