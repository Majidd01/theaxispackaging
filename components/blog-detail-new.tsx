"use client";

import React, { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/blogs";
import { Clock, Calendar, User, ChevronRight, ChevronDown } from "lucide-react";
import { Blog, BlogContentBlock, BlogFAQ } from "@/lib/blog-types";

export const BlogDetailComponent = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());
  const [activeTableOfContents, setActiveTableOfContents] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!slug) return;
        const fetchedBlog = await getBlogBySlug(slug);
        if (fetchedBlog) {
          setBlog(fetchedBlog);
          const related = await getRelatedBlogs(fetchedBlog.id, 3);
          setRelatedBlogs(related);
        }
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const toggleFAQ = (id: string) => {
    const newExpanded = new Set(expandedFAQs);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFAQs(newExpanded);
  };

  const renderContentBlock = (block: BlogContentBlock,  index: number) => {
    switch (block.type) {
      case "heading2":
        return (
          <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            {block.content}
          </h2>
        );
      case "heading3":
        return (
          <h3 key={index} className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            {block.content}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {block.content}
          </p>
        );
      case "bullet-list":
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            {block.listItems?.map((item, i) => (
              <li key={i} className="ml-4">{item}</li>
            ))}
          </ul>
        );
      case "image":
        return (
          <figure key={index} className="my-8">
            <img
              src={block.imageUrl}
              alt={block.imageAlt || "Blog image"}
              className="w-full rounded-lg shadow-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1586071214147-4b9d25a62d0d?w=800&h=400&fit=crop";
              }}
            />
            {block.imageAlt && (
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {block.imageAlt}
              </figcaption>
            )}
          </figure>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-6 bg-blue-50 p-4 rounded"
          >
            {block.content}
          </blockquote>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <RouterLink to="/blog" className="text-blue-600 hover:text-blue-700 underline">
            Back to Blogs
          </RouterLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-blue-100 mb-6 text-sm">
            <RouterLink to="/blog" className="hover:text-white">
              Blog
            </RouterLink>
            <ChevronRight size={16} />
            <span>{blog.category}</span>
            <ChevronRight size={16} />
            <span className="text-blue-200">{blog.title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-blue-100 text-sm flex-wrap">
            <span className="flex items-center gap-2">
              <User size={16} />
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {blog.readingTimeMinutes} min read
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <img
          src={blog.featuredImage}
          alt={blog.featuredImageAlt}
          className="w-full rounded-lg shadow-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1586071214147-4b9d25a62d0d?w=1200&h=600&fit=crop";
          }}
        />
      </div>

      {/* Layout Container */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Table of Contents */}
          {blog.tableOfContents && blog.tableOfContents.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {blog.tableOfContents.map((item) => (
                  <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 20}px` }}>
                    <button
                      onClick={() => setActiveTableOfContents(item.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700">
              {blog.content.map((block, index) => renderContentBlock(block, index))}
            </div>
          </article>

          {/* CTA Section */}
          {blog.cta && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold mb-2">{blog.cta.title}</h3>
              <p className="text-blue-100 mb-4">{blog.cta.description}</p>
              {blog.cta.features && blog.cta.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {blog.cta.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <RouterLink to={blog.cta.buttonLink}>
                <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  {blog.cta.buttonText}
                </button>
              </RouterLink>
            </div>
          )}

          {/* FAQ Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {blog.faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-left">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-blue-600 transition-transform ${
                          expandedFAQs.has(faq.id) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFAQs.has(faq.id) && (
                      <div className="px-4 pb-4 text-gray-700 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 mb-4">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Recent Articles / Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedBlogs.map((relatedBlog) => (
                  <RouterLink
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.slug}`}
                    className="block group no-underline"
                  >
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-3">
                      {relatedBlog.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                      {relatedBlog.readingTimeMinutes} min read
                    </p>
                  </RouterLink>
                ))}
              </div>
            </div>
          )}

          {/* Category */}
          <div className="bg-blue-50 rounded-lg p-6 mt-6">
            <p className="text-sm text-gray-600 mb-2">Category</p>
            <p className="font-bold text-gray-900">{blog.category}</p>
          </div>
        </aside>
      </div>

      {/* Back to Blog Link */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <RouterLink
          to="/blog"
          className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
        >
          <span>←</span> Back to Blog
        </RouterLink>
      </div>
    </main>
  );
};
