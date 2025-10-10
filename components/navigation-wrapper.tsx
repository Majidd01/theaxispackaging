"use client";

import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/page-loader";
import { useEffect, useState } from "react";

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export function NavigationWrapper({ children }: NavigationWrapperProps) {
  const isLoading = usePageLoader();
  const [showContent, setShowContent] = useState(true);

  // Ensure page starts from top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle content visibility based on loading state
  useEffect(() => {
    if (isLoading) {
      setShowContent(false);
    } else {
      // Show content immediately when loading stops
      setShowContent(true);
    }
  }, [isLoading]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </>
  );
}
