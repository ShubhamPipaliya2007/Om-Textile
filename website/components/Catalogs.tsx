"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, BookOpen } from "lucide-react";

const catalogs = [
  {
    title: "Bag Fabric Catalog",
    subtitle: "School, Office, Travel & Industrial",
    description:
      "Complete range of bag fabrics — ripstop, oxford, coated, and high-GSM materials with specifications, color options, and technical data.",
    pages: "24 pages",
    gradient: "linear-gradient(145deg, #1e3a5f 0%, #1a2e4a 100%)",
    accentColor: "#3b82f6",
    pattern: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 8px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 8px)",
    file: "/catalogs/bag-fabric-catalog.pdf",
    featured: false,
  },
  {
    title: "Automotive Fabric Catalog",
    subtitle: "Cars, Buses, Trucks & Commercial",
    description:
      "Premium automotive seat cover fabrics with color fastness data, durability ratings, OEM specifications, and finish options.",
    pages: "20 pages",
    gradient: "linear-gradient(145deg, #1C1917 0%, #292524 100%)",
    accentColor: "#d97706",
    pattern: "repeating-linear-gradient(60deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px)",
    file: "/catalogs/automotive-fabric-catalog.pdf",
    featured: true,
  },
  {
    title: "Furnishing Fabric Catalog",
    subtitle: "Curtains, Upholstery & Décor",
    description:
      "Elegant furnishing fabrics with modern and traditional designs, weave patterns, texture swatches, and color retention data.",
    pages: "28 pages",
    gradient: "linear-gradient(145deg, #3d2a1e 0%, #2d1e14 100%)",
    accentColor: "#a16207",
    pattern: "repeating-linear-gradient(30deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px), repeating-linear-gradient(-30deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px)",
    file: "/catalogs/furnishing-fabric-catalog.pdf",
    featured: false,
  },
  {
    title: "Complete Product Catalog",
    subtitle: "All Fabric Solutions — Full Range",
    description:
      "Our comprehensive catalog featuring the entire Om Textiles product range across all three industries, including pricing tiers and MOQ details.",
    pages: "68 pages",
    gradient: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accentColor: "#c084fc",
    pattern: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px) 0 0 / 16px 16px",
    file: "/catalogs/complete-product-catalog.pdf",
    featured: false,
  },
];

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: "easeOut" as const },
    },
  };
}

export default function Catalogs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="catalogs"
      ref={ref}
      className="py-24 lg:py-32 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-amber-700 text-xs tracking-[0.35em] uppercase font-medium">
            Download Resources
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 mt-3">
            Product Catalogs
          </h2>
          <div className="h-0.5 w-16 bg-amber-700 mx-auto mt-4" />
          <p className="text-stone-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            Download our detailed fabric catalogs to explore the complete range, specifications, and ordering information. Available in PDF format.
          </p>
        </motion.div>

        {/* Catalog grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {catalogs.map((catalog, i) => (
            <motion.div
              key={catalog.title}
              className={`group relative flex flex-col rounded-2xl overflow-hidden ${
                catalog.featured
                  ? "ring-2 ring-amber-600 ring-offset-2 ring-offset-stone-50"
                  : ""
              }`}
              style={{ background: catalog.gradient }}
              variants={fadeUp(i * 0.1 + 0.15)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {catalog.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-full tracking-wider uppercase font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Visual header */}
              <div
                className="h-36 relative overflow-hidden flex items-center justify-center"
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: catalog.pattern }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

                {/* Catalog icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                    style={{ background: `${catalog.accentColor}22`, border: `1px solid ${catalog.accentColor}44` }}
                  >
                    <BookOpen size={24} style={{ color: catalog.accentColor }} />
                  </div>
                  <span
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: catalog.accentColor }}
                  >
                    {catalog.pages}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mx-5 h-px"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: catalog.accentColor }}
                >
                  {catalog.subtitle}
                </span>
                <h3 className="font-display text-white text-xl font-semibold leading-tight mb-3">
                  {catalog.title}
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed flex-1 mb-5">
                  {catalog.description}
                </p>

                {/* Download button */}
                <a
                  href={catalog.file}
                  download
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                  style={{
                    background: `${catalog.accentColor}22`,
                    border: `1px solid ${catalog.accentColor}44`,
                    color: catalog.accentColor,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = catalog.accentColor;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${catalog.accentColor}22`;
                    (e.currentTarget as HTMLElement).style.color = catalog.accentColor;
                  }}
                >
                  <Download size={14} className="transition-transform group-hover/btn:-translate-y-0.5" />
                  Download PDF
                </a>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: catalog.accentColor }}
              />
            </motion.div>
          ))}
        </div>

        {/* Request note */}
        <motion.div
          className="mt-12 text-center p-6 rounded-2xl bg-white border border-stone-100"
          variants={fadeUp(0.55)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FileText size={20} className="text-amber-700 mx-auto mb-3" />
          <p className="text-stone-700 font-medium mb-1">
            Need a custom catalog or sample swatches?
          </p>
          <p className="text-stone-500 text-sm">
            Contact us directly and we&apos;ll prepare tailored fabric samples for your specific requirements.{" "}
            <a
              href="#contact"
              className="text-amber-700 font-medium hover:underline"
            >
              Request samples →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
