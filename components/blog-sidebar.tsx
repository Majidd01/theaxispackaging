import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Blog, BLOG_CATEGORIES } from "@/lib/blog-types";
import { getBlogsSortedByViews } from "@/lib/blogs";
import { Search, TrendingUp } from "lucide-react";

interface BlogSidebarProps {
  currentBlogSlug?: string;
  onSearch?: (query: string) => void;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentPosts, setRecentPosts] = useState<Blog[]>([]);
  
  React.useEffect(() => {
    getBlogsSortedByViews(5).then(setRecentPosts);
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <aside className="lg:sticky lg:top-20 space-y-6 h-fit">
      {/* Search */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Search Blogs</h3>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {BLOG_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/blog?category=${category.slug}`}
              className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Trending/Popular Posts */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <TrendingUp size={18} className="text-orange-500" />
          Popular Posts
        </h3>
        <ul className="space-y-3">
          {recentPosts.slice(0, 5).map((blog) => (
            <li key={blog.id}>
              <Link
                to={`/blog/${blog.slug}`}
                className="text-sm text-gray-700 hover:text-blue-600 font-medium hover:underline line-clamp-2"
              >
                {blog.title}
              </Link>
              <p className="text-xs text-gray-500 mt-1">
                {blog.views.toLocaleString()} views
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-5 text-white">
        <h3 className="font-bold text-lg mb-2">Need Custom Packaging?</h3>
        <p className="text-sm mb-4 opacity-90">
          Get expert guidance on packaging solutions tailored to your needs.
        </p>
        <Link to="/quote">
          <Button
            size="sm"
            className="w-full bg-white text-blue-600 hover:bg-gray-100"
          >
            Request a Quote
          </Button>
        </Link>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-3">
          Get the latest packaging insights delivered to your inbox.
        </p>
        <Input placeholder="your@email.com" type="email" className="mb-2" />
        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
          Subscribe
        </Button>
      </div>
    </aside>
  );
};
