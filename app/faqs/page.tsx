"use client";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveCategory } from "@/lib/slices/faqsSlice";
import { FAQ_PAGE_ITEMS, FAQ_PAGE_COPY } from "@/lib/faq-page-content";
import { HelpCircle, MessageCircle, Search, ArrowLeft, Users, Clock, Shield } from "lucide-react";
import { useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { SeoHead } from "@/components/seo-head";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { faqPageSchema, webPageSchema } from "@/lib/seo";
import { hasStaticContent } from "@/lib/has-static-content";
import { useSearchParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FAQsPage() {
  const dispatch = useAppDispatch();
  const { faqs, activeCategory } = useAppSelector((state) => state.faqs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const categories = ["Orders", "Production", "Customization", "Materials", "Shipping", "Pricing"];

  // Extended FAQ data with more comprehensive answers
  const extendedFAQs = FAQ_PAGE_ITEMS;

  useEffect(() => {
    // Check if there's a specific question query parameter
    const questionQuery = searchParams.get('q');
    if (questionQuery) {
      const foundFAQ = extendedFAQs.find(faq => 
        faq.question.toLowerCase().includes(questionQuery.toLowerCase())
      );
      if (foundFAQ) {
        setSelectedQuestion(foundFAQ.id);
      }
    }
  }, [searchParams]);

  const filteredFAQs = extendedFAQs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuestionClick = (faqId: string) => {
    setSelectedQuestion(selectedQuestion === faqId ? null : faqId);
  };

  const staticFaqs = hasStaticContent("/faqs");

  useLayoutEffect(() => {
    if (!staticFaqs) return;
    const term = searchTerm.toLowerCase();
    document.querySelectorAll("#static-faq-list details[data-faq-id]").forEach((node) => {
      const category = node.getAttribute("data-category") || "";
      const text = (node.textContent || "").toLowerCase();
      const show =
        (activeCategory === "All" || category === activeCategory) &&
        (term === "" || text.includes(term));
      if (node instanceof HTMLElement) node.hidden = !show;
    });
  }, [staticFaqs, searchTerm, activeCategory]);

  useLayoutEffect(() => {
    if (!staticFaqs || !selectedQuestion) return;
    const match = document.querySelector(`#static-faq-list details[data-faq-id="${CSS.escape(selectedQuestion)}"]`);
    if (match instanceof HTMLDetailsElement) match.open = true;
  }, [staticFaqs, selectedQuestion]);

  const seoHead = (
    <SeoHead
      title={STATIC_PAGE_SEO.faqs.title}
      description={STATIC_PAGE_SEO.faqs.description}
      path={STATIC_PAGE_SEO.faqs.path}
      jsonLd={[
        webPageSchema({
          title: STATIC_PAGE_SEO.faqs.title,
          description: STATIC_PAGE_SEO.faqs.description,
          path: STATIC_PAGE_SEO.faqs.path,
        }),
        faqPageSchema(extendedFAQs.map((faq) => ({ question: faq.question, answer: faq.answer }))),
      ]}
    />
  );

  const filterControls = (
    <>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search for specific questions or topics..."
          className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)] focus:border-transparent text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          onClick={() => dispatch(setActiveCategory("All"))}
          className={
            activeCategory === "All"
              ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
              : "border-gray-300 text-gray-700 hover:border-[var(--axis-orange)] hover:text-[var(--axis-orange)] bg-transparent"
          }
        >
          All Questions
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => dispatch(setActiveCategory(category))}
            className={
              activeCategory === category
                ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                : "border-gray-300 text-gray-700 hover:border-[var(--axis-orange)] hover:text-[var(--axis-orange)] bg-transparent"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </>
  );

  const emptyState = filteredFAQs.length === 0 ? (
    <div className="text-center py-12">
      <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs Found</h3>
      <p className="text-gray-500 mb-4">
        We couldn't find any questions matching your search. Try different keywords or
        browse all categories.
      </p>
      <Button
        onClick={() => {
          setSearchTerm("");
          dispatch(setActiveCategory("All"));
        }}
        variant="outline"
        className="bg-transparent"
      >
        Clear Filters
      </Button>
    </div>
  ) : null;

  const filterSlot = staticFaqs ? document.getElementById("static-faq-filters") : null;
  const emptySlot = staticFaqs ? document.getElementById("static-faq-empty") : null;

  if (staticFaqs) {
    return (
      <>
        {seoHead}
        {filterSlot ? createPortal(filterControls, filterSlot) : null}
        {emptySlot && emptyState ? createPortal(emptyState, emptySlot) : null}
        <Footer />
        <ChatSupport />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {seoHead}
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-[var(--axis-orange)] text-white mb-4">
                <HelpCircle className="h-4 w-4 mr-2" />
                {FAQ_PAGE_COPY.badge}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-4">
                {FAQ_PAGE_COPY.h1}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {FAQ_PAGE_COPY.intro}
              </p>
            </div>

            {/* Back to Contact Button */}
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button variant="outline" className="border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Contact
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filterControls}

              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="border border-gray-200 hover:border-[var(--axis-orange)] transition-colors">
                    <CardContent className="p-0">
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => handleQuestionClick(faq.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {faq.category}
                              </Badge>
                              <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)]">
                                {faq.question}
                              </h3>
                            </div>
                            
                            {selectedQuestion === faq.id && (
                              <div className="mt-4 pl-4 border-l-4 border-[var(--axis-orange)]">
                                <div className="prose prose-gray max-w-none">
                                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="ml-4">
                            <div className={`w-6 h-6 transition-transform duration-200 ${
                              selectedQuestion === faq.id ? 'rotate-180' : ''
                            }`}>
                              <svg className="w-6 h-6 text-[var(--axis-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {emptyState}

              {/* Contact Support */}
              <div className="mt-16">
                <div className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-bounce delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -translate-x-8 -translate-y-8 animate-ping delay-500"></div>
                    <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-orange-300 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-bounce delay-300"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-orange-400/30 rounded-full animate-bounce delay-200"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute top-1/2 right-8 w-3 h-3 bg-white/40 rounded-full animate-ping delay-1000"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                      <MessageCircle className="h-10 w-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-orange-200 transition-colors duration-300">
                      {FAQ_PAGE_COPY.supportTitle}
                    </h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg group-hover:text-white transition-colors duration-300">
                      {FAQ_PAGE_COPY.supportBody}
                    </p>
                    
                    {/* Enhanced Support Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                          <Users className="h-6 w-6 text-white group-hover/stat:animate-pulse" />
                        </div>
                        <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">{FAQ_PAGE_COPY.supportStats[0].value}</div>
                        <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">{FAQ_PAGE_COPY.supportStats[0].label}</div>
                      </div>
                      <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                          <Clock className="h-6 w-6 text-white group-hover/stat:animate-spin" />
                        </div>
                        <div className="text-base font-bold leading-snug group-hover/stat:text-orange-200 transition-colors duration-300">{FAQ_PAGE_COPY.supportStats[1].value}</div>
                      </div>
                      <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                          <Shield className="h-6 w-6 text-white group-hover/stat:animate-bounce" />
                        </div>
                        <div className="text-base font-bold leading-snug group-hover/stat:text-orange-200 transition-colors duration-300">{FAQ_PAGE_COPY.supportStats[2].value}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn">
                          <span className="group-hover/btn:animate-pulse">{FAQ_PAGE_COPY.contactSupport}</span>
                        </Button>
                      </Link>
                      <Link to="/quote">
                        <Button
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn"
                        >
                          <span className="group-hover/btn:animate-pulse">{FAQ_PAGE_COPY.customQuote}</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  );
} 