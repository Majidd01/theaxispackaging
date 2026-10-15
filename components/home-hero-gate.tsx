"use client";

import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HERO_ID = "static-hero";

export function HomeHeroGate() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const hero = document.getElementById(HERO_ID);
    const intro = document.getElementById("static-home-intro");
    const hide = location.pathname !== "/";
    for (const element of [hero, intro]) {
      if (!element) continue;
      if (element === intro && !hide) continue;
      if (element.hidden !== hide) element.hidden = hide;
      const nextDisplay = hide ? "none" : "";
      if (element.style.display !== nextDisplay) element.style.display = nextDisplay;
      if (hide) {
        element.setAttribute("inert", "");
        element.setAttribute("aria-hidden", "true");
      } else {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      }
    }
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
