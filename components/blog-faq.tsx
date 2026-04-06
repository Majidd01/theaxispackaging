import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlogFAQ } from "@/lib/blog-types";

interface BlogFAQSectionProps {
  faqs: BlogFAQ[];
}

export const BlogFAQSection: React.FC<BlogFAQSectionProps> = ({ faqs }) => {
  if (faqs.length === 0) return null;

  return (
    <section className="my-12 py-8 border-t border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
              {index + 1}. {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

// FAQ Schema component for SEO
export const BlogFAQSchema: React.FC<{ faqs: BlogFAQ[] }> = ({ faqs }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
