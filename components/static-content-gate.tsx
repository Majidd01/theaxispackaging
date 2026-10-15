"use client";

import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CONTENT_ID = "static-content";

export function StaticContentGate() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const content = document.getElementById(CONTENT_ID);
    if (!content) return;
    const path = content.getAttribute("data-path") || "";
    const hide = location.pathname !== path;
    if (content.hidden !== hide) content.hidden = hide;
    const nextDisplay = hide ? "none" : "";
    if (content.style.display !== nextDisplay) content.style.display = nextDisplay;
  }, [location.pathname]);

  useLayoutEffect(() => {
    const content = document.getElementById(CONTENT_ID);
    if (!content) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || !content.contains(anchor)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return;
      }
      event.preventDefault();
      navigate(href);
    };

    content.addEventListener("click", onClick);
    return () => content.removeEventListener("click", onClick);
  }, [navigate]);

  return null;
}
