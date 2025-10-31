"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setSubmitted,
  setSubmitting,
  updateContactInfo,
  updateDimensions,
  updateFormData,
} from "@/lib/slices/quoteFormSlice";
import emailjs from "@emailjs/browser";
import { Calculator, CheckCircle, Clock, Upload } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Initialize EmailJS with your public key
// emailjs.init("shQGEnnog2UpWxhdL");
emailjs.init("1c6673PLz9Wiytv_t");

export function InstantQuote() {
  const dispatch = useAppDispatch();
  const { formData, isSubmitting, submitted } = useAppSelector((state) => state.quoteForm);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  // Handle optional industry param and guide download
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const industry = params.get("industry") || "";
    const downloadGuide = params.get("downloadGuide");
    if (industry) {
      // Pre-fill a hint in additional requirements
      if (!formData.additionalRequirements) {
        dispatch(updateFormData({ additionalRequirements: `Industry: ${industry}` }));
      }
    }
    if (downloadGuide && industry) {
      try {
        const content = `Axis Packaging\nIndustry Guide: ${industry}\n\nThis is a concise starter guide for the ${industry} industry.\nContact: info@theaxispackaging.com`;
        // const content = `Axis Packaging\nIndustry Guide: ${industry}\n\nThis is a concise starter guide for the ${industry} industry.\nContact: majid121.skylinxtech@gmail.com`;
        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${industry}-guide.txt`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        toast({ title: "Guide downloaded", description: `Downloaded ${industry} guide.` });
      } catch {
        // no-op
      }
    }
    // run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.productType ||
      !formData.quantity ||
      !formData.contactInfo.name ||
      !formData.contactInfo.email
    ) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    dispatch(setSubmitting(true));

    try {
      const templateParams = {
        // to_email: "info@theaxispackaging.com",
        to_email: "info@theaxispackaging.com",
        from_name: formData.contactInfo.name,
        from_email: formData.contactInfo.email,
        from_phone: formData.contactInfo.phone || "Not provided",
        from_company: formData.contactInfo.company || "Not provided",
        product_type: formData.productType,
        quantity: formData.quantity,
        dimensions: `${formData.dimensions.length || "N/A"}" x ${
          formData.dimensions.width || "N/A"
        }" x ${formData.dimensions.height || "N/A"}"`,
        material: formData.material || "Not specified",
        printing: formData.printing || "Not specified",
        timeline: formData.timeline || "Not specified",
        additional_requirements: formData.additionalRequirements || "None",
        subject: `New Quote Request - ${formData.contactInfo.name}`,
      };

      await emailjs.send(
        // "service_vhwzbeo", // Your service ID
        // "template_9epu9ft", // Your template ID
        "service_82mnk3u", // Your service ID
        "template_8f726v7", // Your template ID
        templateParams
      );

      dispatch(setSubmitted(true));
      console.log("Quote request sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send quote request. Please try again.");
    } finally {
      dispatch(setSubmitting(false));
    }
  };

  const nextStep = () => setStep(Math.min(step + 1, 3));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Quote Request Submitted!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your interest! Our team will review your requirements and get back to
              you within 24 hours with a detailed quote.
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
                  <span>Our team reviews your requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[var(--axis-orange)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span>We prepare a detailed quote and design mockup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[var(--axis-orange)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span>You receive your quote within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--axis-orange)] text-white mb-4">
            <Calculator className="h-4 w-4 mr-2" />
            Instant Quote
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Get Your Custom Quote in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out our quick form and receive a detailed quote for your custom packaging needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-[var(--axis-dark-blue)] text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Custom Packaging Quote Request</span>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm">~3 minutes</span>
                </div>
              </CardTitle>
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Step {step} of 3</span>
                  <span>{Math.round((step / 3) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-[var(--axis-orange)] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div>
                {/* Step 1: Product Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-4">
                      Product Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="productType">Product Type *</Label>
                        <Select
                          value={formData.productType}
                          onValueChange={(value) =>
                            dispatch(updateFormData({ productType: value }))
                          }
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999] bg-white" position="popper" sideOffset={4}>
                            <SelectItem value="folding-carton-boxes">
                              Custom Folding Carton Boxes
                            </SelectItem>
                            <SelectItem value="rigid-boxes">Premium Rigid Boxes</SelectItem>
                            <SelectItem value="box-inserts">Custom Box Inserts</SelectItem>
                            <SelectItem value="reusable-bags">Custom Reusable Bags</SelectItem>
                            <SelectItem value="mailer-bags">Printed Mailer Bags</SelectItem>
                            <SelectItem value="flexible-pouches">
                              Flexible Packaging Pouches
                            </SelectItem>
                            <SelectItem value="tin-containers">Metal Tin Containers</SelectItem>
                            <SelectItem value="pop-displays">Retail POP Displays</SelectItem>
                            <SelectItem value="stickers-labels">Vinyl Stickers Labels</SelectItem>
                            <SelectItem value="kraft-boxes">Printed Kraft Boxes</SelectItem>
                            <SelectItem value="paper-bags">Paper Shopping Bags</SelectItem>
                            <SelectItem value="eco-friendly">Eco-friendly Packaging</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Select
                          value={formData.quantity}
                          onValueChange={(value) => dispatch(updateFormData({ quantity: value }))}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select quantity" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999] bg-white" position="popper" sideOffset={4}>
                            <SelectItem value="100-500">100 - 500 units</SelectItem>
                            <SelectItem value="500-1000">500 - 1,000 units</SelectItem>
                            <SelectItem value="1000-5000">1,000 - 5,000 units</SelectItem>
                            <SelectItem value="5000-10000">5,000 - 10,000 units</SelectItem>
                            <SelectItem value="10000+">10,000+ units</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Label className="text-base font-medium mb-3 block">
                        Dimensions (inches)
                      </Label>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="length" className="text-sm">
                            Length
                          </Label>
                          <Input
                            id="length"
                            type="number"
                            placeholder="0.0"
                            value={formData.dimensions.length}
                            onChange={(e) => dispatch(updateDimensions({ length: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="width" className="text-sm">
                            Width
                          </Label>
                          <Input
                            id="width"
                            type="number"
                            placeholder="0.0"
                            value={formData.dimensions.width}
                            onChange={(e) => dispatch(updateDimensions({ width: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="height" className="text-sm">
                            Height
                          </Label>
                          <Input
                            id="height"
                            type="number"
                            placeholder="0.0"
                            value={formData.dimensions.height}
                            onChange={(e) => dispatch(updateDimensions({ height: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="material">Material</Label>
                        <Select
                          value={formData.material}
                          onValueChange={(value) => dispatch(updateFormData({ material: value }))}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select material" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999] bg-white" position="popper" sideOffset={4}>
                            <SelectItem value="corrugated-e-flute">Corrugated E-Flute</SelectItem>
                            <SelectItem value="corrugated-b-flute">Corrugated B-Flute</SelectItem>
                            <SelectItem value="corrugated-c-flute">Corrugated C-Flute</SelectItem>
                            <SelectItem value="corrugated-bc-flute">Corrugated BC-Flute</SelectItem>
                            <SelectItem value="kraft-paper">Kraft Paper</SelectItem>
                            <SelectItem value="rigid-chipboard">Rigid Chipboard</SelectItem>
                            <SelectItem value="recycled-paper">Recycled Paper</SelectItem>
                            <SelectItem value="fsc-certified">FSC Certified Paper</SelectItem>
                            <SelectItem value="metal-tin">Metal Tin</SelectItem>
                            <SelectItem value="flexible-film">Flexible Film</SelectItem>
                            <SelectItem value="vinyl">Vinyl</SelectItem>
                            <SelectItem value="eco-friendly">Eco-Friendly Materials</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="printing">Printing Options</Label>
                        <Select
                          value={formData.printing}
                          onValueChange={(value) => dispatch(updateFormData({ printing: value }))}
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select printing" />
                          </SelectTrigger>
                          <SelectContent className="z-[9999] bg-white" position="popper" sideOffset={4}>
                            <SelectItem value="no-printing">No Printing</SelectItem>
                            <SelectItem value="1-color">1 Color Printing</SelectItem>
                            <SelectItem value="2-color">2 Color Printing</SelectItem>
                            <SelectItem value="full-color">Full Color (CMYK)</SelectItem>
                            <SelectItem value="spot-color">Spot Color</SelectItem>
                            <SelectItem value="foil-stamping">Foil Stamping</SelectItem>
                            <SelectItem value="embossing">Embossing</SelectItem>
                            <SelectItem value="debossing">Debossing</SelectItem>
                            <SelectItem value="uv-coating">UV Coating</SelectItem>
                            <SelectItem value="matte-finish">Matte Finish</SelectItem>
                            <SelectItem value="gloss-finish">Gloss Finish</SelectItem>
                            <SelectItem value="custom-finishes">Custom Finishes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select
                        value={formData.timeline || ""}
                        onValueChange={(value) => dispatch(updateFormData({ timeline: value }))}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="z-[9999] bg-white" position="popper" sideOffset={4}>
                          <SelectItem value="rush-1-2-weeks">Rush (1-2 weeks)</SelectItem>
                          <SelectItem value="standard-3-4-weeks">Standard (3-4 weeks)</SelectItem>
                          <SelectItem value="extended-5-6-weeks">Extended (5-6 weeks)</SelectItem>
                          <SelectItem value="flexible-6+weeks">Flexible (6+ weeks)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-4">
                      Contact Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.contactInfo.name}
                          onChange={(e) => dispatch(updateContactInfo({ name: e.target.value }))}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.contactInfo.email}
                          onChange={(e) => dispatch(updateContactInfo({ email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.contactInfo.phone}
                          onChange={(e) => dispatch(updateContactInfo({ phone: e.target.value }))}
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Enter your company name"
                          value={formData.contactInfo.company}
                          onChange={(e) => dispatch(updateContactInfo({ company: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Requirements */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-4">
                      Additional Requirements
                    </h3>

                    <div>
                      <Label htmlFor="requirements">Special Requirements or Notes</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Tell us about any special requirements, design preferences, or additional details..."
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={(e) =>
                          dispatch(updateFormData({ additionalRequirements: e.target.value }))
                        }
                      />
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Upload Design Files (Optional)
                      </Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[var(--axis-orange)] transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Drag and drop your files here, or{" "}
                          <label htmlFor="file-upload" className="text-[var(--axis-orange)] hover:underline cursor-pointer">
                            browse
                          </label>
                        </p>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            console.log('Selected files:', files);
                            // You can add file handling logic here
                          }}
                        />
                        <p className="text-sm text-gray-500">
                          Supports: PDF, AI, PSD, JPG, PNG (Max 10MB each)
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-[var(--axis-dark-blue)] mb-2">
                        What happens next?
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Our team reviews your requirements within 2 hours</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>We prepare a detailed quote with design mockups</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>You receive your quote via email within 24 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 1}
                    className="px-6 bg-transparent"
                  >
                    Previous
                  </Button>

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 px-6"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 px-6"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
