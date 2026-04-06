import { getPublishedBlogs } from "@/lib/blogs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return Response.json({
      results: [],
      error: "Query must be at least 2 characters",
    });
  }

  const blogs = getPublishedBlogs();
  const searchQuery = query.toLowerCase();

  const results = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery) ||
        blog.excerpt.toLowerCase().includes(searchQuery) ||
        blog.content.some((block) =>
          block.content?.toLowerCase().includes(searchQuery)
        ) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
    )
    .map((blog) => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      featuredImage: blog.featuredImage,
      category: blog.category,
      readingTimeMinutes: blog.readingTimeMinutes,
      publishedAt: blog.publishedAt,
    }))
    .slice(0, 10);

  return Response.json({ results });
}
