"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Fabrics", href: "#fabrics" },
  { label: "Catalogs", href: "#catalogs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex flex-col leading-none group">
              <span
                className={`font-display text-2xl lg:text-3xl font-semibold tracking-widest transition-colors ${
                  scrolled ? "text-stone-900" : "text-white"
                }`}
              >
                OM TEXTILES
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                  scrolled ? "text-amber-700" : "text-amber-300"
                }`}
              >
                Premium Fabric Solutions
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    scrolled
                      ? "text-stone-700 hover:text-amber-700"
                      : "text-white/90 hover:text-amber-300"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-5 py-2 bg-amber-700 text-white text-sm font-medium tracking-wide rounded-full hover:bg-amber-800 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled
                  ? "text-stone-700 hover:bg-stone-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col pt-20 pb-8 px-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="mb-8">
                <span className="font-display text-xl font-semibold text-stone-900 tracking-widest">
                  OM TEXTILES
                </span>
                <div className="h-px bg-amber-700 mt-3 w-12" />
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="py-3 px-2 text-stone-700 font-medium hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors text-base"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-stone-100">
                <a
                  href="tel:+917802050080"
                  className="flex items-center gap-2 text-sm text-stone-600"
                >
                  <span className="text-amber-700 font-medium">
                    +91 78020 50080
                  </span>
                </a>
                <p className="text-xs text-stone-400 mt-1">
                  Mon–Sat · 9 AM – 7 PM
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
