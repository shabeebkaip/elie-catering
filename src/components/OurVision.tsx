"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section className="bg-accent section-padding overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-1.5 h-16 md:h-24 bg-primary mb-10 md:mb-12" />

          <h2 className="font-serif font-light tracking-tight leading-[0.88] uppercase text-white text-[clamp(64px,10vw,120px)] mb-0">
            Our
            <br />
            Vision
          </h2>

          <p className="text-base md:text-xl leading-relaxed text-white/90 mt-10 max-w-lg font-light">
            Our vision is to be the leading name in luxury event management,
            planning and catering within the region. We aim to redefine
            excellence by setting new industry benchmarks.
          </p>
        </motion.div>

        {/* Right: single circular image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[min(380px,80vw)] h-[min(380px,80vw)] md:w-[460px] md:h-[460px] rounded-full overflow-hidden border-[12px] border-white/25 shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
            <Image
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop"
              alt="Luxury dessert"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 460px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
