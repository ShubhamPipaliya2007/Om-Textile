"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Fabric Gallery", href: "#fabrics" },
  { label: "Catalogs", href: "#catalogs" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Working Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const products = [
  "Bag Fabrics",
  "Automotive Seat Cover Fabrics",
  "Furnishing & Interior Fabrics",
  "Ripstop Fabrics",
  "Water Resistant Fabrics",
  "Coated Fabrics",
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1C1917 0%, #0C0A09 100%)",
      }}
    >
      {/* Texture */}
      <div className="absolute inset-0 weave-pattern opacity-15" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(161,98,7,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top */}
        <div className="py-14 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <p className="font-display text-2xl font-semibold text-white tracking-widest">
                OM TEXTILES
              </p>
              <p className="text-amber-600 text-[10px] tracking-[0.35em] uppercase mt-0.5">
                Premium Fabric Solutions
              </p>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              Leading textile company based in Surat, India. Specializing in premium fabrics for bags, automotive, and furnishing industries since 2018.
            </p>
            <div className="flex flex-col gap-1.5 text-stone-500 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Est. January 15, 2018</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>GST Registered · Surat, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-stone-700 group-hover:text-amber-700 transition-colors">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-stone-400 text-sm flex items-center gap-1.5">
                    <span className="text-stone-700">›</span>
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-stone-400 text-xs leading-relaxed">
                  10/B, New Dwarkesh Industry, Gandhi Kutir,
                  Near Navjivan Circle, Udhana Magdalla Road,
                  Surat – 395017, Gujarat, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-amber-600 flex-shrink-0" />
                <a
                  href="tel:+917802050080"
                  className="text-stone-400 hover:text-amber-400 text-xs transition-colors"
                >
                  +91 78020 50080
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-amber-600 flex-shrink-0" />
                <a
                  href="mailto:omtextiles.ot@gmail.com"
                  className="text-stone-400 hover:text-amber-400 text-xs transition-colors break-all"
                >
                  omtextiles.ot@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-stone-400 text-xs">
                  Mon – Sat
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917802050080"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-700/20 border border-green-700/30 text-green-400 text-xs font-medium hover:bg-green-700/30 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} Om Textiles. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Quality · Innovation · Reliability · Trust
          </p>
        </div>
      </div>
    </footer>
  );
}
