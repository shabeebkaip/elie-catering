"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[640px]">
      {/* Left: image side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[350px] md:min-h-full overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury wedding event"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Right: purple panel side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="bg-primary text-cream px-8 md:px-16 lg:px-20 py-20 md:py-24 relative overflow-hidden flex flex-col justify-center"
      >
        {/* Outlined Elie watermark — Desktop only */}
        <div className="hidden md:block absolute top-0 right-5 font-serif text-[clamp(140px,20vw,260px)] leading-[0.8] font-normal text-transparent pointer-events-none select-none tracking-[-0.04em] opacity-40"
          style={{ WebkitTextStroke: "1px rgba(230,225,245,0.25)" }}
        >
          Elie
        </div>

        <div className="relative z-10">
          <h2 className="font-sans font-extrabold tracking-[-0.04em] leading-[0.9] uppercase text-white mb-8 md:mb-10 text-[clamp(48px,10vw,100px)]">
            Our<br />Mission
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-cream/90 max-w-lg">
            <p>
              At Elie Catering and Event Planning, our mission is to create
              sophisticated and memorable events that exceed expectations.
            </p>
            <p>
              We are committed to blending culinary artistry with meticulous
              event planning — ensuring every event is a masterpiece of
              luxury and professionalism.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
