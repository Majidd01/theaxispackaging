"use client";

import type React from "react";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY_INFO } from "@/lib/constants";
import { ChevronDown, CheckCircle } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SeoHead } from "@/components/seo-head";
import { STATIC_PAGE_SEO } from "@/lib/seo-page-data";
import { localBusinessSchema, organizationSchema, webPageSchema } from "@/lib/seo";
import { useNavigate } from "react-router-dom";
import { EnquiryHoneypot } from "@/components/enquiry-honeypot";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { CONTACT_PAGE } from "@/lib/contact-page-content";
import { hasStaticContent } from "@/lib/has-static-content";

export default function ContactPage() {
  const navigate = useNavigate();
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [companyWebsite, setCompanyWebsite] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitEnquiry({
        form: "contact",
        name: contactFormData.name,
        email: contactFormData.email,
        phone: contactFormData.phone,
        productType: contactFormData.projectType,
        budget: contactFormData.budget,
        timeline: contactFormData.timeline,
        description: contactFormData.description,
        companyWebsite,
      });
      if (!result.ok) {
        alert(result.error);
        return;
      }
      setSubmitted(true);
    } catch {
      alert("We could not send your enquiry. Please try again or email info@theaxispackaging.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = CONTACT_PAGE.questions;


  useLayoutEffect(() => {
    if (!submitted) return;
    const node = document.getElementById("static-content");
    if (node?.getAttribute("data-path") === "/contact") {
      node.hidden = true;
      node.style.display = "none";
    }
  }, [submitted]);

  const contactFormCard = (
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--axis-dark-blue)] text-white">
                    <CardTitle className="text-lg">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <EnquiryHoneypot value={companyWebsite} onChange={setCompanyWebsite} />
                      {/* Contact Info Section */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">
                          Contact Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="contact-name" className="text-sm font-medium">
                              Your Name *
                            </Label>
                            <Input
                              id="contact-name"
                              type="text"
                              required
                              value={contactFormData.name}
                              onChange={(e) =>
                                setContactFormData({ ...contactFormData, name: e.target.value })
                              }
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="contact-email" className="text-sm font-medium">
                              Email Address *
                            </Label>
                            <Input
                              id="contact-email"
                              type="email"
                              required
                              value={contactFormData.email}
                              onChange={(e) =>
                                setContactFormData({ ...contactFormData, email: e.target.value })
                              }
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="contact-phone" className="text-sm font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="contact-phone"
                            type="tel"
                            value={contactFormData.phone}
                            onChange={(e) =>
                              setContactFormData({ ...contactFormData, phone: e.target.value })
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Project Info Section */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">
                          Project Information
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="project-type" className="text-sm font-medium">
                              Project Type
                            </Label>
                            <select
                              id="project-type"
                              value={contactFormData.projectType}
                              onChange={(e) =>
                                setContactFormData({
                                  ...contactFormData,
                                  projectType: e.target.value,
                                })
                              }
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--axis-orange)] focus:border-transparent"
                            >
                              <option value="">Select Type</option>
                              <option value="custom-boxes">Custom Boxes</option>
                              <option value="packaging-design">Packaging Design</option>
                              <option value="bulk-order">Bulk Order</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="budget" className="text-sm font-medium">
                                Budget Range
                              </Label>
                              <select
                                id="budget"
                                value={contactFormData.budget}
                                onChange={(e) =>
                                  setContactFormData({ ...contactFormData, budget: e.target.value })
                                }
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--axis-orange)] focus:border-transparent"
                              >
                                <option value="">Select Budget</option>
                                <option value="under-1000">Under $1,000</option>
                                <option value="1000-5000">$1,000 - $5,000</option>
                                <option value="5000-10000">$5,000 - $10,000</option>
                                <option value="over-10000">Over $10,000</option>
                              </select>
                            </div>

                            <div>
                              <Label htmlFor="timeline" className="text-sm font-medium">
                                Timeline
                              </Label>
                              <select
                                id="timeline"
                                value={contactFormData.timeline}
                                onChange={(e) =>
                                  setContactFormData({ ...contactFormData, timeline: e.target.value })
                                }
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--axis-orange)] focus:border-transparent"
                              >
                                <option value="">Select Timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="1-2-weeks">1-2 weeks</option>
                                <option value="1-month">1 month</option>
                                <option value="flexible">Flexible</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="description" className="text-sm font-medium">
                              Project Description
                            </Label>
                            <Textarea
                              id="description"
                              rows={4}
                              value={contactFormData.description}
                              onChange={(e) =>
                                setContactFormData({
                                  ...contactFormData,
                                  description: e.target.value,
                                })
                              }
                              className="mt-1"
                              placeholder="Tell us about your project requirements, specifications, and any special needs..."
                            />
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white disabled:opacity-50 py-3 text-lg font-semibold"
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
  );

  const formSlot = !submitted && hasStaticContent("/contact") ? document.getElementById("static-contact-form") : null;
  if (formSlot) {
    return (
      <>
        <SeoHead
          title={STATIC_PAGE_SEO.contact.title}
          description={STATIC_PAGE_SEO.contact.description}
          path={STATIC_PAGE_SEO.contact.path}
          jsonLd={[
            organizationSchema(),
            localBusinessSchema(),
            webPageSchema({
              title: STATIC_PAGE_SEO.contact.title,
              description: STATIC_PAGE_SEO.contact.description,
              path: STATIC_PAGE_SEO.contact.path,
              type: "ContactPage",
            }),
          ]}
        />
        {createPortal(contactFormCard, formSlot)}
        <Footer />
        <ChatSupport />
      </>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Your Request is Submitted!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for contacting us! Our team will review your project requirements and get back to
                you within 24 hours with a detailed response.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[var(--axis-orange)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span>Our team reviews your project requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[var(--axis-orange)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span>We prepare a detailed proposal and timeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[var(--axis-orange)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span>You receive our response within 24 hours</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <ChatSupport />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={STATIC_PAGE_SEO.contact.title}
        description={STATIC_PAGE_SEO.contact.description}
        path={STATIC_PAGE_SEO.contact.path}
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          webPageSchema({
            title: STATIC_PAGE_SEO.contact.title,
            description: STATIC_PAGE_SEO.contact.description,
            path: STATIC_PAGE_SEO.contact.path,
            type: "ContactPage",
          }),
        ]}
      />
      <main>
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Hero & FAQ */}
              <div>
                {/* Hero Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  </div>

                  <h1 className="text-4xl font-bold text-[var(--axis-dark-blue)] mb-6">
                    {CONTACT_PAGE.h1Lead}
                    <br />
                    {CONTACT_PAGE.h1Middle}
                    <br />
                    <span className="text-green-600">{CONTACT_PAGE.h1Brand}</span>
                  </h1>

                  <p className="text-gray-600 leading-relaxed mb-8">{CONTACT_PAGE.intro}</p>
                </div>

                {/* FAQ Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">
                    {CONTACT_PAGE.faqHeading}
                  </h2>

                  <div className="space-y-3">
                    {faqItems.map((question, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          const url = `/faqs?q=${encodeURIComponent(question)}`;
                          console.log('Navigating to:', url);
                          navigate(url);
                        }}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors hover:border-[var(--axis-orange)] hover:shadow-md"
                      >
                        <span className="text-gray-700">{question}</span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button 
                      onClick={() => {
                        console.log('Navigating to /faqs');
                        navigate('/faqs');
                      }}
                      variant="outline" 
                      className="border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white"
                    >
                      {CONTACT_PAGE.allFaqsLabel}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div>
{contactFormCard}
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
