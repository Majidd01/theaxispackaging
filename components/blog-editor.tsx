import React, { useState } from "react";
import { Blog, BlogFormData, BlogContentBlock, BlogFAQ, BLOG_CATEGORIES } from "@/lib/blog-types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, Edit, Trash2, Eye, EyeOff, ChevronDown } from "lucide-react";
// Blogs are now managed via JSON file: /public/blogs-data/blogs.json
// See BLOG_MANAGEMENT_GUIDE.md for how to add/edit blogs

interface BlogEditorProps {
  initialBlog?: Blog;
  onSave?: (blog: Blog) => void;
  onClose?: () => void;
}

export const BlogEditor: React.FC<BlogEditorProps> = ({
  initialBlog,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<BlogFormData>(
    initialBlog
      ? {
          title: initialBlog.title,
          slug: initialBlog.slug,
          excerpt: initialBlog.excerpt,
          content: initialBlog.content,
          featuredImage: initialBlog.featuredImage,
          featuredImageAlt: initialBlog.featuredImageAlt,
          author: initialBlog.author,
          publishedAt: initialBlog.publishedAt,
          readingTimeMinutes: initialBlog.readingTimeMinutes,
          category: initialBlog.category,
          tags: initialBlog.tags,
          meta: initialBlog.meta,
          cta: initialBlog.cta,
          faqs: initialBlog.faqs,
          relatedPostIds: initialBlog.relatedPostIds,
          isPublished: initialBlog.isPublished,
          tableOfContents: initialBlog.tableOfContents,
          views: initialBlog.views,
        }
      : {
          title: "",
          slug: "",
          excerpt: "",
          content: [],
          featuredImage: "",
          featuredImageAlt: "",
          author: "Axis Packaging Team",
          publishedAt: new Date().toISOString(),
          readingTimeMinutes: 5,
          category: "Packaging Design",
          tags: [],
          meta: {
            metaTitle: "",
            metaDescription: "",
          },
          cta: {
            title: "Ready to Get Started?",
            description: "Contact our team today.",
            buttonText: "Get in Touch",
            buttonLink: "/contact",
            features: [],
          },
          faqs: [],
          relatedPostIds: [],
          isPublished: false,
          tableOfContents: [],
          views: 0,
        }
  );

  const [contentBlocks, setContentBlocks] = useState<BlogContentBlock[]>(
    initialBlog?.content || []
  );
  const [faqs, setFaqs] = useState<BlogFAQ[]>(initialBlog?.faqs || []);
  const [tags, setTags] = useState<string[]>(initialBlog?.tags || []);
  const [tagInput, setTagInput] = useState("");

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  const calculateReadingTime = (blocks: BlogContentBlock[]) => {
    let wordCount = 0;
    blocks.forEach((block) => {
      if (block.content) {
        wordCount += block.content.split(" ").length;
      }
      if (block.listItems) {
        block.listItems.forEach((item) => {
          wordCount += item.split(" ").length;
        });
      }
    });
    return Math.ceil(wordCount / 200); // Average reading speed
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleAddContentBlock = (type: BlogContentBlock["type"]) => {
    const newBlock: BlogContentBlock = {
      id: `block-${Date.now()}`,
      type,
      content: "",
      listItems: type === "bullet-list" ? [""] : undefined,
    };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const handleUpdateContentBlock = (id: string, updates: Partial<BlogContentBlock>) => {
    setContentBlocks(
      contentBlocks.map((block) =>
        block.id === id ? { ...block, ...updates } : block
      )
    );
  };

  const handleDeleteContentBlock = (id: string) => {
    setContentBlocks(contentBlocks.filter((block) => block.id !== id));
  };

  const handleAddFAQ = () => {
    setFaqs([
      ...faqs,
      {
        id: `faq-${Date.now()}`,
        question: "",
        answer: "",
      },
    ]);
  };

  const handleUpdateFAQ = (id: string, question: string, answer: string) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, question, answer } : faq
      )
    );
  };

  const handleDeleteFAQ = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSave = () => {
    if (!formData.slug.trim()) {
      alert("Please enter a slug");
      return;
    }

    alert("Blog management is now done via JSON file.\n\nTo add or edit blogs:\n1. Open /public/blogs-data/blogs.json\n2. Add or edit blog entries\n3. Refresh the page\n\nSee BLOG_MANAGEMENT_GUIDE.md for details.");
    
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto bg-gray-900 text-white p-4 rounded">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          <TabsTrigger value="content" className="text-gray-300 data-[state=active]:text-white">Content</TabsTrigger>
          <TabsTrigger value="meta" className="text-gray-300 data-[state=active]:text-white">SEO</TabsTrigger>
          <TabsTrigger value="faqs" className="text-gray-300 data-[state=active]:text-white">FAQs</TabsTrigger>
          <TabsTrigger value="settings" className="text-gray-300 data-[state=active]:text-white">Settings</TabsTrigger>
        </TabsList>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-white">Title</label>
            <Input
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Blog post title"
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Slug</label>
            <Input
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="blog-post-slug"
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Excerpt</label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              placeholder="Brief description for preview"
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Featured Image URL</label>
            <Input
              value={formData.featuredImage}
              onChange={(e) =>
                setFormData({ ...formData, featuredImage: e.target.value })
              }
              placeholder="https://..."
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Or Upload Featured Image</label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData({
                      ...formData,
                      featuredImage: reader.result as string,
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500 file:bg-blue-600 file:text-white file:border-0 file:mr-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Featured Image Alt Text</label>
            <Input
              value={formData.featuredImageAlt}
              onChange={(e) =>
                setFormData({ ...formData, featuredImageAlt: e.target.value })
              }
              placeholder="Image description for SEO"
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          {/* Content Blocks */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Content Blocks</h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddContentBlock("heading2")}
                >
                  <Plus size={14} /> H2
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddContentBlock("paragraph")}
                >
                  <Plus size={14} /> Text
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddContentBlock("bullet-list")}
                >
                  <Plus size={14} /> List
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddContentBlock("image")}
                >
                  <Plus size={14} /> Image
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {contentBlocks.map((block, index) => (
                <Card key={block.id}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600">
                        {block.type.toUpperCase()} #{index + 1}
                      </span>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteContentBlock(block.id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>

                    {(block.type === "heading2" ||
                      block.type === "heading3" ||
                      block.type === "paragraph" ||
                      block.type === "quote") && (
                      <Textarea
                        value={block.content || ""}
                        onChange={(e) =>
                          handleUpdateContentBlock(block.id, {
                            content: e.target.value,
                          })
                        }
                        placeholder="Content"
                        className="text-sm !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
                      />
                    )}

                    {block.type === "bullet-list" && (
                      <div className="space-y-2">
                        {block.listItems?.map((item, itemIndex) => (
                          <Input
                            key={itemIndex}
                            value={item}
                            onChange={(e) => {
                              const updated = [...(block.listItems || [])];
                              updated[itemIndex] = e.target.value;
                              handleUpdateContentBlock(block.id, {
                                listItems: updated,
                              });
                            }}
                            placeholder={`List item ${itemIndex + 1}`}
                            className="!bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
                          />
                        ))}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            handleUpdateContentBlock(block.id, {
                              listItems: [...(block.listItems || []), ""],
                            });
                          }}
                        >
                          <Plus size={14} /> Add Item
                        </Button>
                      </div>
                    )}

                    {block.type === "image" && (
                      <div className="space-y-2">
                        <Input
                          value={block.imageUrl || ""}
                          onChange={(e) =>
                            handleUpdateContentBlock(block.id, {
                              imageUrl: e.target.value,
                            })
                          }
                          placeholder="Image URL"
                          className="!bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
                        />
                        <Input
                          value={block.imageAlt || ""}
                          onChange={(e) =>
                            handleUpdateContentBlock(block.id, {
                              imageAlt: e.target.value,
                            })
                          }
                          placeholder="Alt text"
                          className="!bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* SEO Tab */}
        <TabsContent value="meta" className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-white">Meta Title</label>
            <Input
              value={formData.meta.metaTitle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  meta: { ...formData.meta, metaTitle: e.target.value },
                })
              }
              placeholder="SEO title (50-60 chars)"
              maxLength={60}
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
            <p className="text-xs text-gray-400 mt-1">
              {formData.meta.metaTitle.length}/60
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Meta Description</label>
            <Textarea
              value={formData.meta.metaDescription}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  meta: { ...formData.meta, metaDescription: e.target.value },
                })
              }
              placeholder="SEO description (150-160 chars)"
              maxLength={160}
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
            <p className="text-xs text-gray-400 mt-1">
              {formData.meta.metaDescription.length}/160
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold text-white">OG Image URL</label>
            <Input
              value={formData.meta.ogImage || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  meta: { ...formData.meta, ogImage: e.target.value },
                })
              }
              placeholder="https://..."
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Tags</label>
            <div className="flex gap-2 mt-1">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                placeholder="Add a tag and press Enter"
                className="!bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
              />
              <Button onClick={handleAddTag} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-700 text-white text-xs px-2 py-1 rounded flex items-center gap-2 hover:bg-blue-600 cursor-pointer"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-gray-300"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* FAQs Tab */}
        <TabsContent value="faqs" className="space-y-4">
          <Button onClick={handleAddFAQ} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Plus size={14} /> Add FAQ
          </Button>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={faq.id} className="border-gray-700 bg-gray-800">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-white">FAQ #{index + 1}</h4>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteFAQ(faq.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={faq.question}
                      onChange={(e) =>
                        handleUpdateFAQ(faq.id, e.target.value, faq.answer)
                      }
                      placeholder="Question"
                      className="!bg-gray-900 !border-gray-700 !text-white placeholder:!text-gray-500"
                    />
                    <Textarea
                      value={faq.answer}
                      onChange={(e) =>
                        handleUpdateFAQ(faq.id, faq.question, e.target.value)
                      }
                      placeholder="Answer"
                      className="!bg-gray-900 !border-gray-700 !text-white placeholder:!text-gray-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-white">Category</label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {BLOG_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.id} value={cat.name} className="text-white">
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Author</label>
            <Input
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              placeholder="Author name"
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white placeholder:!text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-white">Publish Date</label>
            <Input
              type="datetime-local"
              value={formData.publishedAt.slice(0, 16)}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  publishedAt: new Date(e.target.value).toISOString(),
                })
              }
              className="mt-1 !bg-gray-800 !border-gray-700 !text-white"
            />
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-700 rounded">
            <span className="font-semibold text-white">
              {formData.isPublished ? "Published" : "Draft"}
            </span>
            <Button
              variant={formData.isPublished ? "default" : "outline"}
              onClick={() =>
                setFormData({
                  ...formData,
                  isPublished: !formData.isPublished,
                })
              }
              className={formData.isPublished ? "bg-green-600 hover:bg-green-700" : "border-gray-600 text-white hover:bg-gray-700"}
            >
              {formData.isPublished ? <Eye size={14} /> : <EyeOff size={14} />}
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex gap-2 pt-4 border-t border-gray-700 sticky bottom-0 bg-gray-900">
        <Button
          onClick={() =>
            setFormData({
              ...formData,
              isPublished: !formData.isPublished,
            })
          }
          variant={formData.isPublished ? "default" : "outline"}
          className={formData.isPublished ? "bg-green-600 hover:bg-green-700" : "border-gray-600 text-white hover:bg-gray-800"}
        >
          {formData.isPublished ? <Eye size={14} className="mr-2" /> : <EyeOff size={14} className="mr-2" />}
          {formData.isPublished ? "Published" : "Draft"}
        </Button>
        
        <Button onClick={handleSave} className="flex-1 bg-blue-600 hover:bg-blue-700">
          {initialBlog ? "Update Blog" : "Create Blog"}
        </Button>
        {onClose && (
          <Button variant="outline" onClick={onClose} className="border-gray-600 text-white hover:bg-gray-800">
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
};
