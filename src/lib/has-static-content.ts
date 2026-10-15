/** True when this document was prerendered with the page body outside the React root. */
export function hasStaticContent(path: string) {
  if (typeof document === "undefined") return false;
  return document.getElementById("static-content")?.getAttribute("data-path") === path;
}
