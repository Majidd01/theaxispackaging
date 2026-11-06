import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    axisAnalytics?: {
      read: () => string | null;
      accept: () => void;
      reject: () => void;
      loaded: () => boolean;
    };
  }
}

type AnalyticsChoice = "granted" | "denied" | null;

function readChoice(): AnalyticsChoice {
  const value = window.axisAnalytics?.read() ?? null;
  return value === "granted" || value === "denied" ? value : null;
}

export function CookieConsent() {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [choice, setChoice] = useState<AnalyticsChoice>(() => readChoice());
  const [open, setOpen] = useState(() => readChoice() === null);

  useEffect(() => {
    const current = readChoice();
    setChoice(current);
    setOpen(current === null);

    const onOpen = () => setOpen(true);
    const onChange = () => {
      setChoice(readChoice());
      setOpen(false);
    };
    window.addEventListener("axis-open-cookie-preferences", onOpen);
    window.addEventListener("axis-consent-change", onChange);
    return () => {
      window.removeEventListener("axis-open-cookie-preferences", onOpen);
      window.removeEventListener("axis-consent-change", onChange);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const choose = (next: "granted" | "denied") => {
    if (next === "granted") window.axisAnalytics?.accept();
    else window.axisAnalytics?.reject();
    setChoice(next);
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4 pointer-events-none">
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="pointer-events-auto mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-4 text-[var(--axis-dark-blue)] shadow-xl outline-none"
      >
        <h2 id={titleId} className="text-base font-bold">
          Your Privacy Matters
        </h2>
        <p id={descriptionId} className="mt-1 text-sm leading-relaxed text-gray-700">
          We use essential technologies to keep our website working and optional analytics cookies to understand visits and improve our services. You can accept or reject analytics at any time.
        </p>
        {choice ? (
          <p className="mt-2 text-sm text-gray-600">
            Current choice: {choice === "granted" ? "analytics accepted" : "analytics rejected"}.
          </p>
        ) : null}
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/privacy" className="text-sm font-medium text-[var(--axis-orange)] underline">
            Privacy Policy
          </Link>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="h-11 rounded-md border-2 border-[var(--axis-dark-blue)] bg-white px-4 text-sm font-semibold text-[var(--axis-dark-blue)] hover:bg-gray-50"
            >
              Reject Analytics
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="h-11 rounded-md bg-[var(--axis-orange)] px-4 text-sm font-semibold text-white hover:opacity-90"
            >
              Accept Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
