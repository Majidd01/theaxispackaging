"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Package, Clock, Shield, Star } from "lucide-react";

export function Quotation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    dimensions: "",
    material: "",
    printing: "",
    budget: "",
    timeline: "",
    description: "",
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full border border-orange-200 mb-6">
            <Calculator className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Get Your Custom Quote</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6 leading-tight">
            Ready to Bring Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text -">
              Packaging Vision
            </span>{" "}
            to Life?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a personalized quote for your custom packaging needs. Our experts will provide you with competitive pricing and design recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Quote Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+44 7367 066309"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <Input
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Type *</label>
                    <Select value={formData.productType} onValueChange={(value) => handleInputChange("productType", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="folding-carton">Folding Carton Boxes</SelectItem>
                        <SelectItem value="rigid-boxes">Rigid Boxes</SelectItem>
                        <SelectItem value="mailer-bags">Mailer Bags</SelectItem>
                        <SelectItem value="shipping-boxes">Shipping Boxes</SelectItem>
                        <SelectItem value="custom-inserts">Custom Inserts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity *</label>
                    <Select value={formData.quantity} onValueChange={(value) => handleInputChange("quantity", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100-500">100 - 500 units</SelectItem>
                        <SelectItem value="500-1000">500 - 1,000 units</SelectItem>
                        <SelectItem value="1000-5000">1,000 - 5,000 units</SelectItem>
                        <SelectItem value="5000-10000">5,000 - 10,000 units</SelectItem>
                        <SelectItem value="10000+">10,000+ units</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (L x W x H)</label>
                  <Input
                    type="text"
                    placeholder="e.g., 10 x 8 x 4 inches"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Material Preference</label>
                    <Select value={formData.material} onValueChange={(value) => handleInputChange("material", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kraft">Kraft Paper</SelectItem>
                        <SelectItem value="white-cardboard">White Cardboard</SelectItem>
                        <SelectItem value="corrugated">Corrugated</SelectItem>
                        <SelectItem value="recycled">Recycled Material</SelectItem>
                        <SelectItem value="premium">Premium Material</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Printing Requirements</label>
                    <Select value={formData.printing} onValueChange={(value) => handleInputChange("printing", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select printing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Printing</SelectItem>
                        <SelectItem value="1-color">1 Color Print</SelectItem>
                        <SelectItem value="2-color">2 Color Print</SelectItem>
                        <SelectItem value="full-color">Full Color Print</SelectItem>
                        <SelectItem value="foil-stamping">Foil Stamping</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rush">Rush (1-2 weeks)</SelectItem>
                        <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                        <SelectItem value="flexible">Flexible (4+ weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <Textarea
                    placeholder="Tell us more about your packaging needs, design ideas, or any specific requirements..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 min-h-[100px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <Link to="/terms" className="text-orange-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={!formData.agreeToTerms}
                >
                  Get My Custom Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">Why Choose Our Quote Process?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Analysis</h4>
                    <p className="text-gray-600 text-sm">We analyze your specific needs and provide detailed recommendations for materials, design, and production.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                    <p className="text-gray-600 text-sm">Receive your custom quote within 24 hours of submission, including pricing and timeline details.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No Hidden Costs</h4>
                    <p className="text-gray-600 text-sm">Transparent pricing with no surprises. All costs are clearly outlined in your quote.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Consultation</h4>
                    <p className="text-gray-600 text-sm">Our packaging specialists are available to discuss your project and answer any questions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-orange-100 mb-6">Join thousands of satisfied customers who trust Axis Packaging for their custom packaging needs.</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-orange-100 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24h</div>
                  <div className="text-orange-100 text-sm">Quote Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
