# Blog Management Guide

## Overview
Blogs are stored in JSON format and loaded dynamically from `/public/blogs-data/blogs.json`.

## How to Add/Edit Blogs

### Adding a New Blog
1. Open `/public/blogs-data/blogs.json`
2. Add a new blog object to the array with this structure:

```json
{
  "id": "4",
  "title": "Your Blog Title Here",
  "slug": "your-blog-slug",
  "excerpt": "Brief description for the blog card",
  "content": [
    {
      "type": "heading2",
      "content": "Section Title"
    },
    {
      "type": "paragraph",
      "content": "Your paragraph text here"
    },
    {
      "type": "bullet-list",
      "listItems": ["Item 1", "Item 2", "Item 3"]
    }
  ],
  "featuredImage": "https://image-url.com/image.jpg",
  "featuredImageAlt": "Image description for SEO",
  "author": "Axis Packaging Team",
  "publishedAt": "2024-04-06T10:00:00Z",
  "readingTimeMinutes": 5,
  "category": "Packaging Design",
  "tags": ["tag1", "tag2"],
  "meta": {
    "metaTitle": "SEO Title (50-60 chars)",
    "metaDescription": "SEO Description (150-160 chars)",
    "ogImage": "https://image-url.com/og-image.jpg"
  },
  "cta": {
    "title": "CTA Title",
    "description": "CTA Description",
    "buttonText": "Button Text",
    "buttonLink": "/route",
    "features": ["Feature 1", "Feature 2"]
  },
  "faqs": [
    {
      "id": "faq1",
      "question": "Question?",
      "answer": "Answer text here"
    }
  ],
  "relatedPostIds": ["1", "2"],
  "isPublished": true,
  "tableOfContents": [
    {
      "id": "section1",
      "level": 2,
      "text": "Section Title"
    }
  ],
  "views": 0
}
```

## Content Block Types

### heading2
Section headings (H2)
```json
{ "type": "heading2", "content": "Title" }
```

### heading3
Subsection headings (H3)
```json
{ "type": "heading3", "content": "Subtitle" }
```

### paragraph
Regular text content
```json
{ "type": "paragraph", "content": "Your text..." }
```

### bullet-list
Bulleted lists
```json
{ "type": "bullet-list", "listItems": ["Item 1", "Item 2"] }
```

### image
Images with alt text
```json
{ "type": "image", "imageUrl": "https://...", "imageAlt": "Description" }
```

### quote
Block quotes
```json
{ "type": "quote", "content": "Quote text..." }
```

## Features Included

✅ Beautiful blog listing page with grid layout
✅ Blog detail page with:
  - Table of Contents (auto-generated from headings)
  - SEO-optimized structure
  - CTA sections
  - FAQ sections with expand/collapse
  - Related posts sidebar
  - Reading time indicator
  - Tags and categories
  - Responsive design

## SEO Best Practices

1. **Meta Title**: Keep under 60 characters
2. **Meta Description**: Keep between 150-160 characters
3. **Slug**: Use hyphens, lowercase, descriptive
4. **Keywords**: Include in title and first 100 words
5. **Headings**: Use H2 for main sections, H3 for subsections
6. **Images**: Always include alt text
7. **Links**: Use internal links to related content

## Reloading After Changes
After editing the JSON file:
1. Save the file
2. The blog page will automatically reload the data from the JSON file
3. No server restart needed

Enjoy your new blog system! 🎉
