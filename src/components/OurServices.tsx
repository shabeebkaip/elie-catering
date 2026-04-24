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
    <section id="services" className="bg-cream">
      {/* Purple header */}
      <div className="bg-primary text-cream px-6 md:px-16 lg:px-20 py-24 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent" />
        <div className="hidden md:block absolute -top-24 -right-16 w-52 h-96 rounded-full bg-accent rotate-[-18deg] opacity-90" />
        <div className="hidden lg:block absolute -bottom-20 right-24 w-36 h-72 rounded-full bg-cream rotate-[-18deg] opacity-10" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans font-extrabold tracking-[-0.04em] leading-[0.9] uppercase text-cream m-0 relative z-10 text-[clamp(64px,12vw,140px)]"
        >
          Our<br />Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="text-base md:text-lg leading-relaxed text-cream/80 mt-10 max-w-xl relative z-10"
        >
          Elie Catering and Event Planning offers a comprehensive range of
          services designed to create unforgettable experiences.
        </motion.p>
      </div>

      {/* Services grid — capsule cards */}
      <div className="px-6 md:px-16 lg:px-20 py-20 md:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => {
            const isDark = i % 2 === 0;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-[160px] overflow-hidden cursor-pointer h-[480px] flex flex-col shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${
                  isDark ? "bg-primary" : "bg-accent"
                }`}
              >
                {/* Image side */}
                <div className="h-[280px] relative overflow-hidden rounded-t-[160px] flex-shrink-0">
                  <Image src={s.img} alt={s.t} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                
                {/* Content side */}
                <div className="p-8 pb-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className={`text-[10px] tracking-[0.2em] uppercase font-bold mb-3 ${
                      isDark ? "text-accent" : "text-primary"
                    }`}>
                      Service 0{i + 1}
                    </div>
                    <h3 className={`font-serif text-2xl mb-2 font-normal tracking-tight ${
                      isDark ? "text-cream" : "text-primary"
                    }`}>
                      {s.t}
                    </h3>
                    <p className={`text-[13px] leading-relaxed line-clamp-2 ${
                      isDark ? "text-cream/70" : "text-primary/75"
                    }`}>
                      {s.d}
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors ${
                      isDark ? "bg-accent text-primary" : "bg-primary text-accent"
                    }`}>
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
