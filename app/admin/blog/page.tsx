import React from "react";
import { AdminBlogPanel } from "@/components/admin-blog-panel";
import { SeoHead } from "@/components/seo-head";

export default function AdminBlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SeoHead
        title="Blog Admin | Axis Packaging"
        description="Internal blog administration for Axis Packaging."
        path="/admin/blog"
        noindex
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AdminBlogPanel />
      </div>
    </main>
  );
}
