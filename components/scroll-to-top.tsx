"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Track page view in Google Analytics for SPA route changes
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-PGRM8ZJSRX", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
