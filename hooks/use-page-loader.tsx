"use client";

import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Don't show loader on initial page load
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    // Show loader when navigating to a new page
    setIsLoading(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide loader after exactly 1 second
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [location.pathname, isInitialLoad]);

  return isLoading;
}
