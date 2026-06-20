"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Zap, Shield, Layers } from "lucide-react";

const swatches = [
  {
    name: "Ripstop Nylon",
    category: "Bag Fabric",
    gsm: "200–350 GSM",
    color: "linear-gradient(135deg, #1e3a5f 0%, #2d4f7f 50%, #1a2e4a 100%)",
    pattern: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px)",
    tag: "Water Resistant",
    tagColor: "#3b82f6",
    icon: Droplets,
  },
  {
    name: "Oxford Weave",
    category: "Bag Fabric",
    gsm: "300–600 GSM",
    color: "linear-gradient(135deg, #1e4620 0%, #2d6630 50%, #152e16 100%)",
    pattern: "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px)",
    tag: "High Strength",
    tagColor: "#22c55e",
    icon: Zap,
  },
  {
    name: "Automotive Velvet",
    category: "Seat Cover",
    gsm: "400–500 GSM",
    color: "linear-gradient(135deg, #2d1e14 0%, #4a2e1a 50%, #1e1410 100%)",
    pattern: "repeating-linear-gradient(60deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 8px)",
    tag: "Color Fast",
    tagColor: "#f59e0b",
    icon: Shield,
  },
  {
    name: "Jacquard Weave",
    category: "Furnishing",
    gsm: "250–400 GSM",
    color: "linear-gradient(135deg, #3d2a4a 0%, #5c3f6e 50%, #2a1c33 100%)",
    pattern: "repeating-linear-gradient(30deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px), repeating-linear-gradient(-30deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px)",
    tag: "Premium Design",
    tagColor: "#a78bfa",
    icon: Layers,
  },
  {
    name: "PU Coated Canvas",
    category: "Bag Fabric",
    gsm: "450–700 GSM",
    color: "linear-gradient(135deg, #292524 0%, #3d3835 50%, #1C1917 100%)",
    pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0px, transparent 4px) 0 0 / 12px 12px",
    tag: "Industrial Grade",
    tagColor: "#d97706",
    icon: Shield,
  },
  {
    name: "Linen Blend",
    category: "Furnishing",
    gsm: "180–280 GSM",
    color: "linear-gradient(135deg, #4a3728 0%, #6b5040 50%, #3a2a1c 100%)",
    pattern: "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 8px)",
    tag: "Natural Feel",
    tagColor: "#d97706",
    icon: Layers,
  },
];

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay, ease: "easeOut" as const },
    },
  };
}

export default function FabricSwatches() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="fabrics" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-amber-700 text-xs tracking-[0.35em] uppercase font-medium">
            Material Library
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 mt-3">
            Our Fabrics
          </h2>
          <div className="h-0.5 w-16 bg-amber-700 mx-auto mt-4" />
          <p className="text-stone-600 mt-5 max-w-xl mx-auto leading-relaxed">
            A curated selection of our fabric types — each engineered for specific performance requirements across industries.
          </p>
        </motion.div>

        {/* Swatches grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {swatches.map((swatch, i) => {
            const Icon = swatch.icon;
            return (
              <motion.div
                key={swatch.name}
                className="group rounded-2xl overflow-hidden border border-stone-100 hover:border-transparent hover:shadow-xl transition-all duration-500"
                variants={fadeUp(i * 0.08 + 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                {/* Fabric visual */}
                <div
                  className="h-40 relative overflow-hidden"
                  style={{ background: swatch.color }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: swatch.pattern }}
                  />
                  {/* Sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5"
                      style={{
                        background: `${swatch.tagColor}22`,
                        color: swatch.tagColor,
                        border: `1px solid ${swatch.tagColor}44`,
                      }}
                    >
                      <Icon size={10} />
                      {swatch.tag}
                    </span>
                  </div>

                  {/* GSM badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full tracking-wider">
                      {swatch.gsm}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-stone-900 text-base leading-tight">
                        {swatch.name}
                      </h3>
                      <p className="text-stone-400 text-xs mt-0.5 tracking-wide">
                        {swatch.category}
                      </p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0 rounded-full opacity-80"
                      style={{ background: swatch.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-12"
          variants={fadeUp(0.6)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-stone-500 text-sm">
            Available in custom colors, widths, and finishes.{" "}
            <a href="#contact" className="text-amber-700 font-medium hover:underline">
              Contact us for samples.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
