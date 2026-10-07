import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/seo-head";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Page Not Found | Axis Packaging"
        description="The page you requested could not be found on Axis Packaging."
        path="/404"
        noindex
      />
      <Header />
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          This page does not exist or may have moved. Explore our custom packaging products or request a quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">Go to Homepage</Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">Browse Products</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
