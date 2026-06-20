"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Car, Home, CheckCircle2 } from "lucide-react";

const products = [
  {
    icon: Briefcase,
    title: "Bag Fabric Solutions",
    subtitle: "Durable & High-Performance",
    gradient: "linear-gradient(145deg, #1e3a5f 0%, #1a2e4a 50%, #0f1d30 100%)",
    accentColor: "#3b82f6",
    accentLight: "rgba(59,130,246,0.15)",
    types: [
      "School Bags",
      "Office Bags",
      "Travel Bags",
      "Industrial Bags",
      "Promotional Bags",
    ],
    features: [
      "Water Resistant Fabrics",
      "Ripstop Fabrics",
      "Coated Fabrics",
      "High GSM Materials",
      "Superior Strength",
    ],
  },
  {
    icon: Car,
    title: "Automotive Seat Cover Fabrics",
    subtitle: "Premium OEM & Aftermarket",
    gradient: "linear-gradient(145deg, #292524 0%, #1C1917 50%, #0C0A09 100%)",
    accentColor: "#d97706",
    accentLight: "rgba(217,119,6,0.15)",
    types: ["Cars", "Buses", "Trucks", "Commercial Vehicles"],
    features: [
      "Excellent Color Fastness",
      "Comfortable Texture",
      "High Durability",
      "Premium Finish",
      "OEM & Aftermarket Ready",
    ],
  },
  {
    icon: Home,
    title: "Furnishing & Interior Fabrics",
    subtitle: "Elegant & Long-lasting",
    gradient: "linear-gradient(145deg, #3d2a1e 0%, #2d1e14 50%, #1e140d 100%)",
    accentColor: "#a16207",
    accentLight: "rgba(161,98,7,0.15)",
    types: [
      "Curtains",
      "Sofa Covers",
      "Cushions",
      "Upholstery",
      "Interior Decoration",
    ],
    features: [
      "Modern & Traditional Designs",
      "Long-lasting Color Retention",
      "Soft Feel",
      "Premium Appearance",
      "Custom Textures Available",
    ],
  },
];

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" as const },
    },
  };
}

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
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
            What We Supply
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 mt-3">
            Our Product Range
          </h2>
          <div className="h-0.5 w-16 bg-amber-700 mx-auto mt-4" />
          <p className="text-stone-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            High-performance fabric solutions engineered for three distinct industries — each with specialized characteristics to meet exact requirements.
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                className="group rounded-2xl overflow-hidden cursor-default"
                style={{ background: product.gradient }}
                variants={fadeUp(0.1 * i + 0.15)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Card header */}
                <div className="p-7 pb-0">
                  {/* Weave texture */}
                  <div className="absolute inset-0 weave-pattern opacity-30 pointer-events-none rounded-2xl" />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: product.accentLight }}
                  >
                    <Icon
                      size={22}
                      style={{ color: product.accentColor }}
                    />
                  </div>

                  <span
                    className="text-xs tracking-[0.3em] uppercase font-medium"
                    style={{ color: product.accentColor }}
                  >
                    {product.subtitle}
                  </span>
                  <h3 className="font-display text-white text-2xl lg:text-3xl font-semibold mt-2 mb-4 leading-tight">
                    {product.title}
                  </h3>

                  {/* Type tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.types.map((type) => (
                      <span
                        key={type}
                        className="text-[11px] px-2.5 py-1 rounded-full border text-stone-300"
                        style={{ borderColor: "rgba(255,255,255,0.12)" }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="mx-7 h-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />

                {/* Features */}
                <div className="p-7 pt-5">
                  <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2.5 text-stone-300 text-sm"
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color: product.accentColor, flexShrink: 0 }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom hover bar */}
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: product.accentColor }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
