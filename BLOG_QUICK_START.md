# Blog System - Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Access Admin Panel
Go to: `http://localhost:3000/admin/blog`

You should see:
- Statistics dashboard
- Search bar
- Table with 1 sample blog post
- "New Blog Post" button

### Step 2: View the Sample Blog
1. Click menu (⋯) next to "The Ultimate Guide to Custom Packaging Design"
2. Click **View** to see the live blog page
3. Explore the layout:
   - Featured image
   - Table of contents
   - Main content
   - FAQ section
   - CTA section
   - Related posts

### Step 3: Create Your First Blog Post
1. In admin panel, click **"New Blog Post"**
2. Fill in the **Content Tab**:
   - Title: "Your Blog Title"
   - Slug will auto-generate
   - Excerpt: Brief description
   - Featured Image URL: Your image URL
   - Featured Image Alt: Image description

3. Click **"+ Text"** to add paragraphs
4. Click **"+ H2"** to add section headings
5. Add content and images as needed

4. Go to **SEO Tab**:
   - Meta Title (50-60 chars)
   - Meta Description (150-160 chars)
   - Add tags (press Enter between tags)

5. Go to **FAQs Tab**:
   - Click **"Add FAQ"**
   - Add 4-6 FAQs with questions and answers

6. Go to **Settings Tab**:
   - Select Category
   - Set Author (default: Axis Packaging Team)
   - Set Publish Date
   - Toggle **Publish** to make it live

7. Click **"Create Blog"** to save

### Step 4: View Your New Blog
1. In admin panel, click menu (⋯)
2. Click **View** to see your live blog post
3. Check the public blog page: `/blog`

Your blog should appear at the top!

## Admin Panel Overview

### Dashboard Stats
- **Total Posts**: All blog posts
- **Published**: Live blogs only
- **Drafts**: Unpublished posts
- **Total Views**: Sum of all blog views

### Content Editor
The editor has 4 tabs:

#### Content Tab
- **Title**: Your blog title
- **Slug**: URL-friendly version
- **Excerpt**: Preview text
- **Featured Image**: Main image
- **Alt Text**: Image description

Add content blocks with buttons:
- **H2**: Section heading
- **Text**: Paragraph
- **List**: Bullet points
- **Image**: Pictures with alt text

#### SEO Tab
- **Meta Title**: Google search result title
- **Meta Description**: Google search result preview
- **OG Image**: Social media preview
- **Tags**: Keywords (comma-separated or Enter to add)

#### FAQs Tab
- Click **"Add FAQ"**
- Add question and answer
- Appears as accordion in blog
- Included in FAQ schema markup

#### Settings Tab
- **Category**: Blog category
- **Author**: Post author name
- **Publish Date**: When it goes live
- **Status**: Draft or Published toggle

## Content Block Types

### Heading 2 (H2)
Main section heading. Use for major topics.

### Heading 3 (H3)
Subsection heading. Use under H2.

### Paragraph
Regular text content. Keep to 2-3 lines maximum.

### Bullet List
Click **"+ Add Item"** to add points.

### Image
- URL: Image web address
- Alt Text: Description for SEO and accessibility

### Quote
Use for testimonials or important statements.

### Code
For code snippets or technical content.

## Public Blog Pages

### Blog Listing (`/blog`)
Shows all blogs with:
- Featured image
- Category badge
- Title and excerpt
- Reading time
- View count
- Tags
- "Read Article" button

**Sidebar Features:**
- Search blogs
- Filter by category
- Popular posts
- Request quote CTA
- Newsletter signup

### Blog Detail (`/blog/{slug}`)
Full blog post with:
- Header with title, author, date, read time
- Featured image
- **Table of Contents** (sticky): Auto-generated from H2/H3 headings
- Main content
- **CTA Box**: Call-to-action after 2nd section
- **FAQ Section**: Expand/collapse questions
- Tag list
- Related posts

## Tips for Great Blogs

### Title & SEO
- ✅ Clear, descriptive titles
- ✅ Include target keyword
- ✅ 50-60 character meta titles
- ✅ 150-160 character descriptions

### Content
- ✅ Start with introduction (100-150 words)
- ✅ Use proper heading structure (H2 → H3)
- ✅ Keep paragraphs short (2-3 lines)
- ✅ Add image per major section
- ✅ Use bullet points for lists

### Call-to-Action
- ✅ Include 2-3 CTA sections
- ✅ List key benefits
- ✅ Clear button text ("Request Quote", "Learn More")

### FAQs
- ✅ 4-6 relevant questions
- ✅ Clear, concise answers
- ✅ Address common customer questions
- ✅ Include keywords naturally

### Images
- ✅ Use alt text for SEO
- ✅ 1200x630px recommended
- ✅ Optimize file size (< 500KB)
- ✅ Use HTTPS URLs only

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add FAQ | FAQs Tab → "Add FAQ" |
| Add Tag | Type tag + Enter or click "Add" |
| Add Content Block | Click button in Content Tab |
| Save Blog | Click "Create Blog" or "Update Blog" |

## Common Scenarios

### Publishing a Blog
1. Go to Settings Tab
2. Click the status button → toggles to "Published"
3. Save the blog
4. Blog is now live at `/blog/{slug}`

### Featuring an Image After 1st Section
1. In Content Tab, add content blocks in order:
   - H2 heading
   - Paragraph
   - Image block
   - More sections

2. Click image block to edit
3. Paste image URL
4. Add alt text

### Making Content SEO-Friendly
1. Go to SEO Tab
2. Add primary keyword in first paragraph of content
3. Meta title and description must contain keyword
4. Use heading hierarchy properly
5. Add 3-5 tags

### Creating Related Posts
1. Edit blog A and Blog B
2. Get the ID from browser DevTools or admin
3. In relatedPostIds field, add IDs (if editable)
4. Or simply categorize similar blogs in the same category

## Troubleshooting

### Blog Not Published
**Problem**: Blog not showing on `/blog`
**Solution**: Check Settings Tab → Is "Publish" toggled? Check date isn't in future.

### Image Not Showing
**Problem**: Broken image in blog
**Solution**: 
- Check URL is correct (hover to verify)
- Use absolute URL (https://...)
- Verify image file exists
- Check alt text (required)

### Meta Tags Not Working
**Problem**: Wrong info in Google search results
**Solution**:
- Go to SEO Tab
- Verify meta title (50-60 chars)
- Verify meta description (150-160 chars)
- Re-save blog
- Wait 48 hours for Google to re-crawl

### Table of Contents Empty
**Problem**: No TOC showing on blog
**Solution**: Add H2 or H3 headings in content. TOC auto-generates from headings.

## Next Steps

1. **Create 3-5 blog posts** on topics relevant to your audience
2. **Add to Footer**: Link `/blog` in footer navigation
3. **Setup Newsletter**: Integrate with email service
4. **Monitor Metrics**: Track views in admin panel
5. **Plan Content Calendar**: Decide posting schedule
6. **Setup SEO Monitoring**: Use Google Search Console
7. **Enable Analytics**: Add Google Analytics tracking

## Support Resources

- **Full Documentation**: See `BLOG_DOCUMENTATION.md`
- **Code Comments**: Check component files for JSDoc
- **Sample Blog**: Use sample blog as reference
- **Google Search Console**: Monitor blog search performance

---

**Ready to create amazing blog content!** 🚀
