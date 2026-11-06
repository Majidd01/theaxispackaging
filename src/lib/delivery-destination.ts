export type DeliveryCountry = "GB" | "US";

export type DeliveryDetails = {
  deliveryCountry: DeliveryCountry;
  deliveryCity: string;
  deliveryRegion: string;
  deliveryPostcode: string;
  deliveryNotes: string;
};

export const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

const STORAGE_KEY = "axisDeliveryCountry";
const UK_POSTCODE = /^(GIR\s*0AA|[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})$/i;
const US_ZIP = /^\d{5}(?:-\d{4})?$/;
const CITY = /^[A-Za-z][A-Za-z .'-]{1,79}$/;

export function emptyDelivery(country: DeliveryCountry = "GB"): DeliveryDetails {
  return {
    deliveryCountry: country,
    deliveryCity: "",
    deliveryRegion: "",
    deliveryPostcode: "",
    deliveryNotes: "",
  };
}

export function rememberDeliveryCountry(country: DeliveryCountry) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, country);
  } catch {
    /* Private browsing can block storage. The form still works. */
  }
}

/** Query string wins, then a country the visitor chose on this site. Never an IP lookup. */
export function readDeliveryCountry(): DeliveryCountry {
  if (typeof window === "undefined") return "GB";
  const query = new URLSearchParams(window.location.search).get("delivery");
  const fromQuery = query === "US" || query === "USA" ? "US" : query === "GB" || query === "UK" ? "GB" : "";
  if (fromQuery) {
    rememberDeliveryCountry(fromQuery);
    return fromQuery;
  }
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored === "US" || stored === "GB") return stored;
  } catch {
    /* ignore */
  }
  return "GB";
}

export function initialDelivery(): DeliveryDetails {
  return emptyDelivery(readDeliveryCountry());
}

export function stateName(code: string) {
  return US_STATES.find((state) => state.code === code)?.name || "";
}

export function formatUkPostcode(value: string) {
  const compact = value.toUpperCase().replace(/\s+/g, "");
  if (compact.length < 5) return value.trim().toUpperCase();
  return `${compact.slice(0, -3)} ${compact.slice(-3)}`;
}

export function changeDeliveryCountry(current: DeliveryDetails, country: DeliveryCountry): DeliveryDetails {
  if (current.deliveryCountry === country) return current;
  rememberDeliveryCountry(country);
  return {
    ...current,
    deliveryCountry: country,
    deliveryRegion: "",
    deliveryPostcode: "",
  };
}

export function validateDelivery(value: DeliveryDetails): string {
  const city = value.deliveryCity.trim();
  const notes = value.deliveryNotes.trim();
  if (notes.length > 300) return "Keep extra destination instructions under 300 characters.";
  if (!CITY.test(city)) {
    return value.deliveryCountry === "US" ? "Enter the delivery city." : "Enter the delivery town or city.";
  }
  if (value.deliveryCountry === "US") {
    if (!stateName(value.deliveryRegion)) return "Select the delivery state.";
    if (!US_ZIP.test(value.deliveryPostcode.trim())) return "Enter a ZIP code, such as 10001 or 10001-1234.";
    return "";
  }
  if (value.deliveryCountry !== "GB") return "Select United Kingdom or United States.";
  if (!UK_POSTCODE.test(value.deliveryPostcode.trim())) return "Enter a UK postcode, such as LS12 3TZ.";
  return "";
}

export function deliveryPayload(value: DeliveryDetails) {
  const country = value.deliveryCountry === "US" ? "US" : "GB";
  return {
    deliveryCountry: country,
    deliveryCity: value.deliveryCity.trim(),
    deliveryRegion: country === "US" ? value.deliveryRegion : "",
    deliveryPostcode: country === "US" ? value.deliveryPostcode.trim() : formatUkPostcode(value.deliveryPostcode),
    deliveryNotes: value.deliveryNotes.trim(),
  };
}
