"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "2018", label: "Est." },
  { icon: Award, value: "7+", label: "Years" },
  { icon: Users, value: "3", label: "Industries" },
  { icon: Globe, value: "Global", label: "Reach" },
];

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" as const } },
  };
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-amber-700 text-xs tracking-[0.35em] uppercase font-medium">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 mt-3">
            About Us
          </h2>
          <div className="h-0.5 w-16 bg-amber-700 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual block */}
          <motion.div
            className="relative"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Main image card */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
              style={{
                background:
                  "linear-gradient(160deg, #292524 0%, #1C1917 50%, #0C0A09 100%)",
              }}
            >
              {/* Weave texture overlay */}
              <div className="absolute inset-0 weave-pattern fabric-texture opacity-60" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-full border-2 border-amber-600/40 flex items-center justify-center mb-6">
                  <span className="font-display text-amber-400 text-3xl font-semibold">
                    OM
                  </span>
                </div>
                <p className="font-display text-white text-2xl font-light italic leading-relaxed">
                  "Quality fabrics that build better businesses."
                </p>
                <div className="h-px w-12 bg-amber-600 mt-6" />
                <p className="text-amber-400/70 text-xs tracking-widest uppercase mt-3">
                  Mr. Jagdish Korat, Founder
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-700/50 rounded-tl-md" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-700/50 rounded-br-md" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-amber-700 text-white rounded-xl p-5 shadow-xl hidden sm:block">
              <p className="font-display text-4xl font-bold leading-none">7+</p>
              <p className="text-amber-200 text-xs tracking-wide mt-1">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6">
                Founded by{" "}
                <span className="text-amber-700 italic">Mr. Jagdish Korat</span>
                , built on trust
              </h3>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Om Textiles has emerged as a trusted name in the textile industry since our establishment on{" "}
                  <strong className="text-stone-800">January 15, 2018</strong>. Our expertise lies in understanding the unique requirements of different industries and supplying fabrics that offer performance, durability, and value.
                </p>
                <p>
                  We believe in providing <strong className="text-stone-800">solutions rather than just products</strong>. With over 7 years of industry experience, we continue to innovate and expand our product range while maintaining our commitment to quality and customer satisfaction.
                </p>
                <p>
                  Our goal is to help businesses grow by offering fabrics that meet industry standards and exceed customer expectations — serving distributors, importers, wholesalers, manufacturers, and global business partners.
                </p>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/50 transition-colors group"
                >
                  <Icon size={18} className="text-amber-700 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-2xl font-bold text-stone-900">{value}</p>
                  <p className="text-stone-500 text-xs tracking-wide uppercase mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              className="mt-8 flex items-center gap-3 text-stone-500 text-sm"
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="h-px flex-1 bg-stone-200" />
              <span className="tracking-wide">Based in Surat, Gujarat, India</span>
              <div className="h-px flex-1 bg-stone-200" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
