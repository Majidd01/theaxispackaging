"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-purple-500 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo with Glow Effect */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
          <img
            src="/assets/logo.png"
            alt="Axis Packaging Logo"
            className="relative w-24 h-24 mx-auto rounded-2xl shadow-2xl animate-bounce"
            style={{
              height: "120px",
              width: "120px",
              transform: "scale(1.2)"
            }}
          />
        </div>

        {/* Modern Loading Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-orange-500 border-r-orange-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-transparent border-b-blue-500 border-l-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading Text with Gradient */}
        <div className="space-y-3 mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 bg-clip-text text-transparent animate-pulse">
            Loading...
          </h3>
          <p className="text-gray-600 text-base">
            Preparing your experience
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-80 mx-auto mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full animate-pulse relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Branding with Better Typography */}
        <div className="space-y-2">
          <p className="text-lg font-bold text-[var(--axis-dark-blue)]">
            Axis Packaging
          </p>
          <p className="text-sm text-gray-500 font-medium">
            Your Box, Your Brand
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-200 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-200 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-200 rounded-full animate-bounce delay-700 opacity-60"></div>
      </div>
    </div>
  );
}
