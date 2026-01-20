"use client";

import { COMPANY_INFO } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[var(--axis-dark-blue)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/logo.png"
                alt="Axis Packaging Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
                <p className="text-blue-100 text-sm">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-blue-100">
              Leading provider of custom packaging solutions including boxes, retail packaging, and
              sustainable packaging options.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[var(--axis-orange)]" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[var(--axis-orange)]" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[var(--axis-orange)]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/14YENMTyjLk/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="text-blue-100 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/theaxispackaging/?utm_source=qr&igsh=c3BxM3BkN2t3Zmo4#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-blue-100 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/the-axis-packaging/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="text-blue-100 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-center text-blue-100 text-sm">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <span>
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline">•</span>
            <div className="space-x-4">
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
