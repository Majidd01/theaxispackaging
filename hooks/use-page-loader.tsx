"use client";

import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const skipInitialView = useRef(true);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // A state flag would update and run this effect again, which used to
    // cover the first view. A ref skips that view without another render.
    if (skipInitialView.current) {
      skipInitialView.current = false;
      return;
    }

    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [location.pathname]);

  return isLoading;
}
