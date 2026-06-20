"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  Truck,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "End-to-End Quality Control",
    description:
      "Every batch undergoes strict quality testing for GSM, color fastness, durability, flexibility, and strength — no compromise.",
  },
  {
    icon: TrendingUp,
    title: "Industry Expertise",
    description:
      "7+ years of dedicated experience serving Bag, Automotive, and Furnishing industries with deep domain knowledge.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Regular development of new textures, colors, and fabric designs to meet evolving market demands and trends.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "Consistent production and timely delivery to keep your business running — no delays, no surprises.",
  },
  {
    icon: Heart,
    title: "Customer-Centric Approach",
    description:
      "Long-term partnerships built on trust, quality, and professional service. Your growth is our success.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1C1917 0%, #292524 50%, #1C1917 100%)",
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 weave-pattern opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(161,98,7,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <span className="text-amber-500 text-xs tracking-[0.35em] uppercase font-medium">
            Our Differentiators
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Why Choose Om Textiles?
          </h2>
          <div className="h-0.5 w-16 bg-amber-600 mx-auto mt-4" />
          <p className="text-stone-400 mt-5 max-w-xl mx-auto leading-relaxed">
            More than a supplier — a long-term fabric partner committed to your business success.
          </p>
        </motion.div>

        {/* Cards grid — bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className={`group p-7 rounded-2xl border border-white/8 backdrop-blur-sm hover:border-amber-700/40 transition-all duration-400 cursor-default ${
                  i === 4
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
                style={{ background: "rgba(255,255,255,0.03)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1 + 0.15,
                  ease: "easeOut" as const,
                }}
                whileHover={{
                  background: "rgba(161,98,7,0.08)",
                  y: -4,
                  transition: { duration: 0.25 },
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-700/20 border border-amber-700/30 flex items-center justify-center mb-5 group-hover:bg-amber-700/30 transition-colors">
                  <Icon size={20} className="text-amber-500 group-hover:scale-110 transition-transform" />
                </div>

                {/* Number */}
                <div className="text-[10px] text-stone-600 tracking-widest uppercase mb-2 font-medium">
                  0{i + 1}
                </div>

                <h3 className="font-display text-white text-xl lg:text-2xl font-semibold mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <motion.div
            className="p-7 rounded-2xl border border-amber-700/20 bg-amber-900/10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <h3 className="font-display text-amber-400 text-2xl font-semibold mb-3">
              Our Vision
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              To become one of the most trusted textile brands recognized for quality, professionalism, innovation, and reliable fabric solutions across multiple industries worldwide.
            </p>
          </motion.div>

          <motion.div
            className="p-7 rounded-2xl border border-white/8 bg-white/3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <h3 className="font-display text-white text-2xl font-semibold mb-3">
              Our Mission
            </h3>
            <ul className="space-y-2">
              {[
                "Deliver high-quality fabrics at competitive prices",
                "Provide customized textile solutions for every customer",
                "Build long-term business relationships",
                "Establish new standards of quality and service",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-stone-400 text-sm">
                  <span className="text-amber-600 mt-1 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
