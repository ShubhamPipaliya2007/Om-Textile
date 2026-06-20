"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

type Category = "All" | "Bag Fabrics" | "Automotive" | "Furnishing";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  span?: "wide" | "tall" | "normal";
}

const items: GalleryItem[] = [
  {
    id: "g1",
    src: "https://picsum.photos/seed/bags-oxford-fabric/900/600",
    title: "Oxford Weave Backpacks",
    subtitle: "High GSM · School & Travel",
    category: "Bag Fabrics",
    span: "wide",
  },
  {
    id: "g2",
    src: "https://picsum.photos/seed/travel-bag-premium/600/700",
    title: "Travel Bag Fabric",
    subtitle: "Water Resistant Coating",
    category: "Bag Fabrics",
    span: "tall",
  },
  {
    id: "g3",
    src: "https://picsum.photos/seed/industrial-bag-fabric/600/600",
    title: "Industrial Bag Applications",
    subtitle: "Ripstop · High Durability",
    category: "Bag Fabrics",
    span: "normal",
  },
  {
    id: "g4",
    src: "https://picsum.photos/seed/car-seat-luxury/900/600",
    title: "Luxury Car Seat Covers",
    subtitle: "OEM Grade · Premium Finish",
    category: "Automotive",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://picsum.photos/seed/bus-seat-fabric/600/600",
    title: "Commercial Bus Seating",
    subtitle: "High Durability · Color Fast",
    category: "Automotive",
    span: "normal",
  },
  {
    id: "g6",
    src: "https://picsum.photos/seed/truck-cab-interior/600/700",
    title: "Truck Cabin Upholstery",
    subtitle: "Heavy Duty Fabric",
    category: "Automotive",
    span: "tall",
  },
  {
    id: "g7",
    src: "https://picsum.photos/seed/sofa-curtain-furnish/900/600",
    title: "Living Room Furnishing",
    subtitle: "Elegant Sofa & Curtain Fabrics",
    category: "Furnishing",
    span: "wide",
  },
  {
    id: "g8",
    src: "https://picsum.photos/seed/upholstery-cushion/600/700",
    title: "Cushion & Upholstery",
    subtitle: "Soft Feel · Long-lasting Color",
    category: "Furnishing",
    span: "tall",
  },
  {
    id: "g9",
    src: "https://picsum.photos/seed/interior-curtain/600/600",
    title: "Interior Decoration",
    subtitle: "Modern & Traditional Designs",
    category: "Furnishing",
    span: "normal",
  },
];

const categories: Category[] = ["All", "Bag Fabrics", "Automotive", "Furnishing"];

const categoryColors: Record<Exclude<Category, "All">, string> = {
  "Bag Fabrics": "#3b82f6",
  "Automotive": "#d97706",
  "Furnishing": "#a16207",
};

/* Tilt card hook */
function useTilt(strength = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 200, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }
  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(5);
  const accent = categoryColors[item.category];

  const spanClass =
    item.span === "wide"
      ? "col-span-2"
      : item.span === "tall"
      ? "row-span-2"
      : "";

  const imgHeight =
    item.span === "wide" ? 340 : item.span === "tall" ? 520 : 280;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${spanClass}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" as const }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: imgHeight }}>
        <motion.div
          className="w-full h-full"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Weave texture overlay for theme consistency */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px)",
          }}
        />

        {/* Hover accent overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ background: `${accent}` }}
          animate={{ opacity: hovered ? 0.12 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Category chip — top left */}
        <motion.div
          className="absolute top-3 left-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.07 + 0.3 }}
        >
          <span
            className="text-[10px] font-semibold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full backdrop-blur-md"
            style={{
              background: `${accent}30`,
              border: `1px solid ${accent}60`,
              color: accent,
            }}
          >
            {item.category}
          </span>
        </motion.div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.p
            className="text-white/50 text-[10px] tracking-widest uppercase mb-1"
            animate={{ opacity: hovered ? 1 : 0.7, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3 }}
          >
            {item.subtitle}
          </motion.p>
          <h3 className="font-display text-white text-xl font-semibold leading-tight">
            {item.title}
          </h3>

          {/* Hover underline */}
          <motion.div
            className="h-0.5 mt-2 rounded-full"
            style={{ background: accent }}
            animate={{ width: hovered ? "40%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          />
        </div>

        {/* Corner shine on hover */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 lg:py-32 bg-stone-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <span className="text-amber-500 text-xs tracking-[0.35em] uppercase font-medium">
            Real-World Applications
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-3">
            Fabrics in Action
          </h2>
          <div className="h-0.5 w-16 bg-amber-600 mx-auto mt-4" />
          <p className="text-stone-400 mt-5 max-w-xl mx-auto leading-relaxed text-sm">
            From school bags to luxury car seats and elegant home interiors — our fabrics are trusted across industries.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              style={{
                color: active === cat ? "white" : "#a8a29e",
              }}
            >
              {active === cat && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-amber-700"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-stone-500 text-sm mb-5">
            Interested in a specific application? We offer fabric samples for evaluation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/40 hover:-translate-y-0.5"
          >
            Request Fabric Samples
          </a>
        </motion.div>
      </div>
    </section>
  );
}
