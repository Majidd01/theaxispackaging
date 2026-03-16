"use client";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INDUSTRIES, PRODUCT_CATEGORIES } from "@/lib/constants";
import { ArrowRight, Award, Building2, CheckCircle, Factory, Package, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Industry Not Found
          </h1>
          <p className="text-gray-600 mb-8">The industry you're looking for doesn't exist.</p>
          <Link to="/industries">
            <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Back to Industries
            </Button>
          </Link>
        </div>
        <Footer />
        <ChatSupport />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{industry.metaTitle || `${industry.name} Packaging Solutions - Axis Packaging`}</title>
        <meta name="description" content={industry.metaDescription || `Discover our specialized packaging solutions for the ${industry.name} industry.`} />
        <link rel="canonical" href={`https://theaxispackaging.com/industries/${industry.slug}`} />
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
            <Link to="/industries" className="text-gray-500 hover:text-[var(--axis-orange)]">
              Industries
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[var(--axis-dark-blue)] font-medium">{industry.name}</span>
          </div>
        </div>
      </section>

      {/* Industry Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">{industry.icon}</span>
                <Badge className="bg-[var(--axis-orange)] text-white">Industry Expert</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6">
                {industry.name} Packaging Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{industry.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/quote?industry=${encodeURIComponent(industry.slug)}`}>
                  <Button
                    size="lg"
                    className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                  >
                    Get Industry Quote
                  </Button>
                </Link>
                <Link to={`/quote?industry=${encodeURIComponent(industry.slug)}&downloadGuide=1`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[var(--axis-dark-blue)] text-[var(--axis-dark-blue)]"
                  >
                    Download Industry Guide
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{industry.name} Industry Expertise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We understand the unique challenges and requirements of the {industry.name} industry
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">{industry.name} Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              {industry.name} Packaging Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our specialized packaging solutions designed specifically for the{" "}
              {industry.name} industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.slice(0, 6).map((product) => (
              <Card
                key={product.slug}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{product.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 md:h-56 object-cover rounded-lg mb-4"
                  />
                  <Link to={`/products/${product.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                Why Choose Axis Packaging for {industry.name}?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)]">
                      Industry Expertise
                    </h3>
                    <p className="text-gray-600">
                      Deep understanding of {industry.name} industry requirements and regulations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)]">Custom Solutions</h3>
                    <p className="text-gray-600">
                      Tailored packaging solutions designed specifically for {industry.name}{" "}
                      products
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)]">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      Rigorous quality control processes ensuring compliance with industry standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)]">Fast Turnaround</h3>
                    <p className="text-gray-600">
                      Quick production and delivery times to meet your business deadlines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                {industry.name} Industry Challenges We Solve
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The {industry.name} industry faces unique packaging challenges that require
                  specialized solutions. We understand these challenges and have developed packaging
                  that addresses them effectively.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From regulatory compliance to brand protection, our {industry.name} packaging
                  solutions are designed to meet the highest standards while enhancing your product
                  presentation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our team of experts works closely with {industry.name} businesses to create
                  packaging that not only protects products but also enhances brand value and
                  customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your {industry.name} Packaging?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our {industry.name} industry experts help you create the perfect packaging solution.
            Get a custom quote today and see how we can elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/quote?industry=${encodeURIComponent(industry.slug)}`}>
              <Button
                size="lg"
                className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
              >
                Get Industry Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -right-16 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute -bottom-16 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-purple-300/20 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-sm font-medium text-blue-700 mb-6 shadow-lg backdrop-blur-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Explore Industries
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 bg-clip-text - mb-4">
              Related Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we serve other industries with specialized packaging solutions
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {INDUSTRIES.filter((i) => i.slug !== slug)
              .slice(0, 3)
              .map((relatedIndustry, index) => (
                <Link 
                  key={relatedIndustry.slug} 
                  to={`/industries/${relatedIndustry.slug}`}
                  className="group transform hover:-translate-y-2 transition-all duration-500 block"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Industry Image Container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedIndustry.image}
                          alt={relatedIndustry.name}
                          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl">{relatedIndustry.icon}</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-[var(--axis-dark-blue)] mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {relatedIndustry.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {relatedIndustry.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>Specialized Solutions</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>Industry Expertise</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>Custom Requirements</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                          className="w-full bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn"
                        >
                          <span className="flex items-center justify-center">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--axis-orange)] to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <Building2 className="w-5 h-5 mr-2" />
              <span className="font-semibold">View All Industries</span>
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
