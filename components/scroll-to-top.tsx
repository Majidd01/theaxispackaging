"use client";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current === pathname) return;

    const isFirstView = previousPath.current === null;
    previousPath.current = pathname;
    // The GA4 tag in index.html records the first page view. Enhanced
    // Measurement records later history changes, so this effect only scrolls.
    if (isFirstView) return;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
