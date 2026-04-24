"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ElieLogo from "./ElieLogo";

const marqueeItems = ["Weddings", "Private dinners", "Corporate events", "Buffets", "Galas", "Cocktail receptions", "Destination events"];

export default function Introduction() {
  return (
    <>
      {/* Marquee ticker */}
      <section className="py-5 md:py-6 bg-cream overflow-hidden border-b border-primary/10">
        <div 
          className="flex gap-10 md:gap-20 whitespace-nowrap font-serif text-[clamp(14px,3vw,24px)] text-primary italic font-light animate-[elMarquee_40s_linear_infinite] w-max"
        >
          {[0, 1, 2].map((k) =>
            marqueeItems.map((w) => (
              <span key={`${k}-${w}`} className="inline-flex items-center gap-10 md:gap-20">
                <span>{w}</span>
                <span className="text-accent">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* Introduction section */}
      <section className="relative overflow-hidden bg-cream section-padding min-h-[800px] flex items-center">
        {/* Bolder Capsule Connection Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: 100, y: -100 }}
            whileInView={{ opacity: 0.12, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[-10%] right-[10%] w-[180px] h-[800px] bg-accent rounded-full rotate-[-45deg]" 
          />
          <motion.div 
            initial={{ opacity: 0, x: 150, y: -50 }}
            whileInView={{ opacity: 0.15, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute top-[20%] right-[-5%] w-[180px] h-[800px] border-[2px] border-accent/30 rounded-full rotate-[-45deg]" 
          />
        </div>

        {/* Watermark Logo - Moved more towards the middle for better visibility */}
        <div className="hidden lg:block absolute bottom-[15%] left-[-5%] opacity-[0.1] pointer-events-none select-none rotate-[-15deg] z-0">
          <ElieLogo size={1000} onlyName={true} />
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 items-center relative z-10">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif font-light tracking-tight leading-[0.85] uppercase text-primary mb-10 text-[clamp(48px,10vw,100px)]">
              Introduction
            </h2>
            <div className="space-y-8 text-body text-[clamp(16px,2vw,19px)] leading-relaxed max-w-xl font-light">
              <p>
                <strong className="text-primary font-semibold">At Elie Catering and Event Planning,</strong> we
                specialize in delivering complete event packages from A to Z. From
                creative concepts to flawless execution, we handle every detail —
                exclusive accessories, gourmet food, elegant flowers, fine
                chocolates and exquisite decorations.
              </p>
              <p>
                Our high-standard packages ensure that your event is not only
                memorable but also one-of-a-kind — blending luxury, creativity and
                precision at every turn.
              </p>
            </div>
          </motion.div>

          {/* Layered Image Composition */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -left-12 bottom-10 z-20 hidden xl:block"
            >
              <div className="relative w-40 h-64 rounded-full overflow-hidden rotate-[-12deg] shadow-xl border-8 border-white bg-white">
                <div className="absolute inset-0 rotate-[12deg] scale-[1.4]">
                  <Image
                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury event detail"
                    fill 
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -right-8 -top-12 z-0 hidden lg:block"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-accent/20">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                  alt="Floral detail"
                  fill 
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative w-[min(320px,75vw)] h-[min(480px,110vw)] rounded-full overflow-hidden rotate-[15deg] shadow-[0_40px_80px_rgba(59,42,90,0.15)] border-[12px] border-white flex-shrink-0 bg-white">
                <div className="absolute inset-0 -rotate-[15deg] scale-[1.35]">
                  <Image
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury buffet spread"
                    fill 
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 320px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 h-1 bg-accent/30 hidden md:block" />
      </section>
    </>
  );
}
