import React from "react";
import { AdminBlogPanel } from "@/components/admin-blog-panel";

export default function AdminBlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AdminBlogPanel />
      </div>
    </main>
  );
}
