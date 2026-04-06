import React from "react";
import { Link } from "react-router-dom";
import { Blog } from "@/lib/blog-types";
import { Clock, Calendar, User, Share2, ArrowLeft } from "lucide-react";
import { TableOfContents } from "./blog-table-of-contents";
import { BlogContent } from "./blog-content";
import { BlogFAQSection, BlogFAQSchema } from "./blog-faq";
import { BlogCTA } from "./blog-cta";
import { RelatedPosts } from "./blog-related-posts";
import { Button } from "./ui/button";
import { getRelatedBlogs, incrementBlogViews } from "@/lib/blogs";

interface BlogDetailProps {
  blog: Blog;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  const [relatedBlogs, setRelatedBlogs] = React.useState<Blog[]>([]);
  
  React.useEffect(() => {
    getRelatedBlogs(blog.id, 3).then(setRelatedBlogs);
  }, [blog.id]);

  // Increment view count when component mounts
  React.useEffect(() => {
    incrementBlogViews(blog.id);
  }, [blog.id]);

  // Generate article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {blog.faqs.length > 0 && <BlogFAQSchema faqs={blog.faqs} />}

      {/* Back Button */}
      <Link to="/blog">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Button>
      </Link>

      {/* Header Section */}
      <header className="mb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>/</span>
          <Link
            to={`/blog?category=${blog.category}`}
            className="hover:text-blue-600"
          >
            {blog.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{blog.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
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

        {/* Category Badge */}
        <div className="flex gap-2 mb-6">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            {blog.category}
          </span>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-600">Share:</span>
          <a href={`https://twitter.com/intent/tweet?text=${blog.title}`} target="_blank" rel="noopener noreferrer"  className="p-2 hover:bg-gray-100 rounded">
            <Share2 size={18} />
          </a>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 h-96">
        <img
          src={blog.featuredImage}
          alt={blog.featuredImageAlt}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1200&h=400&fit=crop";
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Content */}
        <div className="lg:col-span-3">
          {/* Introduction */}
          <section className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              {blog.excerpt}
            </p>
          </section>

          {/* Table of Contents */}
          <TableOfContents items={blog.tableOfContents} />

          {/* Blog Content */}
          <BlogContent blocks={blog.content} />

          {/* CTA - Middle */}
          <BlogCTA
            title={blog.cta.title}
            description={blog.cta.description}
            buttonText={blog.cta.buttonText}
            buttonLink={blog.cta.buttonLink}
            features={blog.cta.features}
          />

          {/* FAQ Section */}
          <BlogFAQSection faqs={blog.faqs} />

          {/* Tags */}
          {blog.tags.length > 0 && (
            <section className="my-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Posts */}
          {relatedBlogs.length > 0 && <RelatedPosts blogs={relatedBlogs} />}
        </div>

        {/* Sidebar - Only visible on desktop */}
        <div className="hidden lg:block">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-4 border border-gray-200 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Article Stats</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 uppercase">Views</p>
                <p className="text-2xl font-bold text-gray-900">
                  {blog.views.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Reading Time</p>
                <p className="text-2xl font-bold text-gray-900">
                  {blog.readingTimeMinutes} min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
