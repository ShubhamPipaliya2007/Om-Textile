"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: "easeOut" as const },
    },
  };
}

const contactCards = [
  {
    icon: MapPin,
    label: "Our Address",
    content: "10/B, New Dwarkesh Industry, Gandhi Kutir,\nNear Navjivan Circle, Udhana Magdalla Road,\nSurat – 395017, Gujarat, India",
    link: "https://maps.google.com/?q=Udhana+Magdalla+Road+Surat+395017",
    linkText: "View on Maps",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    content: "+91 78020 50080",
    link: "tel:+917802050080",
    linkText: "Call Now",
    whatsapp: "https://wa.me/917802050080",
  },
  {
    icon: Mail,
    label: "Email",
    content: "omtextiles.ot@gmail.com",
    link: "mailto:omtextiles.ot@gmail.com",
    linkText: "Send Email",
  },
  {
    icon: Clock,
    label: "Business Hours",
    content: "Monday – Saturday\n9:00 AM – 7:00 PM",
    link: null,
    linkText: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-amber-700 text-xs tracking-[0.35em] uppercase font-medium">
            Reach Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 mt-3">
            Contact Us
          </h2>
          <div className="h-0.5 w-16 bg-amber-700 mx-auto mt-4" />
          <p className="text-stone-600 mt-5 max-w-xl mx-auto leading-relaxed">
            We welcome inquiries from distributors, importers, wholesalers, manufacturers, and global business partners.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  className="p-6 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 group"
                  variants={fadeUp(i * 0.1 + 0.15)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                      <Icon size={18} className="text-amber-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-stone-400 tracking-wide uppercase mb-1">
                        {card.label}
                      </p>
                      <p className="text-stone-800 text-sm font-medium whitespace-pre-line leading-relaxed">
                        {card.content}
                      </p>
                      {card.link && (
                        <a
                          href={card.link}
                          target={card.link.startsWith("http") ? "_blank" : undefined}
                          rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1 text-amber-700 text-xs font-medium mt-2 hover:text-amber-800 transition-colors"
                        >
                          {card.linkText}
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {card.whatsapp && (
                        <a
                          href={card.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-green-600 text-xs font-medium mt-1 ml-3 hover:text-green-700 transition-colors"
                        >
                          WhatsApp
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Inquiry form */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-stone-50 rounded-2xl p-7 lg:p-10 border border-stone-100 h-full">
              <h3 className="font-display text-2xl font-semibold text-stone-900 mb-1">
                Send an Inquiry
              </h3>
              <p className="text-stone-500 text-sm mb-7">
                Tell us your requirements and we&apos;ll get back to you within 24 hours.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as HTMLFormElement;
                  const data = new FormData(target);
                  const name = data.get("name");
                  const email = data.get("email");
                  const company = data.get("company");
                  const message = data.get("message");
                  const subject = `Inquiry from ${name}${company ? ` (${company})` : ""}`;
                  const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`;
                  window.location.href = `mailto:omtextiles.ot@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-stone-500 tracking-wide uppercase block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-stone-500 tracking-wide uppercase block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-stone-500 tracking-wide uppercase block mb-1.5">
                      Company / Business
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-stone-500 tracking-wide uppercase block mb-1.5">
                      Fabric Type
                    </label>
                    <select
                      name="fabricType"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                    >
                      <option value="">Select category</option>
                      <option value="bag">Bag Fabrics</option>
                      <option value="automotive">Automotive Fabrics</option>
                      <option value="furnishing">Furnishing Fabrics</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-stone-500 tracking-wide uppercase block mb-1.5">
                    Your Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your fabric requirements — type, quantity, specifications, intended use..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder:text-stone-300 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium tracking-wider rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send Inquiry via Email
                </button>

                <p className="text-center text-xs text-stone-400">
                  Or reach us instantly on{" "}
                  <a
                    href="https://wa.me/917802050080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    WhatsApp +91 78020 50080
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden border border-stone-100 shadow-sm"
          style={{ height: 300 }}
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2!2d72.8486!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e44e0000001%3A0x1!2sUdhana+Magdalla+Road%2C+Surat%2C+Gujarat+395017!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Om Textiles Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
