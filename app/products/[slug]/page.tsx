"use client";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { ArrowRight, CheckCircle, MessageCircle, Package, Shield, Star, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const placeholderImg = "/assets/placeholder.jpg";

type InternalLink = { phrase: string; href: string };

function renderLinkedText(text: string, links: InternalLink[] = []) {
  if (!links.length) return text;
  let parts: (string | JSX.Element)[] = [text];
  for (const link of [...links].sort((a, b) => b.phrase.length - a.phrase.length)) {
    const newParts: (string | JSX.Element)[] = [];
    for (const part of parts) {
      if (typeof part !== "string") {
        newParts.push(part);
        continue;
      }
      const segments = part.split(link.phrase);
      segments.forEach((seg, i) => {
        if (seg) newParts.push(seg);
        if (i < segments.length - 1) {
          newParts.push(
            <Link key={`${link.phrase}-${i}-${seg.slice(0, 8)}`} to={link.href} className="text-[var(--axis-orange)] hover:underline font-medium">
              {link.phrase}
            </Link>
          );
        }
      });
    }
    parts = newParts;
  }
  return <>{parts}</>;
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    length: "",
    width: "",
    depth: "",
    material: "Need Consultation",
    print: "Need Consultation",
    finishing: "Need Consultation",
    additionalOption: "Choose Option",
    addUp: "Choose Option",
    quantity: "500",
  });

  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name.trim()) return "Name is required";
    if (!emailRegex.test(form.email)) return "Valid email is required";
    if (!form.phone.trim()) return "Phone is required";
    if (!form.length || !form.width || !form.depth) return "All dimensions are required";
    if (Number(form.length) <= 0 || Number(form.width) <= 0 || Number(form.depth) <= 0)
      return "Dimensions must be positive";
    return "";
  };

  const handleAddToQuote = async () => {
    const error = validate();
    if (error) {
      toast({ title: "Validation error", description: error });
      return;
    }
    setSubmitting(true);
    try {
      emailjs.init("shQGEnnog2UpWxhdL");
      await emailjs.send(
        "service_vhwzbeo",
        "template_9epu9ft",
        {
          to_email: "info@theaxispackaging.com",
          // to_email: "info@theaxispackaging.com",
          subject: `Add to Quote - ${product?.name ?? "Product"}`,
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          product_type: product?.name ?? slug,
          quantity: form.quantity,
          dimensions: `${form.length}" x ${form.width}" x ${form.depth}"`,
          material: form.material,
          printing: form.print,
          finishing: form.finishing,
          additional_option: form.additionalOption,
          add_up: form.addUp,
          file_name: selectedFile?.name || "No file attached",
        }
      );

      // Persist to localStorage as a lightweight quote cart entry
      const existing = JSON.parse(localStorage.getItem("quoteItems") || "[]");
      const item = {
        slug,
        productName: product?.name ?? slug,
        quantity: form.quantity,
        dimensions: { length: form.length, width: form.width, depth: form.depth },
        material: form.material,
        printing: form.print,
        finishing: form.finishing,
        additionalOption: form.additionalOption,
        addUp: form.addUp,
        contact: { name: form.name, email: form.email, phone: form.phone },
        fileName: selectedFile?.name || null,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("quoteItems", JSON.stringify([item, ...existing]));

      toast({ title: "Added to quote", description: "We received your request.", className: "border-green-600 text-green-700" });
    } catch (err) {
      toast({ title: "Failed to submit", description: "Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
        <ChatSupport />
      </div>
    );
  }

  const productFaqs = (product as any).faqs as { question: string; answer: string }[] | undefined;
  const breadcrumbLabel = (product as any).breadcrumbName || product.name;
  const productsWePackageTitle = (product as any).productsWePackageTitle || "Products We Package";
  const contentSections = (product as any).contentSections as
    | {
        title: string;
        intro?: string;
        subsections?: { title: string; content: string }[];
        lists?: { label: string; items: string[] }[];
        bullets?: string[];
        comparisonTable?: { columns: string[]; rows: { label: string; values: string[] }[] };
      }[]
    | undefined;
  const specificationsTable = (product as any).specificationsTable as { feature: string; detail: string }[] | undefined;
  const specificationsTitle = (product as any).specificationsTitle || "Specifications";
  const whyChooseParagraphs = (product as any).whyChooseParagraphs as string[] | undefined;
  const benefits = (product as any).benefits as string[] | undefined;
  const benefitsTitle = (product as any).benefitsTitle || "Benefits";
  const productTypes = (product as any).productTypes as { title: string; detail: string }[] | undefined;
  const productTypesTitle = (product as any).productTypesTitle || "Product Types";
  const internalLinks = ((product as any).internalLinks || []) as InternalLink[];
  const hideProductFeatures = (product as any).hideProductFeatures ?? !!contentSections;
  const quoteIntro = (product as any).quoteIntro as string | undefined;
  const quoteTitle = (product as any).quoteTitle || "Ready to Get Started?";
  const urgencyBanner = (product as any).urgencyBanner as { title: string; text: string } | undefined;
  const whyChooseTitle = (product as any).whyChooseTitle
    || (whyChooseParagraphs ? "Why Choose Axis Packaging" : (product as any).whyChoose ? "Why Axis Packaging" : "Why Choose This Product?");

  const faqSchema = productFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: productFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://theaxispackaging.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://theaxispackaging.com/products" },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: `https://theaxispackaging.com/products/${product.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{product.metaTitle || `${product.name} | Axis Packaging`}</title>
        <meta name="description" content={product.metaDescription || product.description} />
        <meta property="og:title" content={product.metaTitle || product.name} />
        <meta property="og:description" content={product.metaDescription || product.description} />
        <meta property="og:image" content={product.image || placeholderImg} />
        <link rel="canonical" href={`https://theaxispackaging.com/products/${product.slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <Header />

      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[var(--axis-orange)]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-[var(--axis-orange)]">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[var(--axis-dark-blue)] font-medium">{breadcrumbLabel}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Product Images */}
            <div>
              {/* Main Product Image */}
              <div className="mb-4">
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholderImg;
                  }}
                  alt={product.alt || product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2">
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.alt || product.name}
                  className="w-16 h-16 object-cover rounded border-2 border-[var(--axis-orange)]"
                />
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.alt || product.name}
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                />
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.alt || product.name}
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                />
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.alt || product.name}
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                />
              </div>
            </div>

            {/* Right Side - Product Details & Quote Form */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">{product.icon}</span>
                <Badge className="bg-[var(--axis-orange)] text-white">Premium Quality</Badge>
              </div>

              <h1 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                {product.h1 || product.name}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Quote Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Your phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Length (Inch) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Length"
                      value={form.length}
                      onChange={(e) => setForm({ ...form, length: e.target.value })}
                      min={0.1}
                      step={0.1}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Width (Inch) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Width"
                      value={form.width}
                      onChange={(e) => setForm({ ...form, width: e.target.value })}
                      min={0.1}
                      step={0.1}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Depth (Inch) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Depth"
                      value={form.depth}
                      onChange={(e) => setForm({ ...form, depth: e.target.value })}
                      min={0.1}
                      step={0.1}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Material *
                    </label>
                    <select value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                      <option>Need Consultation</option>
                      <option>Kraft Paper</option>
                      <option>Cardboard</option>
                      <option>Corrugated</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Print *</label>
                    <select value={form.print} onChange={(e) => setForm({ ...form, print: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                      <option>Need Consultation</option>
                      <option>No Print</option>
                      <option>1 Color</option>
                      <option>2 Color</option>
                      <option>Full Color</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Finishing
                    </label>
                    <select value={form.finishing} onChange={(e) => setForm({ ...form, finishing: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                      <option>Need Consultation</option>
                      <option>Matte</option>
                      <option>Gloss</option>
                      <option>UV Coating</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Options
                  </label>
                  <select value={form.additionalOption} onChange={(e) => setForm({ ...form, additionalOption: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                    <option>Choose Option</option>
                    <option>Window Cutout</option>
                    <option>Handle</option>
                    <option>Embossing</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Add-up</label>
                  <select value={form.addUp} onChange={(e) => setForm({ ...form, addUp: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                    <option>Choose Option</option>
                    <option>Rush Order</option>
                    <option>Sample</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Design (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                    <input
                      id="design-upload"
                      type="file"
                      accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                        setSelectedFile(file);
                      }}
                    />
                    <label htmlFor="design-upload">
                      <Button asChild variant="outline" className="mb-2 cursor-pointer">
                        <span>Choose file</span>
                      </Button>
                    </label>
                    <p className="text-sm text-gray-500">
                      {selectedFile ? selectedFile.name : "No file chosen"}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[var(--axis-orange)] mb-4">
                    PRICE ON REQUEST
                  </p>
                  <div className="flex items-center gap-4">
                    <select value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className="px-3 py-2 border border-gray-300 rounded-md">
                      <option>500</option>
                      <option>1000</option>
                      <option>2000</option>
                      <option>5000</option>
                    </select>
                    <Button onClick={handleAddToQuote} disabled={submitting} className="bg-green-600 hover:bg-green-700 text-white px-8">
                      {submitting ? "ADDING..." : "ADD TO QUOTE"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      {!hideProductFeatures && (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Product Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why {product.name} is the perfect choice for your packaging needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">Highest quality materials and expert craftsmanship</p>
            </Card>
            <Card className="text-center p-6">
              <Star className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                Custom Design
              </h3>
              <p className="text-gray-600">Tailored to your brand and specific requirements</p>
            </Card>
            <Card className="text-center p-6">
              <Truck className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">Quick turnaround times with worldwide shipping</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Certified</h3>
              <p className="text-gray-600">ISO certified and compliant with industry standards</p>
            </Card>
          </div>
        </div>
      </section>
      )}

      {/* Rich content sections with H2/H3 structure */}
      {contentSections?.map((section, idx) => (
        <section key={section.title} className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">{section.title}</h2>
            {section.intro && (
              <p className="text-gray-600 mb-8 leading-relaxed">{renderLinkedText(section.intro, internalLinks)}</p>
            )}
            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mb-8 last:mb-0">
                <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">{sub.title}</h3>
                <p className="text-gray-600 leading-relaxed">{renderLinkedText(sub.content, internalLinks)}</p>
              </div>
            ))}
            {section.lists?.map((list) => (
              <div key={list.label} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-3">{list.label}</h3>
                <ul className="space-y-2">
                  {list.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {section.bullets && (
              <ul className="space-y-3">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[var(--axis-orange)] mt-0.5 shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{renderLinkedText(item, internalLinks)}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.comparisonTable && (
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[var(--axis-dark-blue)] text-white">
                      {section.comparisonTable.columns.map((col) => (
                        <th key={col} className="px-6 py-4 font-semibold">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.comparisonTable.rows.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 font-medium text-[var(--axis-dark-blue)]">{row.label}</td>
                        {row.values.map((val) => (
                          <td key={val} className="px-6 py-4 text-gray-600">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Benefits list */}
      {benefits && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8">{benefitsTitle}</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Product types (e.g. paper bag styles) */}
      {productTypes && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8 text-center">{productTypesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {productTypes.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Art Supply Products We Package — shown only when product defines productsWePackage */}
      {(product as any).productsWePackage && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8 text-center">
              {productsWePackageTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {((product as any).productsWePackage as { title: string; detail: string }[]).map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[var(--axis-orange)] transition-colors">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[var(--axis-orange)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--axis-dark-blue)]">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials Table — shown only when product defines materials */}
      {(product as any).materials && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8 text-center">
              Materials
            </h2>
            <div className="overflow-x-auto max-w-3xl mx-auto">
              <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[var(--axis-dark-blue)] text-white">
                    <th className="px-6 py-4 font-semibold">Material</th>
                    <th className="px-6 py-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {((product as any).materials as { name: string; bestFor: string }[]).map((mat, i) => (
                    <tr key={mat.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-[var(--axis-dark-blue)]">{mat.name}</td>
                      <td className="px-6 py-4 text-gray-600">{mat.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Printing & Finishing — shown only when product defines printingFinishing */}
      {(product as any).printingFinishing && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-10 text-center">
              Printing & Finishing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">Print Options</h3>
                <ul className="space-y-2">
                  {((product as any).printingFinishing.print as string[]).map((p: string) => (
                    <li key={p} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">Finishes</h3>
                <ul className="space-y-2">
                  {((product as any).printingFinishing.finish as string[]).map((f: string) => (
                    <li key={f} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">Add-ons</h3>
                <ul className="space-y-2">
                  {((product as any).printingFinishing.addons as string[]).map((a: string) => (
                    <li key={a} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specifications table (rich pages) */}
      {specificationsTable && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8 text-center">{specificationsTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[var(--axis-dark-blue)] text-white">
                    <th className="px-6 py-4 font-semibold">Feature</th>
                    <th className="px-6 py-4 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {specificationsTable.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-[var(--axis-dark-blue)]">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose (standalone for rich pages) */}
      {(whyChooseParagraphs || (product as any).whyChoose) && contentSections && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-8">{whyChooseTitle}</h2>
            {whyChooseParagraphs ? (
              <div className="space-y-4">
                {whyChooseParagraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-gray-700 leading-relaxed">{renderLinkedText(p, internalLinks)}</p>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {((product as any).whyChoose as string[]).map((point: string) => (
                  <li key={point} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Specifications (default two-column layout) */}
      {!specificationsTable && (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                Product Specifications
              </h2>
              <div className="space-y-4">
                {((product as any).specificationsBullets as string[] | undefined)?.map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                )) || (
                  <>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Customizable sizes and dimensions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Premium materials and finishes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Full-color printing capabilities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Eco-friendly options available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Minimum order quantity: 100 pieces</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Production time: 10-15 business days</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                {whyChooseTitle}
              </h2>
              {whyChooseParagraphs ? (
                <div className="space-y-4">
                  {whyChooseParagraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="text-gray-700 leading-relaxed">{renderLinkedText(p, internalLinks)}</p>
                  ))}
                </div>
              ) : (product as any).whyChoose ? (
                <ul className="space-y-3">
                  {((product as any).whyChoose as string[]).map((point: string) => (
                    <li key={point} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Our {product.name} are designed with your business in mind. We understand the
                    importance of quality packaging in protecting your products and enhancing your
                    brand image.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With years of experience in the packaging industry, we've developed solutions that
                    combine functionality, aesthetics, and sustainability to meet the highest
                    standards.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Every product is crafted with attention to detail, ensuring that your packaging
                    not only looks great but also performs exceptionally well in real-world
                    conditions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our packaging services
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {productFaqs ? (
              productFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i + 1}`} className="bg-white px-6 rounded-xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-[var(--axis-dark-blue)] hover:no-underline px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-6 mt-2 border-t pt-4">
                    {renderLinkedText(faq.answer, internalLinks)}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <>
                <AccordionItem value="item-1" className="bg-white px-6 rounded-xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-[var(--axis-dark-blue)] hover:no-underline px-6">
                    How long does it take to get a custom quote?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-6 mt-2 border-t pt-4">
                    Our team typically reviews requirements and provides a detailed quote within 24 hours. For rush requests, we aim to respond even faster via our instant quote portal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white px-6 rounded-xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-[var(--axis-dark-blue)] hover:no-underline px-6">
                    What is the minimum order quantity (MOQ)?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-6 mt-2 border-t pt-4">
                    Our standard MOQ starts as low as 100 units depending on the product category. This allows businesses of all sizes to access premium, custom-branded packaging.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white px-6 rounded-xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-[var(--axis-dark-blue)] hover:no-underline px-6">
                    Do you offer international shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-6 mt-2 border-t pt-4">
                    Yes, Axis Packaging ships worldwide. We handle all logistics and customs coordination to ensure your branded boxes arrive safely at your doorstep, regardless of your location.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-white px-6 rounded-xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-[var(--axis-dark-blue)] hover:no-underline px-6">
                    Can I request a physical sample before placing a bulk order?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-6 mt-2 border-t pt-4">
                    Absolutely! We offer sample production (prototyping) so you can verify the dimensions, material quality, and printing accuracy before committing to a full production run.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="bg-white px-6 rounded-xl border-none shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-[var(--axis-dark-blue)] hover:no-underline px-6">
                    What design file formats do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed px-6 pb-6 mt-2 border-t pt-4">
                    We prefer high-resolution vector files such as Adobe Illustrator (AI), PDF, or EPS for the best print quality. However, we also accept high-quality PSD, JPG, and PNG files for initial review.
                  </AccordionContent>
                </AccordionItem>
              </>
            )}
          </Accordion>
        </div>
      </section>

      {/* Urgency banner */}
      {urgencyBanner && (
        <section className="py-12 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{urgencyBanner.title}</h2>
            <p className="text-lg text-white/90 mb-6">{urgencyBanner.text}</p>
            <Link to="/quote">
              <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
                Place Your Order Now
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{quoteTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {quoteIntro || `Let our packaging experts help you create the perfect ${product.name} for your business. Get a custom quote today and see the difference quality packaging can make.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
                Request a Free Quote
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat with Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -right-16 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute -bottom-16 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full text-sm font-medium text-orange-700 mb-6 shadow-lg backdrop-blur-sm">
              <Package className="w-4 h-4 mr-2" />
              Discover More
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 bg-clip-text - mb-4">
              Related Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our other premium packaging solutions that might interest you
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <div
                  key={relatedProduct.slug}
                  className="group transform hover:-translate-y-2 transition-all duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Product Image Container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedProduct.image || placeholderImg}
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                          alt={relatedProduct.name}
                          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl">{relatedProduct.icon}</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-[var(--axis-dark-blue)] mb-2 group-hover:text-orange-600 transition-colors duration-300">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {relatedProduct.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>Premium Quality</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>Custom Design</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>Fast Delivery</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link to={`/products/${relatedProduct.slug}`}>
                          <Button
                            className="w-full bg-gradient-to-r from-[var(--axis-orange)] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
                          >
                            <span className="flex items-center justify-center">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <Package className="w-5 h-5 mr-2" />
              <span className="font-semibold">View All Products</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
}
