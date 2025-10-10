"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '80vh' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/banner.png')"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-100/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-4 shadow-lg">
            Premium Packaging Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Create custom boxes & packaging of your dreams
          </h2>
          <p className="text-lg text-white mb-6 max-w-2xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            Order personalized, high-quality custom printed packaging and branded boxes your
            customers will love all-in-one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-[var(--axis-orange)] text-white hover:bg-[var(--axis-orange)]/90">
                Request a Quote
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--axis-orange)] bg-white/10 backdrop-blur-sm"
              >
                Choose Packaging style
              </Button>
            </Link>
          </div>
          <div className="flex justify-center gap-6 mt-6 text-sm text-white drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
            <span>50k+ Happy</span>
            <span>24h Quick Turnaround</span>
            <span>100% Custom Made</span>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center px-2 py-1 bg-green-100/90 backdrop-blur-sm text-green-700 rounded-full text-xs font-medium shadow-lg">
              ✓ Premium Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}