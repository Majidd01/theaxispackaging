"use client";

import { Button } from "@/components/ui/button";
import { COMPANY_INFO, INDUSTRIES, NAVIGATION_ITEMS, PRODUCT_CATEGORIES } from "@/lib/constants";
import { ChevronDown, Clock, Mail, Menu, Phone, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FEATURED_PRODUCT_SLUGS = [
  "folding-carton-boxes",
  "corrugated-shipping",
  "mailer-boxes",
  "pizza-boxes",
  "greaseproof-paper",
  "kraft-boxes",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productQuery, setProductQuery] = useState("");

  const featuredProducts = FEATURED_PRODUCT_SLUGS.map((slug) =>
    PRODUCT_CATEGORIES.find((product) => product.slug === slug)
  ).filter((product): product is (typeof PRODUCT_CATEGORIES)[number] => Boolean(product));
  const normalisedQuery = productQuery.trim().toLowerCase();
  const productMatches = normalisedQuery
    ? PRODUCT_CATEGORIES.filter((product) => product.name.toLowerCase().includes(normalisedQuery)).slice(0, 8)
    : [];

  // Get first 12 industries for dropdown
  const industriesForDropdown = INDUSTRIES.slice(0, 12);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-[var(--axis-orange)] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline">
                {COMPANY_INFO.phoneDisplay || "+44 7398 429456"}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@theaxispackaging.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/14YENMTyjLk/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <span className="opacity-70" aria-hidden="true" title="Twitter / X profile coming soon">
                <Twitter className="h-4 w-4" />
              </span>
              <a href="https://www.instagram.com/theaxispackaging/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/the-axis-packaging/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-20 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/assets/logo.png"
                alt="Axis Packaging Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover group-hover:scale-105 transition-transform duration-200"
                style={{
                  height: "120px",
                  width: "120px",
                  transform: "scale(1.3)"
                }}
              />

            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 bg-clip-text -">
                {COMPANY_INFO.name}
              </span>
              <p className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              // Special handling for Products and Industries with dropdowns
              if (item.name === "Products") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    {/* Products Dropdown - Enhanced Mega Menu */}
                    <div className="absolute top-full left-0 mt-2 w-[750px] bg-white border-2 border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                      <div className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-blue-600 p-4">
                        <h3 className="text-xl font-bold text-white">
                          Our Products
                        </h3>
                        <p className="text-sm text-blue-100 mt-1">Explore our comprehensive packaging solutions</p>
                      </div>
                      <div className="p-6">
                        <label className="block text-xs font-medium text-gray-500 mb-2" htmlFor="product-menu-search">
                          Find a product
                        </label>
                        <input
                          id="product-menu-search"
                          type="search"
                          value={productQuery}
                          onChange={(e) => setProductQuery(e.target.value)}
                          placeholder="Search the catalogue"
                          className="w-full mb-4 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                        />
                        {normalisedQuery ? (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {productMatches.length ? (
                              productMatches.map((product) => (
                                <Link
                                  key={product.slug}
                                  to={`/products/${product.slug}`}
                                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-orange-50 hover:text-[var(--axis-orange)]"
                                  onClick={() => setProductQuery("")}
                                >
                                  {product.name}
                                </Link>
                              ))
                            ) : (
                              <p className="col-span-2 text-sm text-gray-500">No matching product. Use the full catalogue.</p>
                            )}
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-4">
                            {featuredProducts.map((product) => (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className="group/item flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 transition-all duration-300 border border-transparent hover:border-orange-200 hover:shadow-md"
                              >
                                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 group-hover/item:scale-110 transition-transform duration-300">
                                  <img
                                    src={product.image || "/assets/placeholder.jpg"}
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg"; }}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="text-center">
                                  <h4 className="text-sm font-semibold text-gray-900 group-hover/item:text-[var(--axis-orange)] transition-colors">
                                    {product.name}
                                  </h4>
                                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <Link
                            to="/products"
                            className="inline-flex items-center gap-2 text-[var(--axis-orange)] hover:text-[var(--axis-orange)]/80 font-semibold text-sm group/link"
                          >
                            View all {PRODUCT_CATEGORIES.length} products
                            <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.name === "Industries") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    {/* Industries Dropdown - Enhanced Mega Menu */}
                    <div className="absolute top-full left-[-70px] mt-2 w-[750px] h-[520px] overflow-y-auto bg-white border-2 border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                      <div className="bg-gradient-to-r from-[var(--axis-orange)] to-orange-600 p-4 sticky top-0 z-10">
                        <h3 className="text-xl font-bold text-white">
                          Shop by Industry
                        </h3>
                        <p className="text-sm text-orange-100 mt-1">Find solutions tailored to your industry</p>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-3 gap-4">
                          {industriesForDropdown.map((industry) => (
                            <Link
                              key={industry.slug}
                              to={`/industries/${industry.slug}`}
                              className="group/item flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border border-transparent hover:border-blue-200 hover:shadow-md"
                            >
                              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 group-hover/item:scale-110 transition-transform duration-300">
                                <img
                                  src={industry.image || "/assets/placeholder.jpg"}
                                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg"; }}
                                  alt={industry.name}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl mb-2">{industry.icon}</div>
                                <h4 className="text-sm font-semibold text-gray-900 group-hover/item:text-[var(--axis-dark-blue)] transition-colors">
                                  {industry.name}
                                </h4>
                                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                  {industry.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <Link
                            to="/industries"
                            className="inline-flex items-center gap-2 text-[var(--axis-orange)] hover:text-[var(--axis-orange)]/80 font-semibold text-sm group/link"
                          >
                            View All Industries
                            <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular navigation items
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/quote">
              <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)] text-white px-6 py-2 rounded-lg">
                Get Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-sky-600 text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white px-6 py-2 rounded-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[var(--axis-orange)] font-medium py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/quote">
                  <Button
                    variant="outline"
                    className="border-[var(--axis-light-gray)] text-[var(--axis-light-gray)] bg-transparent w-full py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    className="bg-[var(--axis-secondary-blue)] hover:bg-[var(--axis-secondary-blue)]/90 text-white w-full py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
