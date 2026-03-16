"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Award, Zap, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '85vh', minHeight: '600px' }}>
      {/* Background Image */}
      <div
        role="img"
        aria-label="custom packaging solutions"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/banner.png')"
        }}
      >
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100/95 to-orange-100/95 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 mb-6 shadow-2xl border border-yellow-200/50 hover:scale-105 transition-transform duration-300">
            <Award className="w-4 h-4 mr-2 text-orange-600" />
            <span>Premium Packaging Solutions</span>
          </div>

          {/* Enhanced Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
            Create Custom Boxes &{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text -">
              Packaging
            </span>{" "}
            of Your Dreams
          </h2>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Order personalized, high-quality custom printed packaging and branded boxes your
            customers will love all-in-one place.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/quote">
              <Button className="bg-gradient-to-r from-[var(--axis-orange)] to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Request a Quote
                <Package className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--axis-orange)] bg-white/10 backdrop-blur-md px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Choose Packaging Style
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span className="font-bold">50k+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="font-bold">24h</span>
              <span>Quick Turnaround</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium shadow-lg border border-white/20">
              <Package className="w-4 h-4 text-orange-300" />
              <span className="font-bold">100%</span>
              <span>Custom Made</span>
            </div>
          </div>

          {/* Enhanced Quality Badge */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100/95 to-emerald-100/95 backdrop-blur-md text-green-800 rounded-full text-sm font-semibold shadow-xl border border-green-200/50 hover:scale-105 transition-transform duration-300">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Premium Quality Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}