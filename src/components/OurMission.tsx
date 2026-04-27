"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[720px]">
      {/* Left: image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative min-h-[420px] lg:min-h-full overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury wedding event"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </motion.div>

      {/* Right: content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="bg-primary text-cream px-8 md:px-16 lg:px-20 py-20 md:py-28 flex flex-col justify-center"
      >
        <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-10 flex items-center gap-4">
          <div className="w-8 h-px bg-accent" />
          Our Purpose
        </div>

        <h2 className="font-serif font-light tracking-tight leading-[0.88] uppercase text-white mb-10 text-[clamp(48px,8vw,100px)]">
          Our
          <br />
          <span className="text-accent">Mission</span>
        </h2>

        <div className="space-y-6 text-base md:text-xl leading-relaxed text-cream/85 max-w-md font-light">
          <p>
            <strong className="text-accent font-medium italic">
              At Elie Catering and Event Planning,
            </strong>{" "}
            our mission is to create sophisticated and memorable events that
            exceed expectations.
          </p>
          <p>
            We are committed to blending culinary artistry with meticulous
            event planning — ensuring every event is a masterpiece of luxury
            and professionalism.
          </p>
        </div>

        <div className="mt-14 w-16 h-px bg-accent/50" />
      </motion.div>
    </section>
  );
}
