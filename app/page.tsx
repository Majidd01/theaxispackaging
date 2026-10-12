import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Footer } from "@/components/footer";
import { SeoHead } from "@/components/seo-head";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { localBusinessSchema, organizationSchema, websiteSchema, webPageSchema } from "@/lib/seo";

const Hero = lazy(() => import("@/components/hero").then((module) => ({ default: module.Hero })));
const Quotation = lazy(() => import("@/components/quotation").then((module) => ({ default: module.Quotation })));
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

function HomeHeroFallback() {
  const [needed, setNeeded] = useState(false);

  useLayoutEffect(() => {
    if (!document.getElementById("static-hero")) setNeeded(true);
  }, []);

  if (!needed) return null;
  return (
    <Suspense fallback={null}>
      <Hero />
    </Suspense>
  );
}

function WhenVisible({
  children,
  className,
  rootMargin = "200px 0px",
}: {
  children: ReactNode;
  className: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || show) return;
    if (typeof IntersectionObserver !== "function") {
      setShow(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, show]);

  return (
    <div ref={ref} className={className}>
      {show ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

export default function Home() {
  const seo = STATIC_PAGE_SEO.home;
  return (
    <div className="bg-background">
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
      <HomeHeroFallback />
      <main>
        <WhenVisible className="min-h-[1914px] md:min-h-[1181px] lg:min-h-[838px]">
          <SolutionFeatures />
        </WhenVisible>
        <WhenVisible className="min-h-[2824px] md:min-h-[2058px] lg:min-h-[1322px]">
          <Quotation />
        </WhenVisible>
        <WhenVisible className="min-h-[2481px] md:min-h-[1743px] lg:min-h-[1713px]">
          <FAQs />
        </WhenVisible>
        <WhenVisible className="min-h-[3232px] md:min-h-[1927px] lg:min-h-[1932px]">
          <Testimonials />
        </WhenVisible>
      </main>
      <Footer />
      <WhenVisible className="h-px" rootMargin="0px">
        <ChatSupport />
      </WhenVisible>
    </div>
  );
}
