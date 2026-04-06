import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import IndustryDetailPage from "@/app/industries/[slug]/page";
import IndustriesPage from "@/app/industries/page";
import MOQPage from "@/app/moq/page";
import Home from "@/app/page";
import PrivacyPage from "@/app/privacy/page";
import FAQsPage from "@/app/faqs/page";
import ProductDetailPage from "@/app/products/[slug]/page";
import ProductsPage from "@/app/products/page";
import QuotePage from "@/app/quote/page";
import SustainabilityPage from "@/app/sustainability/page";
import TermsPage from "@/app/terms/page";
import BlogPage from "@/app/blog/page";
import BlogPostPage from "@/app/blog/[slug]/page";
import AdminBlogPage from "@/app/admin/blog/page";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavigationWrapper } from "@/components/navigation-wrapper";
import { ScrollToTop } from "@/components/scroll-to-top";

function App() {
  return (
    <NavigationWrapper>
      <ScrollToTop />
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </NavigationWrapper>
  );
}

export default App;
