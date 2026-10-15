import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const assets = path.join(root, "public", "assets");
const heroDir = path.join(assets, "hero");
const menuDir = path.join(assets, "menu");
fs.mkdirSync(heroDir, { recursive: true });
fs.mkdirSync(menuDir, { recursive: true });

const heroWidths = [640, 960, 1280, 1536];
const menuItems = [
  ["folding-carton-boxes", "packify-custom-boxes.jpg"],
  ["corrugated-shipping", "Corrugated Shipping Boxes.jpg"],
  ["mailer-boxes", "mailer-boxes.jpg"],
  ["pizza-boxes", "pizza-boxes.jpg"],
  ["greaseproof-paper", "greaseproof-paper.jpg"],
  ["kraft-boxes", "Printed Kraft Boxes.jpg"],
  ["apparel", "packify-fashion-packaging.jpg"],
  ["bakery-cake", "packify-food-packaging.jpg"],
  ["beer-liquor", "custom-blue-box.jpg"],
  ["beverage", "packify-food-containers.jpg"],
  ["candle", "packify-cosmetics-packaging.jpg"],
  ["candy-sweets", "packify-chocolate-packaging.jpg"],
  ["cannabis", "packify-cannabis-packaging.jpg"],
  ["chocolate", "packify-chocolate-packaging.jpg"],
  ["coffee", "packify-food-containers.jpg"],
  ["cosmetics", "packify-cosmetics-packaging.jpg"],
  ["ecommerce", "e-commerce.jpg"],
  ["electronics", "packify-electronics-packaging.jpg"],
];

function kb(file) {
  return Math.round(fs.statSync(file).size / 1024);
}

const banner = path.join(assets, "banner.jpg");
const logo = path.join(assets, "logo.png");
const before = { banner: kb(banner), logo: kb(logo), menu: 0 };
const after = { hero: 0, logo: 0, menu: 0 };

for (const width of heroWidths) {
  const pipeline = () => sharp(banner).resize({ width, withoutEnlargement: true });
  const avif = path.join(heroDir, `banner-${width}.avif`);
  const webp = path.join(heroDir, `banner-${width}.webp`);
  await pipeline().avif({ quality: 50, effort: 4 }).toFile(avif);
  await pipeline().webp({ quality: 72 }).toFile(webp);
  after.hero += kb(avif) + kb(webp);
  console.log(`hero ${width} avif ${kb(avif)} KB, webp ${kb(webp)} KB`);
}

const logoOut = path.join(assets, "logo-320.webp");
await sharp(logo).resize(320, 320, { fit: "cover" }).webp({ quality: 80 }).toFile(logoOut);
after.logo = kb(logoOut);
console.log(`logo-320.webp ${after.logo} KB`);

for (const [slug, file] of menuItems) {
  const source = path.join(assets, file);
  if (!fs.existsSync(source)) throw new Error(`Missing menu source ${file}`);
  before.menu += kb(source);
  const output = path.join(menuDir, `${slug}.webp`);
  await sharp(source).resize(160, 160, { fit: "cover", position: "centre" }).webp({ quality: 75 }).toFile(output);
  after.menu += kb(output);
  console.log(`menu ${slug} ${kb(output)} KB from ${kb(source)} KB`);
}

console.log(JSON.stringify({ before, after }, null, 2));
