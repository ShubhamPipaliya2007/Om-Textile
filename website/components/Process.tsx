"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FlaskConical, Settings2, PackageCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Research & Requirement Analysis",
    description:
      "We start by understanding your market trends, business requirements, and specific fabric needs to propose the right solution.",
    color: "#3b82f6",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Material Sourcing & Testing",
    description:
      "Selection of premium raw materials followed by multi-stage quality inspection for GSM, colorfastness, durability, and strength.",
    color: "#d97706",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Fabric Processing & Finishing",
    description:
      "Precision processing, finishing, and packaging according to industry standards to ensure consistent quality in every batch.",
    color: "#a16207",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Dispatch & Customer Support",
    description:
      "Safe packaging, timely delivery, and continuous customer support — we stay with you even after the order ships.",
    color: "#22c55e",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <span className="text-amber-700 text-xs tracking-[0.35em] uppercase font-medium">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 mt-3">
            Our Working Process
          </h2>
          <div className="h-0.5 w-16 bg-amber-700 mx-auto mt-4" />
          <p className="text-stone-600 mt-5 max-w-xl mx-auto leading-relaxed">
            A streamlined, quality-driven process from understanding your needs to delivering fabric at your doorstep.
          </p>
        </motion.div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-stone-200 z-0">
            <motion.div
              className="h-full bg-amber-600 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" as const }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center text-center lg:items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15 + 0.2,
                    ease: "easeOut" as const,
                  }}
                >
                  {/* Mobile connector */}
                  {i > 0 && (
                    <div className="md:hidden w-px h-8 bg-stone-200 mb-0 -mt-0" />
                  )}

                  {/* Icon circle */}
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 border-2 bg-white z-10"
                    style={{ borderColor: step.color }}
                  >
                    <Icon size={20} style={{ color: step.color }} />

                    {/* Number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: step.color }}
                    >
                      <span className="text-[9px] text-white font-bold">
                        {step.number.replace("0", "")}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="max-w-[200px]">
                    <span
                      className="text-[10px] tracking-widest uppercase font-medium"
                      style={{ color: step.color }}
                    >
                      Step {step.number}
                    </span>
                    <h3 className="font-display text-stone-900 text-lg font-semibold mt-1 mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA block */}
        <motion.div
          className="mt-16 text-center p-8 lg:p-10 rounded-2xl bg-white border border-stone-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-stone-900 mb-3">
            Ready to start your fabric order?
          </h3>
          <p className="text-stone-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            We welcome inquiries from distributors, importers, wholesalers, manufacturers, and global business partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="px-7 py-3 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="https://wa.me/917802050080"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-stone-200 hover:border-amber-600 text-stone-700 hover:text-amber-700 text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
