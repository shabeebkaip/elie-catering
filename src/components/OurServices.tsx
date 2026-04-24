"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { t: "Event Management", d: "End-to-end coordination", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" },
  { t: "Catering", d: "Seasonal, sourced, exact", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop" },
  { t: "Buffet Events", d: "Long tables, generous spreads", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" },
  { t: "Wedding Planning", d: "Two years for one evening", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
  { t: "Menu Creation", d: "Composed, not copied", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop" },
  { t: "Luxury Dishes", d: "Signatures, quietly", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" },
  { t: "Decor Preparation", d: "The room as a stage", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" },
  { t: "Corporate Events", d: "Discreet, punctual, elegant", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
];

export default function OurServices() {
  return (
    <section id="services" className="bg-[#FAF6EF] py-20 md:py-32 px-6">
      <div className="container-custom">
        {/* Compact Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 md:w-8 h-[1px] bg-[#bb8a3c]" />
            <span className="text-[#bb8a3c] text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold">
              Expertise
            </span>
            <div className="w-6 md:w-8 h-[1px] bg-[#bb8a3c]" />
          </div>
          <h2 className="font-serif font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#2c1e39] uppercase leading-[0.9] tracking-tight max-w-5xl mx-auto">
            Our Services
          </h2>
        </div>

        {/* Services Grid - Using Full Capsule Arches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 md:gap-10">
          {services.map((s, i) => {
            const isDark = i % 2 === 0;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className={`rounded-t-full rounded-b-[40px] overflow-hidden cursor-pointer flex flex-col shadow-2xl transition-all duration-500 min-h-[480px] sm:h-[460px] md:h-[520px] group ${
                  isDark ? "bg-[#2c1e39] text-[#FAF6EF]" : "bg-[#bb8a3c] text-[#2c1e39]"
                }`}
              >
                {/* Image side - Full Capsule Arch */}
                <div className="aspect-[4/5] sm:h-[240px] md:h-[300px] relative overflow-hidden rounded-t-full flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image src={s.img} alt={s.t} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  </motion.div>
                </div>
                
                {/* Content side */}
                <div className="p-8 sm:p-6 md:p-10 flex-1 flex flex-col justify-center text-center">
                  <div className={`text-[9px] tracking-[0.2em] uppercase font-bold mb-3 opacity-60 ${
                    isDark ? "text-[#FAF6EF]" : "text-[#2c1e39]"
                  }`}>
                    0{i + 1}
                  </div>
                  <h3 className={`font-serif text-2xl sm:text-xl md:text-3xl mb-3 font-normal italic tracking-tight leading-tight transition-colors duration-500 ${
                    isDark ? "text-[#FAF6EF]" : "text-[#2c1e39]"
                  }`}>
                    {s.t}
                  </h3>
                  <p className={`text-[12px] md:text-[14px] leading-relaxed line-clamp-2 opacity-70 ${
                    isDark ? "text-[#FAF6EF]" : "text-[#2c1e39]"
                  }`}>
                    {s.d}
                  </p>
                </div>

                {/* Subtle hover indicator */}
                <div className={`h-1.5 w-0 group-hover:w-full transition-all duration-700 ${
                  isDark ? "bg-[#bb8a3c]" : "bg-[#2c1e39]"
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
