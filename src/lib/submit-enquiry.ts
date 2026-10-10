export type EnquiryResult = { ok: true } | { ok: false; error: string };

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
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "We could not send your enquiry. Please try again or email info@theaxispackaging.com.",
    };
  }
}
