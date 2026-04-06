import { getPublishedBlogs } from "@/lib/blogs";

export async function GET() {
  const blogs = getPublishedBlogs();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://theaxispackaging.com";

  const rssItems = blogs
    .map(
      (blog) => `
  <item>
    <title>${escapeXml(blog.title)}</title>
    <link>${baseUrl}/blog/${blog.slug}</link>
    <guid isPermaLink="true">${baseUrl}/blog/${blog.slug}</guid>
    <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>
    <description>${escapeXml(blog.excerpt)}</description>
    <category>${blog.category}</category>
    <author>${blog.author}</author>
    <image>
      <url>${blog.featuredImage}</url>
      <title>${escapeXml(blog.title)}</title>
      <link>${baseUrl}/blog/${blog.slug}</link>
    </image>
  </item>
  `
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Axis Packaging Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Insights, tips, and industry trends about custom packaging solutions</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${baseUrl}/assets/logo.png</url>
      <title>Axis Packaging</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
