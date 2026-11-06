export type EnquiryResult = { ok: true } | { ok: false; error: string };

function analyticsAccepted() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("axis_analytics_consent") === "granted";
  } catch {
    return false;
  }
}

function trackAcceptedEnquiry(payload: Record<string, unknown>) {
  if (!analyticsAccepted()) return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  const country = payload.deliveryCountry === "US" || payload.deliveryCountry === "GB" ? payload.deliveryCountry : "unspecified";
  const formName = typeof payload.form === "string" ? payload.form : "unknown";
  const category = typeof payload.productType === "string" && payload.productType.length <= 80 && !payload.productType.includes("@")
    ? payload.productType
    : undefined;
  gtag("event", "generate_lead", {
    form_name: formName,
    delivery_country: country,
    page_path: window.location.pathname,
    ...(category ? { item_category: category } : {}),
  });
}

export async function submitEnquiry(payload: Record<string, unknown>): Promise<EnquiryResult> {
  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!response.ok || data?.ok !== true) {
      return {
        ok: false,
        error: data?.error || "We could not send your enquiry. Please try again or email info@theaxispackaging.com.",
      };
    }
    trackAcceptedEnquiry(payload);
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "We could not send your enquiry. Please try again or email info@theaxispackaging.com.",
    };
  }
}
