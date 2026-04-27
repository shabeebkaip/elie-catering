"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const marqueeItems = [
  "Weddings",
  "Private dinners",
  "Corporate events",
  "Buffets",
  "Galas",
  "Cocktail receptions",
  "Destination events",
];

export default function Introduction() {
  return (
    <>
      {/* Marquee ticker */}
      <section className="py-5 md:py-6 bg-cream overflow-hidden border-b border-primary/10">
        <div className="flex gap-10 md:gap-20 whitespace-nowrap font-serif text-[clamp(14px,3vw,24px)] text-primary italic font-light animate-[elMarquee_40s_linear_infinite] w-max">
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
      <section className="bg-cream section-padding">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-8 flex items-center gap-4">
              <div className="w-8 h-px bg-accent" />
              About Elie
            </div>

            <h2 className="font-serif font-light tracking-tight leading-[0.88] uppercase text-primary mb-10 text-[clamp(48px,8vw,96px)]">
              Intro
              <br />
              duction
            </h2>

            <div className="space-y-6 text-[clamp(16px,1.8vw,18px)] leading-relaxed text-body font-light max-w-lg">
              <p>
                <strong className="text-primary font-semibold">
                  At Elie Catering and Event Planning,
                </strong>{" "}
                we specialize in delivering complete event packages from A to Z.
                From creative concepts to flawless execution, we handle every
                detail — exclusive accessories, gourmet food, elegant flowers,
                fine chocolates and exquisite decorations.
              </p>
              <p>
                Our high-standard packages ensure that your event is not only
                memorable but also one-of-a-kind — blending luxury, creativity
                and precision at every turn.
              </p>
            </div>
          </motion.div>

          {/* Right: single capsule image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[min(300px,72vw)] h-[min(440px,105vw)] rounded-full overflow-hidden rotate-6 shadow-[0_40px_80px_rgba(44,30,57,0.12)] border-[10px] border-white">
              <div className="absolute inset-0 -rotate-6 scale-[1.2]">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury buffet spread"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 72vw, 300px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container-custom mt-20 md:mt-24 h-px bg-primary/10" />
      </section>
    </>
  );
}
