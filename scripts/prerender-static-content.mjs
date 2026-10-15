function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function icon(className, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true">${inner}</svg>`;
}

const ICONS = {
  target: icon("h-8 w-8 text-[var(--axis-orange)]", `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`),
  heart: icon("h-8 w-8 text-[var(--axis-orange)]", `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>`),
  users: icon("h-8 w-8 text-[var(--axis-orange)]", `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`),
  award: icon("h-8 w-8 text-[var(--axis-orange)]", `<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>`),
  arrow: icon("ml-2 h-4 w-4", `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`),
  chevron: icon("h-4 w-4", `<path d="m9 18 6-6-6-6"/>`),
  calendar: icon("h-3.5 w-3.5", `<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>`),
  clock: icon("h-3.5 w-3.5", `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`),
};

const VALUE_ICONS = [ICONS.target, ICONS.heart, ICONS.users, ICONS.award];

function shell(path, inner) {
  return `<main id="static-content" data-path="${esc(path)}">${inner}</main>`;
}

function linkedHtml(text) {
  const parts = String(text ?? "").split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts
    .map((part) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (!match) return esc(part);
      const [, label, href] = match;
      const external = /^https?:\/\//i.test(href);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${esc(href)}"${attrs} class="text-blue-600 hover:text-blue-800 underline">${esc(label)}</a>`;
    })
    .join("");
}

function formatDate(iso, month) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", { day: "numeric", month, year: "numeric" });
}

export function aboutStaticHtml(about) {
  const story = about.story.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
  const values = about.values
    .map(
      (value, index) => `<div class="rounded-lg border bg-card text-card-foreground shadow-sm border-0 shadow-lg">
        <div class="p-6 text-center">
          <div class="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">${VALUE_ICONS[index] || ""}</div>
          <h3 class="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">${esc(value.title)}</h3>
          <p class="text-gray-600">${esc(value.description)}</p>
        </div>
      </div>`
    )
    .join("");
  const focus = about.focus
    .map(
      (item) => `<div class="rounded-lg border bg-card text-card-foreground shadow-sm border-0 shadow-lg">
        <div class="p-6 text-center">
          <img src="${esc(item.image)}" alt="${esc(item.alt)}" class="w-full h-44 object-cover rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">${esc(item.title)}</h3>
          <p class="text-gray-600 text-sm mb-4">${esc(item.description)}</p>
          <a href="${esc(item.href)}" class="text-[var(--axis-orange)] font-medium">${esc(item.linkLabel)}</a>
        </div>
      </div>`
    )
    .join("");
  return shell(
    "/about",
    `<section class="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto text-center"><span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[var(--axis-orange)] text-white mb-6">${esc(about.badge)}</span><h1 class="text-4xl lg:text-6xl font-bold mb-6">${esc(about.h1)}</h1><p class="text-xl text-blue-100 leading-relaxed">${esc(about.intro)}</p></div></div></section>
    <section class="py-16 bg-white"><div class="container mx-auto px-4"><div class="grid lg:grid-cols-2 gap-12 items-center"><div><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">${esc(about.storyTitle)}</h2><div class="space-y-4 text-gray-600 leading-relaxed">${story}</div></div><div><img src="${esc(about.storyImage)}" alt="${esc(about.storyAlt)}" class="w-full h-auto rounded-lg shadow-lg" /></div></div></div></section>
    <section class="py-16 bg-gray-50"><div class="container mx-auto px-4"><div class="text-center mb-12"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(about.valuesTitle)}</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto">${esc(about.valuesIntro)}</p></div><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">${values}</div></div></section>
    <section class="py-16 bg-white"><div class="container mx-auto px-4"><div class="text-center mb-12"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(about.focusTitle)}</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto">${esc(about.focusIntro)}</p></div><div class="grid md:grid-cols-3 gap-8">${focus}</div></div></section>
    <section class="py-16 bg-[var(--axis-dark-blue)] text-white"><div class="container mx-auto px-4 text-center"><h2 class="text-3xl font-bold mb-4">${esc(about.ctaTitle)}</h2><p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">${esc(about.ctaBody)}</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/quote" class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-[var(--axis-orange)] text-white">${esc(about.ctaPrimary)}${ICONS.arrow}</a><a href="/contact" class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-white text-white bg-transparent">${esc(about.ctaSecondary)}</a></div></div></section>`
  );
}

export function contactStaticHtml(contact) {
  const questions = contact.questions
    .map(
      (question) =>
        `<a href="/faqs?q=${encodeURIComponent(question)}" class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700">${esc(question)}${ICONS.chevron}</a>`
    )
    .join("");
  return shell(
    "/contact",
    `<section class="py-12 bg-white"><div class="container mx-auto px-4"><div class="grid lg:grid-cols-2 gap-12"><div><div class="mb-12"><h1 class="text-4xl font-bold text-[var(--axis-dark-blue)] mb-6">${esc(contact.h1Lead)}<br />${esc(contact.h1Middle)}<br /><span class="text-green-600">${esc(contact.h1Brand)}</span></h1><p class="text-gray-600 leading-relaxed mb-4">${esc(contact.intro)}</p><h2 class="text-2xl font-bold text-[var(--axis-dark-blue)] mb-3">${esc(contact.detailsHeading)}</h2><p class="text-gray-600 leading-relaxed mb-8">${esc(contact.details)}</p></div><div><h2 class="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">${esc(contact.faqHeading)}</h2><div class="space-y-3">${questions}</div><div class="mt-4 text-center"><a href="/faqs" class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-[var(--axis-orange)] text-[var(--axis-orange)]">${esc(contact.allFaqsLabel)}</a></div></div></div><div id="static-contact-form"></div></div></div></section>`
  );
}

export function faqsStaticHtml(copy, items) {
  const cards = items
    .map(
      (faq) => `<details class="rounded-lg border border-gray-200 bg-card text-card-foreground" data-faq-id="${esc(faq.id)}" data-category="${esc(faq.category)}">
        <summary class="p-6 cursor-pointer">
          <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-3">${esc(faq.category)}</span>
          <h3 class="inline text-lg font-semibold text-[var(--axis-dark-blue)]">${esc(faq.question)}</h3>
        </summary>
        <div class="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">${esc(faq.answer)}</div>
      </details>`
    )
    .join("");
  const stats = copy.supportStats
    .map((stat) => {
      const valueClass = String(stat.value).length > 8 ? "text-base font-bold leading-snug" : "text-2xl font-bold";
      const label = stat.label
        ? `<div class="text-blue-100 text-sm">${esc(stat.label)}</div>`
        : "";
      return `<div class="text-center"><div class="${valueClass}">${esc(stat.value)}</div>${label}</div>`;
    })
    .join("");
  return shell(
    "/faqs",
    `<section class="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"><div class="container mx-auto px-4"><div class="text-center mb-12"><span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[var(--axis-orange)] text-white mb-4">${esc(copy.badge)}</span><h1 class="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(copy.h1)}</h1><p class="text-xl text-gray-600 max-w-3xl mx-auto">${esc(copy.intro)}</p></div><div class="text-center mb-8"><a href="/contact" class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-[var(--axis-orange)] text-[var(--axis-orange)]">Back to Contact</a></div></div></section>
    <section class="py-16 bg-white"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div id="static-faq-filters"></div><div id="static-faq-list" class="space-y-4">${cards}</div><div id="static-faq-empty"></div><div class="mt-16"><div class="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white rounded-3xl p-8 md:p-12 text-center"><h2 class="text-3xl md:text-4xl font-bold mb-4">${esc(copy.supportTitle)}</h2><p class="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">${esc(copy.supportBody)}</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">${stats}</div><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contact" class="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white">${esc(copy.contactSupport)}</a><a href="/quote" class="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold border-2 border-white text-white">${esc(copy.customQuote)}</a></div></div></div></div></div></section>`
  );
}

function contentBlockHtml(block) {
  switch (block.type) {
    case "heading2":
      return `<h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${esc(block.content)}</h2>`;
    case "heading3":
      return `<h3 class="text-2xl font-bold text-gray-800 mt-6 mb-3">${esc(block.content)}</h3>`;
    case "paragraph":
      return `<p class="text-gray-700 leading-relaxed mb-4">${linkedHtml(block.content || "")}</p>`;
    case "bullet-list":
      return `<ul class="list-disc list-inside space-y-2 mb-4 text-gray-700">${(block.listItems || [])
        .map((item) => `<li class="ml-4">${linkedHtml(item)}</li>`)
        .join("")}</ul>`;
    case "image":
      return `<figure class="my-8"><img src="${esc(block.imageUrl)}" alt="${esc(block.imageAlt || "Blog image")}" width="1200" height="675" loading="lazy" decoding="async" class="w-full rounded-lg shadow-md" />${
        block.imageAlt ? `<figcaption class="text-sm text-gray-600 mt-2 text-center">${esc(block.imageAlt)}</figcaption>` : ""
      }</figure>`;
    case "quote":
      return `<blockquote class="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-6 bg-blue-50 p-4 rounded">${esc(block.content)}</blockquote>`;
    default:
      return "";
  }
}

function relatedBlogs(blog, blogs) {
  return blogs
    .filter(
      (item) =>
        item.id !== blog.id &&
        item.isPublished &&
        (item.category === blog.category || (item.tags || []).some((tag) => (blog.tags || []).includes(tag)))
    )
    .slice(0, 3);
}

export function blogIndexStaticHtml(copy, blogs) {
  const cards = blogs
    .map(
      (blog) => `<a href="/blog/${esc(blog.slug)}" class="group no-underline"><article class="h-full bg-white rounded-xl shadow-md overflow-hidden"><div class="h-56 w-full overflow-hidden bg-gray-200 relative"><img src="${esc(blog.featuredImage)}" alt="${esc(blog.featuredImageAlt || blog.title)}" width="800" height="450" class="w-full h-full object-cover" /><div class="absolute top-4 left-4"><span class="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">${esc(blog.category)}</span></div></div><div class="p-6"><h2 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">${esc(blog.title)}</h2><p class="text-gray-600 text-sm mb-4 line-clamp-2">${esc(blog.excerpt)}</p><div class="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200"><span class="flex items-center gap-1">${ICONS.calendar}${esc(formatDate(blog.publishedAt, "short"))}</span><span class="flex items-center gap-1">${ICONS.clock}${esc(blog.readingTimeMinutes)} min read</span></div><span class="text-blue-600 font-semibold text-sm">${esc(copy.readArticle)}</span></div></article></a>`
    )
    .join("");
  return shell(
    "/blog",
    `<div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"><div class="max-w-6xl mx-auto px-4"><h1 class="text-5xl font-bold mb-4">${esc(copy.h1)}</h1><p class="text-xl text-blue-100">${esc(copy.intro)}</p></div></div><div class="max-w-6xl mx-auto px-4 py-16"><div class="grid grid-cols-1 md:grid-cols-3 gap-8">${cards}</div></div>`
  );
}

export function blogArticleStaticHtml(blog, blogs) {
  const related = relatedBlogs(blog, blogs)
    .map(
      (item) =>
        `<a href="/blog/${esc(item.slug)}" class="block no-underline"><p class="font-semibold text-gray-900 text-sm">${esc(item.title)}</p><p class="text-xs text-gray-600 mt-2">${esc(item.readingTimeMinutes)} min read</p></a>`
    )
    .join("");
  const toc = (blog.tableOfContents || [])
    .map(
      (item) =>
        `<li style="margin-left:${(item.level - 2) * 20}px"><span class="text-blue-600 text-sm">${esc(item.text)}</span></li>`
    )
    .join("");
  const faqs = (blog.faqs || [])
    .map(
      (faq) => `<details class="border border-gray-200 rounded-lg" open><summary class="p-4 font-semibold text-gray-900">${esc(faq.question)}</summary><div class="px-4 pb-4 text-gray-700 border-t border-gray-200">${esc(faq.answer)}</div></details>`
    )
    .join("");
  const tags = (blog.tags || [])
    .map((tag) => `<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">#${esc(tag)}</span>`)
    .join("");
  const features = (blog.cta?.features || [])
    .map((feature) => `<li class="flex items-center gap-2">${ICONS.chevron}${esc(feature)}</li>`)
    .join("");
  const ctaLink = blog.cta?.buttonLink || "/quote";
  const externalCta = /^https?:\/\//i.test(ctaLink);
  const cta = blog.cta
    ? `<div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 my-12"><h3 class="text-2xl font-bold mb-2">${esc(blog.cta.title)}</h3><p class="text-blue-100 mb-4">${esc(blog.cta.description)}</p>${
        features ? `<ul class="space-y-2 mb-6">${features}</ul>` : ""
      }<a href="${esc(ctaLink)}"${externalCta ? ' target="_blank" rel="noopener noreferrer"' : ""} class="inline-flex bg-white text-blue-600 font-bold px-8 py-3 rounded-lg">${esc(blog.cta.buttonText)}</a></div>`
    : "";
  return shell(
    `/blog/${blog.slug}`,
    `<div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12"><div class="max-w-4xl mx-auto px-4"><div class="flex items-center gap-2 text-blue-100 mb-6 text-sm"><a href="/blog" class="hover:text-white">Blog</a>${ICONS.chevron}<span>${esc(blog.category)}</span></div><h1 class="text-4xl md:text-5xl font-bold mb-4">${esc(blog.title)}</h1><div class="flex items-center gap-6 text-blue-100 text-sm flex-wrap"><span>${esc(blog.author)}</span><span>${esc(formatDate(blog.publishedAt, "long"))}</span><span>${esc(blog.readingTimeMinutes)} min read</span></div></div></div>
    <div class="max-w-4xl mx-auto px-4 py-8"><img src="${esc(blog.featuredImage)}" alt="${esc(blog.featuredImageAlt || blog.title)}" width="1200" height="630" class="w-full rounded-lg shadow-lg" /></div>
    <div class="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8"><div class="lg:col-span-3">${
      toc ? `<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"><h3 class="font-bold text-gray-900 mb-4">Table of Contents</h3><ul class="space-y-2">${toc}</ul></div>` : ""
    }<article>${(blog.content || []).map(contentBlockHtml).join("")}</article>${cta}${
      faqs ? `<section class="my-12"><h2 class="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2><div class="space-y-4">${faqs}</div></section>` : ""
    }${tags ? `<div class="my-8 pt-8 border-t border-gray-200"><p class="text-sm font-semibold text-gray-600 mb-4">Tags:</p><div class="flex flex-wrap gap-2">${tags}</div></div>` : ""}</div><aside class="lg:col-span-1">${
      related ? `<div class="bg-gray-50 rounded-lg p-6"><h3 class="font-bold text-gray-900 mb-4">Related Articles</h3><div class="space-y-4">${related}</div></div>` : ""
    }<div class="bg-blue-50 rounded-lg p-6 mt-6"><p class="text-sm text-gray-600 mb-2">Category</p><p class="font-bold text-gray-900">${esc(blog.category)}</p></div></aside></div>
    <div class="max-w-4xl mx-auto px-4 pb-12"><a href="/blog" class="text-blue-600 font-semibold">← Back to Blog</a></div>`
  );
}

function linkifyPhrases(text, links) {
  let html = esc(text);
  const sorted = [...(links || [])].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const link of sorted) {
    const pattern = new RegExp(link.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    html = html.replace(pattern, (match) => `<a href="${esc(link.href)}" class="text-[var(--axis-orange)] hover:underline font-medium">${match}</a>`);
  }
  return html;
}

export function homeIntroHtml(intro) {
  const paragraphs = intro.paragraphs.map((paragraph) => `<p class="text-gray-700 leading-relaxed mb-4">${esc(paragraph)}</p>`).join("");
  const links = intro.links
    .map((link) => `<a href="${esc(link.href)}" class="text-[var(--axis-orange)] hover:underline font-medium">${esc(link.label)}</a>`)
    .join(" · ");
  return `<section id="static-home-intro" class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-4xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(intro.h2)}</h2>${paragraphs}<p class="text-gray-700">${links}</p></div></section>`;
}

export function quoteIntroHtml(guide) {
  const bullets = guide.bullets.map((item) => `<li class="text-gray-700">${esc(item)}</li>`).join("");
  return `<section id="static-quote-intro" class="py-12 bg-white"><div class="container mx-auto px-4 max-w-4xl"><h1 class="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(guide.h1)}</h1><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(guide.h2)}</h2><p class="text-gray-700 leading-relaxed mb-4">${esc(guide.intro)}</p><ul class="list-disc pl-5 space-y-2 mb-4">${bullets}</ul><p class="text-gray-700 leading-relaxed">${esc(guide.close)}</p></div></section>`;
}

export function sustainabilityStaticHtml(page) {
  const sections = page.sections
    .map((section) => {
      const subsections = (section.subsections || [])
        .map(
          (item) =>
            `<h3 class="text-xl font-semibold text-[var(--axis-dark-blue)] mt-6 mb-2">${esc(item.title)}</h3><p class="text-gray-700 leading-relaxed">${linkifyPhrases(item.content, page.links)}</p>`
        )
        .join("");
      const bullets = section.bullets
        ? `<ul class="list-disc pl-5 space-y-2">${section.bullets.map((item) => `<li class="text-gray-700">${esc(item)}</li>`).join("")}</ul>`
        : "";
      return `<section class="py-12 bg-white border-t"><div class="container mx-auto px-4 max-w-4xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(section.title)}</h2><p class="text-gray-700 leading-relaxed mb-4">${linkifyPhrases(section.intro, page.links)}</p>${subsections}${bullets}</div></section>`;
    })
    .join("");
  return shell(
    "/sustainability",
    `<section class="py-16 bg-gradient-to-br from-green-50 to-blue-50"><div class="container mx-auto px-4 text-center max-w-4xl"><h1 class="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-4">${esc(page.h1)}</h1><p class="text-xl text-gray-600">${linkifyPhrases(page.intro, page.links)}</p></div></section>${sections}`
  );
}

export function moqStaticHtml(page) {
  const tiers = page.tiers
    .map(
      (tier) =>
        `<article class="border border-gray-200 rounded-lg p-4"><h3 class="text-lg font-semibold text-[var(--axis-dark-blue)]">${esc(tier.category)}</h3><p class="text-[var(--axis-orange)] font-bold mt-2">${esc(tier.note)}</p><p class="text-sm text-gray-500">Order quantity</p><p class="font-semibold text-[var(--axis-dark-blue)] mt-2">${esc(tier.price)}</p><p class="text-sm text-gray-500">Price</p><ul class="mt-3 space-y-1">${tier.features.map((feature) => `<li class="text-sm text-gray-700">${esc(feature)}</li>`).join("")}</ul></article>`
    )
    .join("");
  const points = page.points
    .map((point) => `<article><h3 class="text-lg font-semibold text-[var(--axis-dark-blue)]">${esc(point.title)}</h3><p class="text-gray-700">${esc(point.content)}</p></article>`)
    .join("");
  const questions = page.questions
    .map(
      (item) =>
        `<article class="border border-gray-200 rounded-lg p-4"><h3 class="font-semibold text-[var(--axis-dark-blue)] mb-2">${esc(item.question)}</h3><p class="text-gray-700">${esc(item.answer)}</p></article>`
    )
    .join("");
  return shell(
    "/moq",
    `<section class="py-16 bg-[var(--axis-dark-blue)] text-white"><div class="container mx-auto px-4 max-w-4xl text-center"><h1 class="text-4xl lg:text-5xl font-bold mb-6">${esc(page.h1)}</h1><p class="text-xl text-blue-100">${esc(page.intro)}</p></div></section><section class="py-16 bg-white"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4 text-center">${esc(page.catalogueTitle)}</h2><p class="text-gray-700 text-center max-w-3xl mx-auto mb-8">${esc(page.catalogueIntro)}</p><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">${tiers}</div></div></section><section class="py-16 bg-gray-50"><div class="container mx-auto px-4 max-w-5xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4 text-center">${esc(page.quantityTitle)}</h2><p class="text-gray-700 text-center mb-8">${esc(page.quantityIntro)}</p><div class="grid md:grid-cols-2 gap-6">${points}</div></div></section><section class="py-16 bg-white"><div class="container mx-auto px-4 max-w-3xl"><h2 class="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6 text-center">${esc(page.questionsTitle)}</h2><div class="space-y-4">${questions}</div><p class="mt-8 text-center"><a href="/quote" class="inline-flex bg-[var(--axis-orange)] text-white px-6 py-3 rounded-md font-semibold">Request a quotation</a></p></div></section><section class="py-16 bg-[var(--axis-dark-blue)] text-white"><div class="container mx-auto px-4 text-center"><h2 class="text-3xl font-bold mb-4">Request a quantity quotation</h2><p class="text-xl text-blue-100 mb-6">Send the product and the quantity you need. The quotation confirms what can be supplied.</p><a href="/contact" class="text-white underline font-medium">Contact us</a></div></section>`
  );
}

export function collectLocalRefs(html) {
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  const images = [...html.matchAll(/src="([^"]+)"/g)].map((match) => match[1]);
  return { hrefs, images };
}
