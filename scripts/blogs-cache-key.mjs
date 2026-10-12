import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export function blogsCacheKey(root) {
  const file = path.join(root, "public", "blogs-data", "blogs.json");
  return createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 12);
}
