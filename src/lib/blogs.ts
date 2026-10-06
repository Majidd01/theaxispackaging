import { Blog } from "./blog-types";

// Blogs are loaded from public/blogs-data/blogs.json
// To add more blogs, edit the JSON file directly
let blogsCache: Blog[] | null = null;

// Load blogs from JSON file
const loadBlogs = async (): Promise<Blog[]> => {
  if (blogsCache !== null) {
    return blogsCache;
  }

  try {
    const response = await fetch("/blogs-data/blogs.json");
    if (!response.ok) {
      console.error("Failed to load blogs");
      return [];
    }
    blogsCache = await response.json();
    return blogsCache || [];
  } catch (error) {
    console.error("Error loading blogs:", error);
    return [];
  }
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const allBlogs = await loadBlogs();
  return allBlogs.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPublishedBlogs = async (): Promise<Blog[]> => {
  const allBlogs = await loadBlogs();
  return allBlogs
    .filter((blog) => blog.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
};

export const getBlogBySlug = async (slug: string): Promise<Blog | undefined> => {
  const allBlogs = await loadBlogs();
  return allBlogs.find((blog) => blog.slug === slug);
};

export const getBlogById = async (id: string): Promise<Blog | undefined> => {
  const allBlogs = await loadBlogs();
  return allBlogs.find((blog) => blog.id === id);
};

export const getBlogsByCategory = async (category: string): Promise<Blog[]> => {
  const allBlogs = await loadBlogs();
  return allBlogs
    .filter((blog) => blog.category === category && blog.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
};

export const getBlogsByTag = async (tag: string): Promise<Blog[]> => {
  const allBlogs = await loadBlogs();
  return allBlogs
    .filter((blog) => blog.tags.includes(tag) && blog.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
};

export const getRelatedBlogs = async (blogId: string, limit: number = 3): Promise<Blog[]> => {
  const allBlogs = await loadBlogs();
  const blog = allBlogs.find((b) => b.id === blogId);
  if (!blog) return [];

  return allBlogs
    .filter(
      (b) =>
        b.id !== blogId &&
        b.isPublished &&
        (b.category === blog.category || b.tags.some((tag) => blog.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const incrementBlogViews = async (id: string): Promise<void> => {
  const allBlogs = await loadBlogs();
  const blog = allBlogs.find((b) => b.id === id);
  if (blog) {
    blog.views++;
  }
};

export const getBlogsSortedByViews = async (limit: number = 5): Promise<Blog[]> => {
  const allBlogs = await loadBlogs();
  return allBlogs
    .filter((blog) => blog.isPublished)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

