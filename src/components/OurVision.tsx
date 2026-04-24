"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section className="relative section-padding bg-accent text-white overflow-hidden">
      {/* Outlined Elie watermark — Hidden on small screens or scaled down */}
      <div className="hidden lg:block absolute top-10 left-10 font-serif text-[clamp(180px,25vw,360px)] leading-[0.8] font-normal text-transparent pointer-events-none select-none tracking-[-0.04em] opacity-40"
        style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.35)" }}
      >
        Elie
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-center relative z-10">
        {/* Left: heading + text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Purple vertical bar */}
          <div className="w-2 h-20 md:h-36 bg-primary mb-8 md:mb-10" />
          <h2 className="font-sans font-extrabold tracking-[-0.04em] leading-[0.9] uppercase text-white m-0 text-[clamp(64px,15vw,160px)]">
            Our<br />Vision
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/95 mt-10 md:mt-12 max-w-xl">
            Our vision is to be the leading name in luxury event management,
            planning and catering within the region. We aim to redefine
            excellence by setting new industry benchmarks, crafting
            experiences known for elegance, creativity and flawless
            execution — aligned with the ambitions of modern hospitality.
          </p>
        </motion.div>

        {/* Right: floating circular image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div 
            className="w-[min(280px,60vw)] h-[min(280px,60vw)] md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[8px] border-[#D9B777] shadow-2xl relative"
            style={{
              animation: "elFloat 11s ease-in-out infinite",
              ["--r" as string]: "0deg",
            } as React.CSSProperties}
          >
            <Image
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop"
              alt="Luxury dessert"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 384px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
