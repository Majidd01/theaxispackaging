"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useNavigation() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Only show loader if path actually changed (not on initial load)
    if (currentPath && currentPath !== location.pathname) {
      setIsLoading(true);
      
      // Scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Hide loader after a short delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
    
    // Update current path
    setCurrentPath(location.pathname);
  }, [location.pathname, currentPath]);

  return { isLoading };
}
