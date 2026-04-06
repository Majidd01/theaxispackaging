import { getPublishedBlogs } from "@/lib/blogs";

export async function GET() {
  const blogs = getPublishedBlogs();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://theaxispackaging.com";

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastmod: blog.updatedAt || blog.publishedAt,
    changefreq: "weekly",
    priority: 0.8,
  }));

  const mainUrls = [
    {
      url: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    },
  ];

  const urls = [...mainUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${new Date(item.lastmod).toISOString().split("T")[0]}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
