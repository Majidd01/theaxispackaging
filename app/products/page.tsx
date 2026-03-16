import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCategories } from "@/components/product-categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const industrySlug = searchParams.get("industry");
  const selectedIndustry = industrySlug ? INDUSTRIES.find((i) => i.slug === industrySlug) : null;
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{selectedIndustry ? selectedIndustry.metaTitle : "Custom Packaging Solutions - Axis Packaging"}</title>
        <meta name="description" content={selectedIndustry ? selectedIndustry.metaDescription : "Explore our comprehensive range of premium packaging products designed to elevate your brand."} />
        <link rel="canonical" href={`https://theaxispackaging.com/products${industrySlug ? `?industry=${industrySlug}` : ""}`} />
      </Helmet>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-[var(--axis-orange)] text-white mb-4">
              {selectedIndustry ? `${selectedIndustry.name} Industry` : "Our Products"}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {selectedIndustry
                ? `${selectedIndustry.name} Packaging Solutions`
                : "Custom Packaging Solutions"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {selectedIndustry
                ? `Discover our specialized packaging solutions designed specifically for the ${selectedIndustry.name} industry. ${selectedIndustry.description}`
                : "Explore our comprehensive range of premium packaging products designed to elevate your brand and protect your products."}
            </p>
          </div>
        </section>
        <ProductCategories selectedIndustry={selectedIndustry} />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our packaging experts to discuss your specific needs and get a custom quote
              for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?from=products">
                <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white px-8 py-3">
                  Get Product Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/quote">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] px-8 py-3"
                >
                  Request Sample
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
