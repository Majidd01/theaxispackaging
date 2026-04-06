import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface BlogCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  features: string[];
}

export const BlogCTA: React.FC<BlogCTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  features,
}) => {
  return (
    <section className="my-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link to={buttonLink}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};
