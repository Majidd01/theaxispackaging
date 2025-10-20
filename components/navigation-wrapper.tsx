"use client";

import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/page-loader";
import { useEffect } from "react";

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export function NavigationWrapper({ children }: NavigationWrapperProps) {
  const isLoading = usePageLoader();

  // Ensure page starts from top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </div>
    </>
  );
}
