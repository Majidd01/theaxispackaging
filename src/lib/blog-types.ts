// Blog Content Types and Interfaces
export interface BlogContentBlock {
  id: string;
  type: "heading2" | "heading3" | "paragraph" | "bullet-list" | "image" | "quote" | "code";
  content?: string;
  imageUrl?: string;
  imageAlt?: string;
  listItems?: string[];
  level?: number;
}

export interface BlogFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BlogMeta {
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: BlogContentBlock[];
  featuredImage: string;
  featuredImageAlt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  category: string;
  tags: string[];
  meta: BlogMeta;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    features: string[];
  };
  faqs: BlogFAQ[];
  relatedPostIds: string[];
  isPublished: boolean;
  views: number;
  tableOfContents: Array<{
    id: string;
    level: number;
    text: string;
  }>;
}

export interface BlogFormData extends Omit<Blog, "id"> {
  id?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Sample categories
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "1",
    name: "Packaging Design",
    slug: "packaging-design",
    description: "Tips and trends in packaging design",
  },
  {
    id: "2",
    name: "Sustainability",
    slug: "sustainability",
    description: "Eco-friendly packaging solutions",
  },
  {
    id: "3",
    name: "Industry Insights",
    slug: "industry-insights",
    description: "News and insights for various industries",
  },
  {
    id: "4",
    name: "Case Studies",
    slug: "case-studies",
    description: "Real-world packaging success stories",
  },
  {
    id: "5",
    name: "Business Tips",
    slug: "business-tips",
    description: "Business growth and packaging strategies",
  },
];
