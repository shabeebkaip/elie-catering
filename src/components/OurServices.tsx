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
    <section id="services" className="relative bg-primary overflow-hidden py-20 md:py-32 px-6">
      {/* Capsule cluster background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-6%] w-[160px] h-[700px] bg-accent/8 rounded-full rotate-[-38deg]" />
        <div className="absolute top-[-5%] right-[10%] w-[80px] h-[360px] border border-accent/12 rounded-full rotate-[-38deg]" />
        <div className="absolute bottom-[-12%] left-[-5%] w-[140px] h-[600px] bg-white/4 rounded-full rotate-[40deg]" />
        <div className="absolute bottom-[5%] left-[12%] w-[70px] h-[280px] border border-white/8 rounded-full rotate-[40deg]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/60" />
            <span className="text-accent/80 text-[9px] tracking-[0.42em] uppercase font-bold">What We Offer</span>
            <div className="w-8 h-px bg-accent/60" />
          </div>
          <h2 className="font-serif font-light text-[clamp(52px,10vw,110px)] text-cream uppercase leading-[0.88] tracking-tight max-w-5xl mx-auto">
            Our Services
          </h2>
          <p className="text-cream/50 text-[clamp(14px,1.5vw,16px)] max-w-lg mx-auto mt-6 font-light leading-relaxed">
            From intimate private dinners to grand galas — every occasion elevated.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => {
            const isGold = i % 2 === 0;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`group relative rounded-t-full rounded-b-[36px] overflow-hidden cursor-pointer flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)] ${
                  isGold
                    ? "bg-accent text-primary"
                    : "bg-[#2c1e39] border border-white/8 text-cream"
                }`}
                style={{ minHeight: "460px" }}
              >
                {/* Image — full capsule arch */}
                <div className="relative overflow-hidden rounded-t-full flex-shrink-0" style={{ height: "280px" }}>
                  <motion.div
                    variants={{ hover: { scale: 1.09 } }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={s.img}
                      alt={s.t}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </motion.div>
                  {/* Image overlay */}
                  <div className={`absolute inset-0 ${isGold ? "bg-primary/15" : "bg-primary/20"} group-hover:opacity-0 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center p-7 md:p-8">

                  <h3 className={`font-serif text-[clamp(18px,2.5vw,23px)] mb-3 font-light italic tracking-tight leading-snug ${isGold ? "text-primary" : "text-cream"}`}>
                    {s.t}
                  </h3>
                  <p className={`text-[12px] md:text-[13px] leading-relaxed ${isGold ? "text-primary/65" : "text-cream/60"}`}>
                    {s.d}
                  </p>
                </div>

                {/* Bottom hover indicator */}
                <div className={`h-1 w-0 group-hover:w-full transition-all duration-700 flex-shrink-0 ${isGold ? "bg-primary/30" : "bg-accent"}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
