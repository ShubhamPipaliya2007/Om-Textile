"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const badges = ["Quality", "Innovation", "Reliability", "Trust"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 fabric-texture weave-pattern"
          style={{
            background:
              "linear-gradient(135deg, #1C1917 0%, #292524 40%, #1C1917 60%, #0C0A09 100%)",
          }}
        />
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(161,98,7,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Thread lines decoration */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(161,98,7,0.3) 0px, rgba(161,98,7,0.3) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(161,98,7,0.15) 0px, rgba(161,98,7,0.15) 1px, transparent 1px, transparent 120px)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        {/* Est. badge */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="h-px w-12 bg-amber-500/60" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">
            Established 2018 · Surat, India
          </span>
          <div className="h-px w-12 bg-amber-500/60" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-white mb-6 leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)", fontWeight: 600, letterSpacing: "-0.01em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" as const }}
        >
          <span className="block">OM</span>
          <span className="block text-amber-400">TEXTILES</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-stone-300 text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Premium Fabric Solutions for Global Industries
        </motion.p>

        {/* Quality badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {badges.map((badge, i) => (
            <span
              key={badge}
              className="px-4 py-1.5 border border-amber-600/40 text-amber-300 text-xs tracking-[0.25em] uppercase rounded-full bg-amber-900/20 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <a
            href="#products"
            className="px-8 py-3.5 bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Products
          </a>
          <a
            href="#catalogs"
            className="px-8 py-3.5 border border-white/30 hover:border-amber-400 text-white hover:text-amber-300 text-sm font-medium tracking-wider rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            View Catalogs
          </a>
        </motion.div>

        {/* Industry tags */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 text-stone-500 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span>Bag Manufacturing</span>
          <span className="text-amber-800/60">•</span>
          <span>Automotive Seat Covers</span>
          <span className="text-amber-800/60">•</span>
          <span>Furnishing & Interior</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <span className="text-stone-500 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}
        >
          <ChevronDown size={16} className="text-amber-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
