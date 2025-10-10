"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveCategory } from "@/lib/slices/faqsSlice";
import { HelpCircle, MessageCircle, Search, ChevronDown, Sparkles, Users, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function FAQs() {
  const dispatch = useAppDispatch();
  const { faqs, activeCategory } = useAppSelector((state) => state.faqs);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Orders", "Production", "Customization", "Materials"];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full border border-orange-200 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6 leading-tight">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our custom packaging solutions and services. Can't find what you're looking for? Our experts are here to help.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Search Bar */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-100">
              <div className="flex items-center">
                <Search className="absolute left-4 text-gray-400 h-5 w-5 z-10" />
                <input
                  type="text"
                  placeholder="Search FAQs... (e.g., 'shipping', 'custom design', 'pricing')"
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-0 text-lg placeholder-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              onClick={() => dispatch(setActiveCategory("All"))}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
                  : "border-2 border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-600 bg-white/80 backdrop-blur-sm hover:shadow-md"
              }`}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              All Questions
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => dispatch(setActiveCategory(category))}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
                    : "border-2 border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-600 bg-white/80 backdrop-blur-sm hover:shadow-md"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Enhanced FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={faq.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={faq.id} className="border-0">
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 transition-all duration-300 group">
                        <div className="flex items-start space-x-4 w-full">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <HelpCircle className="w-6 h-6 text-orange-600" />
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full">
                                {faq.category}
                              </Badge>
                              <span className="text-xs text-gray-500">#{index + 1}</span>
                            </div>
                            <h3 className="font-semibold text-[var(--axis-dark-blue)] text-lg group-hover:text-orange-600 transition-colors duration-300">
                              {faq.question}
                            </h3>
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-300 flex-shrink-0" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="pl-16">
                          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-orange-500">
                            <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced No Results */}
          {filteredFAQs.length === 0 && (
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">No FAQs Found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  We couldn't find any questions matching your search. Try different keywords or browse all categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    dispatch(setActiveCategory("All"));
                  }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Enhanced Contact Support */}
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
                  Still Have Questions?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg group-hover:text-white transition-colors duration-300">
                  Our packaging experts are here to help. Get personalized answers to your specific questions and find the perfect solution for your needs.
                </p>
                
                {/* Enhanced Support Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                      <Users className="h-6 w-6 text-white group-hover/stat:animate-pulse" />
                    </div>
                    <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">24/7</div>
                    <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">Expert Support</div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                      <Clock className="h-6 w-6 text-white group-hover/stat:animate-spin" />
                    </div>
                    <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">&lt; 2hr</div>
                    <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">Response Time</div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                      <Shield className="h-6 w-6 text-white group-hover/stat:animate-bounce" />
                    </div>
                    <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">100%</div>
                    <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">Satisfaction</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn">
                      <span className="group-hover/btn:animate-pulse">Contact Support</span>
                    </Button>
                  </Link>
                  <Link to="/quote">
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn"
                    >
                      <span className="group-hover/btn:animate-pulse">Get Custom Quote</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}