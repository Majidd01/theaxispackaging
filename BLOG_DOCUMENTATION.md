# Blog System Documentation

## Overview

The Axis Packaging blog system is a comprehensive, SEO-optimized platform for creating, managing, and displaying blog content. It features an admin panel for content creators and fully optimized public pages for readers.

## Features

### 👨‍💼 Admin Features
- **Create & Edit Blog Posts**: Full-featured editor with rich content blocks
- **Content Management**: Add headings, paragraphs, images, bullet lists, quotes, and code blocks
- **SEO Optimization**: Meta titles/descriptions, OG tags, schema markup
- **FAQ Management**: Add FAQs with expand/collapse functionality
- **Category & Tags**: Organize content with categories and multiple tags
- **Status Control**: Draft and Publish workflow
- **Statistics**: View total posts, published count, drafts, and total views
- **Search & Filter**: Find posts by title, content, or slug

### 📖 Public Features
- **Blog Listing**: Display all published blogs with pagination
- **Blog Details**: Full blog post page with optimized layout
- **Table of Contents**: Auto-generated TOC with smooth scrolling
- **Related Posts**: Show 3-5 related articles
- **Sidebar**: Categories, popular posts, search, and CTA
- **SEO Optimized**: Schema markup, meta tags, OG for social sharing
- **Reading Time**: Auto-calculated reading time
- **View Tracking**: Monitor blog view counts

### 🔍 SEO Features
- **Article Schema**: JSON-LD structured data
- **FAQ Schema**: FAQ structured data
- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Prevent duplicate content issues
- **Sitemap Generation**: Auto-generated blog sitemap
- **RSS Feed**: RSS feed for subscribers
- **Search API**: Real-time blog search

## File Structure

```
app/
├── blog/
│   ├── page.tsx                 # Blog listing page
│   └── [slug]/
│       └── page.tsx             # Blog detail page
├── admin/
│   └── blog/
│       └── page.tsx             # Admin dashboard
└── api/
    ├── blog-search/route.ts     # Search API
    ├── blog-sitemap/route.ts    # Sitemap API
    └── blog-feed/route.ts       # RSS Feed API

components/
├── blog-listing.tsx             # Blog grid with pagination
├── blog-detail.tsx              # Full blog post display
├── blog-editor.tsx              # Content editor form
├── admin-blog-panel.tsx         # Admin management interface
├── blog-table-of-contents.tsx   # TOC component
├── blog-faq.tsx                 # FAQ component
├── blog-cta.tsx                 # Call-to-action section
├── blog-sidebar.tsx             # Sidebar with search and categories
├── blog-content.tsx             # Content block renderer
└── blog-related-posts.tsx       # Related posts display

lib/
├── blog-types.ts                # TypeScript interfaces
└── blogs.ts                     # Blog data management
```

## Data Structure

### Blog Interface

```typescript
interface Blog {
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
  cta: CTABlock;
  faqs: BlogFAQ[];
  relatedPostIds: string[];
  isPublished: boolean;
  views: number;
  tableOfContents: TOCItem[];
}
```

## Admin Panel Usage

### Access the Admin Panel
Navigate to `/admin/blog` in your browser.

### Create a New Blog Post

1. Click **"New Blog Post"** button
2. Fill in basic information:
   - **Content Tab**: Title, slug, excerpt, featured image
   - **SEO Tab**: Meta title/description, OG image, tags
   - **FAQs Tab**: Add frequently asked questions
   - **Settings Tab**: Category, author, publish date, status

3. Add content blocks:
   - Click buttons to add headings, paragraphs, lists, images
   - Edit each block as needed
   - Delete blocks with trash icon

4. **Publish**: Toggle publish status and click save

### Edit a Blog Post

1. Use search/filter to find post
2. Click menu (⋯) and select **Edit**
3. Update content and click **Update Blog**

### Delete a Blog Post

1. Click menu (⋯)
2. Click **Delete**
3. Confirm deletion

## Public Blog Pages

### Blog Listing (`/blog`)
- Displays all published blogs in a grid
- Search functionality
- Filter by category and tag
- Pagination (6 posts per page)
- Sidebar with:
  - Search bar
  - Category list
  - Popular posts
  - CTA banner
  - Newsletter signup

### Blog Detail (`/blog/{slug}`)
- Full blog post with header info
- Featured image
- Table of Contents (sticky)
- Main content with auto-scrolling
- CTA boxes
- FAQ section
- Related posts
- View count
- Share buttons

## Customization

### Modify Blog Categories
Edit `lib/blog-types.ts`:

```typescript
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "1",
    name: "Your Category",
    slug: "category-slug",
    description: "Category description",
  },
];
```

### Add Navigation Link
The blog link is already in `lib/constants.ts` NAVIGATION_ITEMS.

### Customize Styles
Edit component files to modify:
- Colors
- Typography
- Spacing
- Layout

## Content Block Types

1. **heading2** - Section heading
2. **heading3** - Subsection heading
3. **paragraph** - Regular text
4. **bullet-list** - Bullet points
5. **image** - Images with alt text
6. **quote** - Blockquote
7. **code** - Code snippets

## SEO Best Practices

### Meta Optimization
- **Meta Title**: 50-60 characters (included in editor)
- **Meta Description**: 150-160 characters (included in editor)
- **Keywords**: Add relevant tags
- **OG Image**: 1200x630px recommended

### Content Optimization
- Include primary keyword in first 100 words
- Use proper heading structure (H1 > H2 > H3)
- Add descriptive alt text to images
- Link to related posts internally
- Include Call-to-Action sections

### Schema Markup
- **Article Schema**: Auto-generated from blog data
- **FAQ Schema**: Auto-generated from FAQs
- Both included as JSON-LD in page head

## APIs

### Blog Search API
```
GET /api/blog-search?q=query
```
Returns up to 10 matching blogs.

### Blog Sitemap API
```
GET /api/blog-sitemap
```
Returns XML sitemap for all blogs.

### Blog Feed API
```
GET /api/blog-feed
```
Returns RSS feed for all published blogs.

## Data Storage

Currently uses **in-memory storage** (`lib/blogs.ts`). For production, replace with:
- **MongoDB**: Documents in `blogs` collection
- **PostgreSQL**: Table structure for blogs
- **Headless CMS**: Strapi, Contentful, etc.
- **Firebase**: Firestore database

## Performance Optimization

1. **Image Lazy Loading**: Images load on scroll
2. **Reading Time**: Auto-calculated (200 words/minute)
3. **TOC Sticky**: Stays visible on scroll (desktop)
4. **Pagination**: Limits posts per page
5. **View Tracking**: Efficient view counter

## Mobile Responsive

- TOC collapsible on mobile
- Sidebar moves below content
- CTA full width
- Touch-friendly buttons and links
- Readable typography (16px+ minimum)

## Future Enhancements

1. **Comment System**: Add user comments
2. **Author Pages**: Dedicated author profiles
3. **Advanced Search**: Full-text search with filters
4. **Social Sharing**: ShareThis or similar integration
5. **Analytics**: Google Analytics integration
6. **Scheduled Publishing**: Schedule posts for future
7. **Blog Scheduling**: Queue posts
8. **Media Library**: Centralized image management
9. **Backup System**: Auto-backup blog data
10. **Multi-language**: Support multiple languages

## Troubleshooting

### Blog Not Showing
- Check `isPublished` status is `true`
- Verify slug is correct
- Check `publishedAt` date is not in future

### Images Not Loading
- Check image URL is valid
- Use absolute URLs (https://)
- Check alt text is provided
- Recommended size: 1200x630px minimum

### SEO Not Working
- Check meta title and description
- Verify schema tags in browser DevTools
- Check canonical URL
- Submit sitemap to Google Search Console

## Support

For issues or questions:
1. Check this documentation
2. Review component JSDoc comments
3. Check browser console for errors
4. Test in different browsers

---

**Last Updated**: March 2026
**Version**: 1.0
