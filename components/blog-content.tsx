import React from "react";
import { BlogContentBlock } from "@/lib/blog-types";

interface BlogContentProps {
  blocks: BlogContentBlock[];
}

export const BlogContent: React.FC<BlogContentProps> = ({ blocks }) => {
  const renderBlock = (block: BlogContentBlock) => {
    switch (block.type) {
      case "heading2":
        return (
          <h2
            key={block.id}
            id={block.id}
            className="text-2xl font-bold mt-8 mb-4 text-gray-900 scroll-mt-20"
          >
            {block.content}
          </h2>
        );

      case "heading3":
        return (
          <h3
            key={block.id}
            id={block.id}
            className="text-xl font-semibold mt-6 mb-3 text-gray-900 scroll-mt-20"
          >
            {block.content}
          </h3>
        );

      case "paragraph":
        return (
          <p
            key={block.id}
            className="text-gray-700 mb-4 leading-relaxed text-base"
          >
            {block.content}
          </p>
        );

      case "bullet-list":
        return (
          <ul
            key={block.id}
            className="list-disc list-inside space-y-2 mb-4 text-gray-700"
          >
            {block.listItems?.map((item, index) => (
              <li key={index} className="text-base">
                {item}
              </li>
            ))}
          </ul>
        );

      case "image":
        return (
          <figure
            key={block.id}
            className="my-6 rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={block.imageUrl}
              alt={block.imageAlt || "Article image"}
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=400&fit=crop";
              }}
            />
            {block.imageAlt && (
              <figcaption className="text-sm text-gray-600 p-3 bg-gray-50">
                {block.imageAlt}
              </figcaption>
            )}
          </figure>
        );

      case "quote":
        return (
          <blockquote
            key={block.id}
            className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6 py-2"
          >
            {block.content}
          </blockquote>
        );

      case "code":
        return (
          <pre
            key={block.id}
            className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"
          >
            <code>{block.content}</code>
          </pre>
        );

      default:
        return null;
    }
  };

  return (
    <article className="prose prose-base max-w-none text-gray-800">
      {blocks.map((block) => renderBlock(block))}
    </article>
  );
};
