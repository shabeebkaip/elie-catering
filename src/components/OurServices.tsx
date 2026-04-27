"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    t: "Event Management",
    d: "End-to-end coordination",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Catering",
    d: "Seasonal, sourced, exact",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    t: "Buffet Events",
    d: "Long tables, generous spreads",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Wedding Planning",
    d: "Two years for one evening",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Menu Creation",
    d: "Composed, not copied",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
  },
  {
    t: "Luxury Dishes",
    d: "Signatures, quietly",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    t: "Decor Preparation",
    d: "The room as a stage",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Corporate Events",
    d: "Discreet, punctual, elegant",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="bg-[#FAF6EF] py-20 md:py-32 px-6">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
              Expertise
            </span>
          </div>
          <h2 className="font-serif font-light text-[clamp(56px,10vw,110px)] text-primary uppercase leading-[0.88] tracking-tight">
            Our Services
          </h2>
        </motion.div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => {
            const isDark = i % 2 === 0;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-t-full rounded-b-3xl overflow-hidden cursor-pointer flex flex-col shadow-lg group transition-shadow duration-300 hover:shadow-2xl ${
                  isDark
                    ? "bg-primary text-cream"
                    : "bg-accent text-primary"
                }`}
              >
                {/* Arched image */}
                <div className="relative h-[220px] md:h-[260px] overflow-hidden rounded-t-full flex-shrink-0">
                  <Image
                    src={s.img}
                    alt={s.t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-center text-center">
                  <div
                    className={`text-[9px] tracking-[0.3em] uppercase font-bold mb-3 opacity-50 ${
                      isDark ? "text-cream" : "text-primary"
                    }`}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    className={`font-serif text-xl md:text-2xl font-normal italic tracking-tight leading-tight ${
                      isDark ? "text-cream" : "text-primary"
                    }`}
                  >
                    {s.t}
                  </h3>
                  <p
                    className={`text-[13px] leading-relaxed mt-2 opacity-60 font-light ${
                      isDark ? "text-cream" : "text-primary"
                    }`}
                  >
                    {s.d}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
