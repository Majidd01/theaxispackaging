import { Footer } from "@/components/footer";
import { SeoHead } from "@/components/seo-head";
import { hasStaticContent } from "@/lib/has-static-content";
import { rememberDeliveryCountry } from "@/lib/delivery-destination";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { USA_PAGE, USA_PAGE_SEO, usaLandingJsonLd } from "@/lib/usa-page-content";
import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={index}>{part}</span>;
        const [, label, href] = match;
        if (href.startsWith("/")) {
          return (
            <Link key={index} to={href} className="text-[var(--axis-orange)] font-medium underline">
              {label}
            </Link>
          );
        }
        return (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--axis-orange)] font-medium underline">
            {label}
          </a>
        );
      })}
    </>
  );
}

function CtaLink({ href, label, variant }: { href: string; label: string; variant: "solid" | "outline" | "outline-light" }) {
  const className =
    variant === "solid"
      ? "inline-flex items-center justify-center rounded-md bg-[var(--axis-orange)] px-6 py-3 text-sm font-semibold text-white"
      : variant === "outline-light"
        ? "inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white"
        : "inline-flex items-center justify-center rounded-md border border-[var(--axis-dark-blue)] px-6 py-3 text-sm font-semibold text-[var(--axis-dark-blue)]";
  return (
    <Link to={href} className={className}>
      {label}
    </Link>
  );
}

function Section({ id, title, children, tone = "white" }: { id: string; title: string; children: ReactNode; tone?: "white" | "gray" }) {
  return (
    <section id={id} className={tone === "gray" ? "py-12 bg-gray-50 border-t" : "py-12 bg-white border-t"}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function CustomPackagingUsaPage() {
  const seo = STATIC_PAGE_SEO.usa;

  useEffect(() => {
    rememberDeliveryCountry("US");
  }, []);

  const seoHead = (
    <SeoHead
      title={seo.title}
      description={seo.description}
      path={seo.path}
      image={USA_PAGE.image.src}
      keywords={USA_PAGE_SEO.keywords}
      htmlLang="en-US"
      jsonLd={usaLandingJsonLd()}
    />
  );

  if (hasStaticContent(seo.path)) {
    return (
      <>
        {seoHead}
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {seoHead}
      <main>
        <section className="py-12 lg:py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <p className="text-sm text-blue-100 mb-6">
              <Link to="/" className="hover:underline">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Custom Packaging USA</span>
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-200 mb-3">{USA_PAGE.eyebrow}</p>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{USA_PAGE_SEO.h1}</h1>
                <p className="text-lg text-blue-100 leading-relaxed mb-4">{USA_PAGE.lede}</p>
                <p className="text-blue-100 leading-relaxed mb-6">{USA_PAGE.support}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CtaLink href={USA_PAGE.primaryCta.href} label={USA_PAGE.primaryCta.label} variant="solid" />
                  <CtaLink href={USA_PAGE.secondaryCta.href} label={USA_PAGE.secondaryCta.label} variant="outline-light" />
                </div>
              </div>
              <figure>
                <img
                  src={USA_PAGE.image.src}
                  alt={USA_PAGE.image.alt}
                  width={USA_PAGE.image.width}
                  height={USA_PAGE.image.height}
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="text-sm text-blue-100 mt-3">{USA_PAGE.image.caption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {USA_PAGE.sections.map((section, index) => (
          <Section key={section.id} id={section.id} title={section.title} tone={index % 2 === 0 ? "white" : "gray"}>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-gray-700 leading-relaxed mb-4">
                <RichText text={paragraph} />
              </p>
            ))}
            {"groups" in section && section.groups ? (
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {section.groups.map((group) => (
                  <article key={group.title} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-3">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href} className="text-[var(--axis-orange)] font-medium hover:underline">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : null}
            {"steps" in section && section.steps ? (
              <ol className="space-y-4 mt-2">
                {section.steps.map((step, stepIndex) => (
                  <li key={step.title} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">
                      {stepIndex + 1}. {step.title}
                    </h3>
                    <p className="text-gray-700">{step.body}</p>
                  </li>
                ))}
              </ol>
            ) : null}
            {"checklist" in section && section.checklist ? (
              <ul className="list-disc pl-5 space-y-2">
                {section.checklist.map((item) => (
                  <li key={item} className="text-gray-700">{item}</li>
                ))}
              </ul>
            ) : null}
          </Section>
        ))}

        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">{USA_PAGE.trustTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{USA_PAGE.trustIntro}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {USA_PAGE.trust.map((item) => (
                <article key={item.title} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.body}</p>
                </article>
              ))}
            </div>
            <p className="text-gray-700 mt-6">
              <a href={USA_PAGE.contact.phoneHref} className="text-[var(--axis-orange)] font-medium hover:underline">{USA_PAGE.contact.phone}</a>
              <span aria-hidden="true"> · </span>
              <a href={USA_PAGE.contact.emailHref} className="text-[var(--axis-orange)] font-medium hover:underline">{USA_PAGE.contact.email}</a>
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">{USA_PAGE.faqsTitle}</h2>
            <div className="space-y-4">
              {USA_PAGE.faqs.map((faq) => (
                <article key={faq.question} className="border border-gray-200 rounded-lg p-4 bg-white">
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">{USA_PAGE.closing.title}</h2>
            <p className="text-xl text-blue-100 mb-8">{USA_PAGE.closing.body}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaLink href={USA_PAGE.closing.primary.href} label={USA_PAGE.closing.primary.label} variant="solid" />
              <CtaLink href={USA_PAGE.closing.secondary.href} label={USA_PAGE.closing.secondary.label} variant="outline-light" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
