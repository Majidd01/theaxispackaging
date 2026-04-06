import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Blog } from "@/lib/blog-types";
import { Clock, Calendar, ArrowRight, Search as SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BlogSidebar } from "./blog-sidebar";
import { BLOG_CATEGORIES } from "@/lib/blog-types";

interface BlogListingProps {
  blogs: Blog[];
  selectedCategory?: string;
  selectedTag?: string;
}

export const BlogListing: React.FC<BlogListingProps> = ({
  blogs,
  selectedCategory,
  selectedTag,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (selectedTag) {
      filtered = filtered.filter((blog) => blog.tags.includes(selectedTag));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [blogs, selectedCategory, selectedTag, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 text-lg">
            Insights, tips, and industry trends about packaging solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <SearchIcon className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 py-6 text-base"
          />
        </div>

        {/* Results Info */}
        {searchQuery && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-gray-900">
              Found <span className="font-bold">{filteredBlogs.length}</span>{" "}
              articles matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Blog Cards Grid */}
        {paginatedBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {paginatedBlogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.slug}`} className="no-underline">
                  <article className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full cursor-pointer">
                    {/* Featured Image */}
                    <div className="h-48 bg-gray-100 overflow-hidden relative">
                      <img
                        src={blog.featuredImage}
                        alt={blog.featuredImageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=300&fit=crop";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Category & Date */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {blog.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {blog.readingTimeMinutes} min
                        </span>
                        <span className="flex items-center gap-1">
                          Views: {blog.views}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-blue-50"
                    >
                      Read Article
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </article>
              </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index + 1}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No articles found.</p>
            <Button
              variant="outline"
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </Button>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <BlogSidebar onSearch={(query) => {
        setSearchQuery(query);
        setCurrentPage(1);
      }} />
    </div>
  );
};
