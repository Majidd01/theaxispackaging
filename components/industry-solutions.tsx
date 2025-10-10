import { Card, CardContent } from "@/components/ui/card";
import { INDUSTRIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function IndustrySolutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--axis-dark-gray)] mb-4">
            Shop packaging solutions by industry needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect packaging solutions tailored to your industry niche.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.slice(0, 8).map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`} className="group">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{industry.icon}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[var(--axis-orange)] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var( --axis-dark-gray)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-32 md:h-56 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/industries">
            <button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Industries
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
