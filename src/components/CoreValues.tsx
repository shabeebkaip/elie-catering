"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    t: "Excellence",
    d: "We strive for perfection in every detail, from planning to execution.",
  },
  {
    t: "Innovation",
    d: "Creativity and fresh ideas are at the heart of everything we do.",
  },
  {
    t: "Luxury",
    d: "We specialize in curating high-end experiences that exude sophistication.",
  },
  {
    t: "Integrity",
    d: "Trust and transparency are the foundation of our client relationships.",
  },
  {
    t: "Client-centered",
    d: "Every event is uniquely tailored to reflect our clients' visions.",
  },
  {
    t: "Discretion",
    d: "The evening belongs to you. We are the quiet architects of it.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: title + values grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-8 flex items-center gap-4">
                <div className="w-8 h-px bg-accent" />
                What Guides Us
              </div>
              <h2 className="font-serif font-light tracking-tight leading-[0.88] uppercase text-accent text-[clamp(56px,10vw,110px)] mb-16">
                Core
                <br />
                Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="pl-5 border-l-2 border-accent/60"
                >
                  <h3 className="font-sans text-[13px] font-bold text-primary mb-2 uppercase tracking-widest">
                    {v.t}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-body font-light opacity-75">
                    {v.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: single tall arched image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:pt-16"
          >
            <div className="relative w-[min(300px,72vw)] h-[min(460px,110vw)] rounded-t-full rounded-b-[32px] overflow-hidden shadow-[0_40px_80px_rgba(44,30,57,0.12)] border-[10px] border-white">
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                alt="Professional excellence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 72vw, 300px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
