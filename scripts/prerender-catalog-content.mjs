function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function shell(routePath, inner) {
  return `<main id="static-content" data-path="${esc(routePath)}">${inner}</main>`;
}

function linkify(text, links) {
  const sorted = [...links].sort((a, b) => b.phrase.length - a.phrase.length);
  const seen = new Set();
  const unique = [];
  for (const link of sorted) {
    const key = String(link.phrase || "").toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(link);
  }
  let html = esc(text);
  for (const link of unique) {
    const phrase = String(link.phrase || "");
    if (!phrase) continue;
    const needle = phrase.toLowerCase();
    let next = "";
    let remaining = html;
    let lower = remaining.toLowerCase();
    let index = lower.indexOf(needle);
    while (index !== -1) {
      const match = remaining.slice(index, index + phrase.length);
      next += `${remaining.slice(0, index)}<a href="${esc(link.href)}" class="text-[var(--axis-orange)] hover:underline font-medium">${match}</a>`;
      remaining = remaining.slice(index + phrase.length);
      lower = remaining.toLowerCase();
      index = lower.indexOf(needle);
    }
    html = next + remaining;
  }
  return html;
}

function list(items) {
  return `<ul class="space-y-3">${items
    .map(
      (item) =>
        `<li class="flex items-start gap-3"><span class="text-green-600" aria-hidden="true">✓</span><span class="text-gray-700">${esc(item)}</span></li>`
    )
    .join("")}</ul>`;
}

export function productStaticHtml(product, products) {
  const routePath = `/products/${product.slug}`;
  const h1 = product.h1 || product.name;
  const links = [
    ...(product.internalLinks || []),
    { phrase: "request a quotation", href: "/quote" },
    { phrase: "All packaging products", href: "/products" },
  ];
  const sections = (product.contentSections || [])
    .map((section) => {
      const subsections = (section.subsections || [])
        .map(
          (item) =>
            `<h3 class="text-xl font-semibold text-[var(--axis-dark-blue)] mt-6 mb-2">${esc(item.title)}</h3><p class="text-gray-700 leading-relaxed">${linkify(item.content, links)}</p>`
        )
        .join("");
      const bullets = section.bullets?.length
        ? `<ul class="grid sm:grid-cols-2 gap-2 mt-4">${section.bullets
            .map((item) => `<li class="text-gray-700">${esc(item)}</li>`)
            .join("")}</ul>`
        : "";
      return `<section class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(section.title)}</h2>${
        section.intro ? `<p class="text-gray-700 leading-relaxed">${linkify(section.intro, links)}</p>` : ""
      }${subsections}${bullets}</div></section>`;
    })
    .join("");
  const types = product.productTypes?.length
    ? `<section class="py-12 bg-gray-50"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">${esc(product.productTypesTitle || "Product types")}</h2><div class="grid md:grid-cols-2 gap-6">${product.productTypes
        .map(
          (item) =>
            `<article><h3 class="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">${esc(item.title)}</h3><p class="text-gray-700 leading-relaxed">${linkify(item.detail, links)}</p></article>`
        )
        .join("")}</div></div></section>`
    : "";
  const specs = product.specificationsBullets?.length
    ? `<section class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">Product specifications</h2>${list(product.specificationsBullets)}</div></section>`
    : product.specificationsTable?.length
      ? `<section class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">${esc(product.specificationsTitle || "Product specifications")}</h2><dl class="space-y-3">${product.specificationsTable
          .map(
            (row) =>
              `<div><dt class="font-semibold text-[var(--axis-dark-blue)]">${esc(row.feature)}</dt><dd class="text-gray-700">${esc(row.detail)}</dd></div>`
          )
          .join("")}</dl></div></section>`
      : "";
  const faqs = product.faqs?.length
    ? `<section class="py-12 bg-gray-50"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">Frequently asked questions</h2><div class="space-y-4">${product.faqs
        .map(
          (faq) =>
            `<details class="bg-white border border-gray-200 rounded-lg" open><summary class="p-4 font-semibold text-[var(--axis-dark-blue)]">${esc(faq.question)}</summary><div class="px-4 pb-4 text-gray-700 leading-relaxed">${linkify(faq.answer, links)}</div></details>`
        )
        .join("")}</div></div></section>`
    : "";
  const related = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3)
    .map(
      (item) =>
        `<li><a href="/products/${esc(item.slug)}" class="text-[var(--axis-orange)] hover:underline font-medium">${esc(item.name)}</a></li>`
    )
    .join("");
  return shell(
    routePath,
    `<div class="min-h-screen bg-gray-50"><section class="bg-white py-4 border-b"><div class="container mx-auto px-4 text-sm text-gray-500"><a href="/" class="hover:text-[var(--axis-orange)]">Home</a> / <a href="/products" class="hover:text-[var(--axis-orange)]">Products</a> / <span class="text-[var(--axis-dark-blue)] font-medium">${esc(product.breadcrumbName || product.name)}</span></div></section><section class="py-8 bg-white"><div class="container mx-auto px-4"><div class="grid lg:grid-cols-2 gap-12"><div><img src="${esc(product.image)}" alt="${esc((product.alt || product.name).split(",")[0].trim())}" width="800" height="384" fetchpriority="high" decoding="async" class="w-full h-96 object-cover rounded-lg shadow-lg" /></div><div><h1 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(h1)}</h1><p class="text-gray-600 mb-6 leading-relaxed">${linkify(product.description || "", links)}</p><div id="static-product-quote"></div></div></div></div></section>${sections}${types}${specs}${faqs}<section class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Related products</h2><ul class="space-y-2">${related}</ul><p class="mt-6"><a href="/products" class="text-[var(--axis-orange)] hover:underline font-medium">All packaging products</a> · <a href="/quote" class="text-[var(--axis-orange)] hover:underline font-medium">Request a quotation</a> · <a href="/contact" class="text-[var(--axis-orange)] hover:underline font-medium">Contact us</a></p></div></section></div>`
  );
}

function contentSectionHtml(sections, links) {
  return (sections || [])
    .map((section) => {
      const subsections = (section.subsections || [])
        .map(
          (item) =>
            `<h3 class="text-xl font-semibold text-[var(--axis-dark-blue)] mt-6 mb-2">${esc(item.title)}</h3><p class="text-gray-700 leading-relaxed">${linkify(item.content, links)}</p>`
        )
        .join("");
      const bullets = section.bullets?.length ? list(section.bullets.map((item) => item)) : "";
      const linkedBullets = section.bullets?.length
        ? `<ul class="space-y-3">${section.bullets
            .map(
              (item) =>
                `<li class="flex items-start gap-3"><span class="text-green-600" aria-hidden="true">✓</span><span class="text-gray-700">${linkify(item, links)}</span></li>`
            )
            .join("")}</ul>`
        : "";
      return `<section class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(section.title)}</h2>${
        section.intro ? `<p class="text-gray-700 leading-relaxed mb-4">${linkify(section.intro, links)}</p>` : ""
      }${subsections}${linkedBullets || bullets}</div></section>`;
    })
    .join("");
}

export function industryStaticHtml(industry, products, industries) {
  const routePath = `/industries/${industry.slug}`;
  const links = industry.internalLinks || [];
  const chosen = industry.relatedProductSlugs?.length
    ? industry.relatedProductSlugs
        .map((slug) => products.find((product) => product.slug === slug))
        .filter(Boolean)
    : products.slice(0, 6);
  const productLinks = chosen
    .map(
      (product) =>
        `<li><a href="/products/${esc(product.slug)}" class="text-[var(--axis-orange)] hover:underline font-medium">${esc(product.name)}</a></li>`
    )
    .join("");
  const productsIntro =
    industry.productsIntro ||
    `These packaging products can be quoted for ${industry.name} businesses. Tell us the product and the quantity you need.`;
  const sections = contentSectionHtml(industry.contentSections, links);
  const related = industries
    .filter((item) => item.slug !== industry.slug)
    .slice(0, 3)
    .map(
      (item) =>
        `<li><a href="/industries/${esc(item.slug)}" class="text-[var(--axis-orange)] hover:underline font-medium">${esc(item.name)} packaging</a></li>`
    )
    .join("");
  return shell(
    routePath,
    `<div class="min-h-screen bg-gray-50"><section class="bg-white py-4 border-b"><div class="container mx-auto px-4 text-sm text-gray-500"><a href="/" class="hover:text-[var(--axis-orange)]">Home</a> / <a href="/industries" class="hover:text-[var(--axis-orange)]">Industries</a> / <span class="text-[var(--axis-dark-blue)] font-medium">${esc(industry.name)}</span></div></section><section class="py-16 bg-white"><div class="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center"><div><h1 class="text-4xl md:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6">${esc(industry.name)} Packaging Solutions</h1><p class="text-xl text-gray-600 mb-8 leading-relaxed">${esc(industry.description || "")}</p><p class="flex flex-col sm:flex-row gap-4"><a href="/quote?industry=${esc(industry.slug)}" class="inline-flex bg-[var(--axis-orange)] text-white px-6 py-3 rounded-md font-semibold">Get industry quote</a><a href="/contact" class="inline-flex border border-[var(--axis-dark-blue)] text-[var(--axis-dark-blue)] px-6 py-3 rounded-md font-semibold">Contact us</a></p></div><div><img src="${esc(industry.image)}" alt="${esc(industry.name)} packaging" width="800" height="384" class="w-full h-96 object-cover rounded-lg shadow-lg" /></div></div></section><section class="py-16 bg-[var(--axis-dark-blue)] text-white"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-8 text-center">${esc(industry.name)} packaging supply</h2><div class="grid md:grid-cols-4 gap-8 text-center"><div><p class="text-3xl font-bold">Custom</p><p>${esc(industry.name)} packaging</p></div><div><p class="text-3xl font-bold">24h</p><p>Quote Response</p></div><div><p class="text-3xl font-bold">UK</p><p>Business Supply</p></div><div><p class="text-3xl font-bold">24/7</p><p>Customer Support</p></div></div></div></section>${sections}<section class="py-16 bg-white"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(industry.name)} packaging options</h2><p class="text-gray-700 mb-6">${linkify(productsIntro, links)}</p><ul class="space-y-4">${productLinks}</ul></div></section><section class="py-12 bg-gray-50"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Related industries</h2><ul class="space-y-2">${related}</ul><p class="mt-6"><a href="/industries" class="text-[var(--axis-orange)] hover:underline font-medium">All industries</a></p></div></section></div>`
  );
}

export function productsIndexStaticHtml(products) {
  const cards = products
    .slice(0, 6)
    .map(
      (product, index) =>
        `<li><a href="/products/${esc(product.slug)}" class="block h-full bg-white rounded-lg shadow-lg overflow-hidden"><img src="${esc(product.image || "/assets/placeholder.jpg")}" alt="${esc(product.name)}" width="640" height="192" loading="lazy" decoding="async" class="w-full h-48 object-cover" /><span class="block p-4 text-lg text-center font-bold text-[var(--axis-dark-blue)]">${esc(product.name)}</span><span class="sr-only">Product ${index + 1}</span></a></li>`
    )
    .join("");
  const allLinks = products
    .map(
      (product) =>
        `<li><a href="/products/${esc(product.slug)}" class="text-[var(--axis-dark-blue)] font-medium">${esc(product.name)}</a></li>`
    )
    .join("");
  return shell(
    "/products",
    `<div class="min-h-screen bg-white"><section class="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white"><div class="container mx-auto px-4 text-center"><h1 class="text-4xl lg:text-5xl font-bold mb-4">Custom Packaging Solutions</h1><p class="text-xl text-blue-100 max-w-3xl mx-auto">Explore our comprehensive range of premium packaging products designed to elevate your brand and protect your products. Choose a product to see where it is used, or tell us the item, quantity and print when you request a quotation. Quotation requests receive a 24h quote response.</p></div></section><section class="py-16 bg-white"><div class="container mx-auto px-4"><h2 class="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4 text-center">One for All Solution</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">Get everything custom packaging your business needs all in one place. From folding cartons to luxury rigid boxes, we have it all.</p><ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">${cards}</ul><nav aria-label="All packaging products" class="mt-16"><h2 class="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6 text-center">All packaging products</h2><ul class="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-5xl mx-auto">${allLinks}</ul></nav></div></section><section class="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white"><div class="container mx-auto px-4 text-center"><h2 class="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2><p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact our packaging experts to discuss your specific needs and get a custom quote for your project.</p><p class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contact?from=products" class="inline-flex bg-[var(--axis-orange)] text-white px-8 py-3 rounded-md font-semibold">Get Product Quote</a><a href="/quote" class="inline-flex border border-white text-white px-8 py-3 rounded-md font-semibold">Request Sample</a></p></div></section></div>`
  );
}

export function industriesIndexStaticHtml(industries) {
  const cards = industries
    .map(
      (industry) =>
        `<li><a href="/industries/${esc(industry.slug)}" class="block h-full bg-white rounded-lg shadow hover:shadow-lg p-4"><span class="text-2xl" aria-hidden="true">${esc(industry.icon || "")}</span><span class="block text-lg font-semibold text-[var(--axis-dark-blue)] mt-2">${esc(industry.name)}</span><span class="block text-sm text-gray-600 mt-2 leading-relaxed">${esc(industry.description || "")}</span></a></li>`
    )
    .join("");
  return shell(
    "/industries",
    `<div class="min-h-screen bg-gray-50"><section class="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white py-20"><div class="container mx-auto px-4 text-center"><h1 class="text-4xl md:text-6xl font-bold mb-6">Shop by Industries</h1><p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Find the perfect packaging solutions tailored to your industry niche. Each industry has specific requirements and we understand them all.</p><a href="/quote" class="inline-flex bg-[var(--axis-orange)] text-white px-6 py-3 rounded-md font-semibold">Request a Quote</a></div></section><section class="py-16 bg-[var(--axis-dark-blue)] text-white"><div class="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center"><div><p class="text-3xl font-bold">Custom</p><p>Industry packaging</p></div><div><p class="text-3xl font-bold">24h</p><p>Quote Response</p></div><div><p class="text-3xl font-bold">UK</p><p>Business Supply</p></div><div><p class="text-3xl font-bold">24/7</p><p>Customer Support</p></div></div></section><section class="py-16"><div class="container mx-auto px-4"><h2 class="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4 text-center">Shop by Industry</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">Find the perfect packaging solutions tailored to your industry niche. Each industry has specific requirements and we understand them all.</p><ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">${cards}</ul></div></section></div>`
  );
}
