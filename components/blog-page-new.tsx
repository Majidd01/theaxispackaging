"use client";

import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { getPublishedBlogs } from "@/lib/blogs";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Blog } from "@/lib/blog-types";

export const BlogPageComponent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const publishedBlogs = await getPublishedBlogs();
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Packaging Insights & Tips</h1>
          <p className="text-xl text-blue-100">
            Expert guides, industry trends, and best practices for sustainable packaging solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <RouterLink key={blog.id} to={`/blog/${blog.slug}`} className="group no-underline">
                <article className="h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1">
                  {/* Featured Image */}
                  <div className="h-56 w-full overflow-hidden bg-gray-200 relative">
                    <img
                      src={blog.featuredImage}
                      alt={blog.featuredImageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1586071214147-4b9d25a62d0d?w=400&h=300&fit=crop";
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {blog.readingTimeMinutes} min read
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                        Read Article
                      </span>
                      <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </RouterLink>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
