import React from "react";
import { Link } from "react-router-dom";
import { Blog } from "@/lib/blog-types";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RelatedPostsProps {
  blogs: Blog[];
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ blogs }) => {
  if (blogs.length === 0) return null;

  return (
    <section className="my-16 py-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.slug}`}
            className="group"
          >
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              {/* Featured Image */}
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <img
                  src={blog.featuredImage}
                  alt={blog.featuredImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=300&fit=crop";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readingTimeMinutes} min
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="px-5 pb-5 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50"
                >
                  Read More
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
