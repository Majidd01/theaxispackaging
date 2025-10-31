"use client";

import type React from "react";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY_INFO } from "@/lib/constants";
import { ChevronDown, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

// Initialize EmailJS with your public key
// emailjs.init("shQGEnnog2UpWxhdL");
emailjs.init("1c6673PLz9Wiytv_t");

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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        // to_email: "info@theaxispackaging.com",
        to_email: "info@theaxispackaging.com",
        // to_email: "majid121.skylinxtech@gmail.com",
        from_name: contactFormData.name,
        from_email: contactFormData.email,
        from_phone: contactFormData.phone || "Not provided",
        project_type: contactFormData.projectType || "Not specified",
        budget: contactFormData.budget || "Not specified",
        timeline: contactFormData.timeline || "Not specified",
        description: contactFormData.description || "No description provided",
        subject: `New Contact Message - ${contactFormData.name}`,
        date_received: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        time_received: new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true }),
      };

      // Debug: Log the data being sent
      console.log("Contact Form Data:", contactFormData);
      console.log("Template Params:", templateParams);
      console.log("Individual fields:", {
        projectType: contactFormData.projectType,
        budget: contactFormData.budget,
        timeline: contactFormData.timeline,
        description: contactFormData.description
      });

      await emailjs.send(
        // "service_vhwzbeo", // Your service ID
        // "template_9epu9ft", // Your template ID
        "service_82mnk3u", // Your service ID
        "template_ykfl7oj", // Your template ID
        templateParams
      );

      setSubmitted(true);
      console.log("Contact message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    "What are your minimum order quantities?",
    "What are your turnaround times?",
    "What are your payment terms?",
    "Do you offer free samples?",
    "Do you ship internationally?",
    "Do you offer design services?",
    "How do I place an order?",
    "Do you have volume discounts?",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
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
      <Header />

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
                    Your Packaging Success
                    <br />
                    Starts with
                    <br />
                    <span className="text-green-600">theasxis Packaging</span>
                  </h1>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    At theasxisPackaging, we thrive on elevating solutions and cost- effective
                    custom packaging that enhances your brand and drives customer satisfaction. From
                    concept to delivery, we're your trusted partner for all your packaging needs.
                  </p>
                </div>

                {/* FAQ Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">
                    Frequently Asked Questions
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
                      View All FAQs
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div>
                {/* Contact Info & Project Info Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-[var(--axis-dark-blue)] text-white">
                    <CardTitle className="text-lg">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleContactSubmit} className="space-y-6">
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
