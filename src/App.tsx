import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { NavigationWrapper } from "@/components/navigation-wrapper";
import { ScrollToTop } from "@/components/scroll-to-top";
import Home from "@/app/page";

const AboutPage = lazy(() => import("@/app/about/page"));
const ContactPage = lazy(() => import("@/app/contact/page"));
const IndustryDetailPage = lazy(() => import("@/app/industries/[slug]/page"));
const IndustriesPage = lazy(() => import("@/app/industries/page"));
const MOQPage = lazy(() => import("@/app/moq/page"));
const PrivacyPage = lazy(() => import("@/app/privacy/page"));
const FAQsPage = lazy(() => import("@/app/faqs/page"));
const ProductDetailPage = lazy(() => import("@/app/products/[slug]/page"));
const ProductsPage = lazy(() => import("@/app/products/page"));
const QuotePage = lazy(() => import("@/app/quote/page"));
const SustainabilityPage = lazy(() => import("@/app/sustainability/page"));
const TermsPage = lazy(() => import("@/app/terms/page"));
const BlogPage = lazy(() => import("@/app/blog/page"));
const BlogPostPage = lazy(() => import("@/app/blog/[slug]/page"));
const AdminBlogPage = lazy(() => import("@/app/admin/blog/page"));
const NotFoundPage = lazy(() => import("@/app/not-found"));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center" aria-busy="true">
      <div className="w-10 h-10 border-4 border-[var(--axis-orange)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin/blog" element={<AdminBlogPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/moq" element={<MOQPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </NavigationWrapper>
  );
}

export default App;
