"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const marqueeItems = ["Weddings", "Private dinners", "Corporate events", "Buffets", "Galas", "Cocktail receptions", "Destination events"];

export default function Introduction() {
  return (
    <>
      {/* Marquee ticker */}
      <section className="py-5 md:py-6 bg-cream overflow-hidden border-b border-ink/15">
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
      <section className="relative overflow-hidden bg-cream section-padding">
        {/* Watermark — desktop only */}
        <div className="hidden lg:block absolute -top-16 -left-10 font-serif text-[420px] leading-[0.8] font-normal text-transparent pointer-events-none select-none tracking-[-0.05em]"
          style={{ WebkitTextStroke: "1px rgba(59,42,90,0.08)" }}
        >
          Elie
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans font-extrabold tracking-tight leading-none uppercase text-ink mb-8 text-[clamp(32px,8vw,72px)]">
              Introduction
            </h2>
            <div className="space-y-6 text-body text-[clamp(15px,2vw,17px)] leading-relaxed max-w-xl">
              <p>
                <strong className="text-ink font-semibold">At Elie Catering and Event Planning,</strong> we
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

          {/* Capsule image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[min(300px,70vw)] h-[min(460px,110vw)] rounded-full overflow-hidden rotate-[12deg] shadow-2xl border-[6px] border-cream flex-shrink-0">
              <div className="absolute inset-0 -rotate-[12deg] scale-[1.3]">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury buffet spread"
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 300px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gold bottom band accent */}
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-accent/30 hidden md:block" />
      </section>
    </>
  );
}
