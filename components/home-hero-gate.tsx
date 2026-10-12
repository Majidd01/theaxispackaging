"use client";

import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HERO_ID = "static-hero";

export function HomeHeroGate() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const hero = document.getElementById(HERO_ID);
    if (!hero) return;
    const hide = location.pathname !== "/";
    if (hero.hidden !== hide) hero.hidden = hide;
    const nextDisplay = hide ? "none" : "";
    if (hero.style.display !== nextDisplay) hero.style.display = nextDisplay;
  }, [location.pathname]);

  useLayoutEffect(() => {
    const hero = document.getElementById(HERO_ID);
    if (!hero) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || !hero.contains(anchor)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return;
      }
      event.preventDefault();
      navigate(href);
    };

    hero.addEventListener("click", onClick);
    return () => hero.removeEventListener("click", onClick);
  }, [navigate]);

  return null;
}
