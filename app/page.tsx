import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";
import { SeoHead } from "@/components/seo-head";
import { HOME_INTRO } from "@/lib/home-intro";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { localBusinessSchema, organizationSchema, websiteSchema, webPageSchema } from "@/lib/seo";

const Hero = lazy(() => import("@/components/hero").then((module) => ({ default: module.Hero })));
const Quotation = lazy(() => import("@/components/quotation").then((module) => ({ default: module.Quotation })));
const SolutionFeatures = lazy(() =>
  import("@/components/solution-features").then((module) => ({ default: module.SolutionFeatures })),
);
const FAQs = lazy(() => import("@/components/faqs").then((module) => ({ default: module.FAQs })));
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

  useLayoutEffect(() => {
    const intro = document.getElementById("static-home-intro");
    if (!intro) return;
    intro.hidden = true;
    intro.style.display = "none";
    intro.setAttribute("inert", "");
    intro.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <div className="bg-background">
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image="/assets/banner.jpg"
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
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{HOME_INTRO.h2}</h2>
            {HOME_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <p className="text-gray-700">
              {HOME_INTRO.links.map((link, index) => (
                <span key={link.href}>
                  {index > 0 ? " · " : null}
                  <Link to={link.href} className="text-[var(--axis-orange)] hover:underline font-medium">
                    {link.label}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </section>
        <div className="min-h-[1914px] md:min-h-[1181px] lg:min-h-[838px]">
          <Suspense fallback={null}>
            <SolutionFeatures />
          </Suspense>
        </div>
        <WhenVisible className="min-h-[2824px] md:min-h-[2058px] lg:min-h-[1322px]">
          <Quotation />
        </WhenVisible>
        <WhenVisible className="min-h-[2481px] md:min-h-[1743px] lg:min-h-[1713px]">
          <FAQs />
        </WhenVisible>
      </main>
      <Footer />
      <WhenVisible className="h-px" rootMargin="0px">
        <ChatSupport />
      </WhenVisible>
    </div>
  );
}
