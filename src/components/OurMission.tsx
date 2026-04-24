"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ElieLogo from "./ElieLogo";

export default function OurMission() {
  return (
    <section className="relative overflow-hidden">
      {/* Top arched transition - connecting from Our Vision */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-accent pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-primary rounded-t-[80px] md:rounded-t-[160px] z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[800px] relative z-20">
        {/* Left: Interactive Image Composition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[450px] lg:min-h-full bg-marble flex items-center justify-center lg:justify-end pr-0 lg:pr-12"
        >
          {/* Large Arched Image */}
          <div className="relative w-[90%] h-[85%] rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury wedding event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Secondary Floating Capsule Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-6 bottom-12 z-30 hidden xl:block"
          >
            <div className="relative w-44 h-64 rounded-full overflow-hidden rotate-[10deg] border-8 border-white shadow-xl bg-white">
              <div className="absolute inset-0 -rotate-[10deg] scale-[1.4]">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                  alt="Plating detail"
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Purple Content Panel with Geometric Accents - Updated to Large Serif */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="bg-primary text-cream px-8 md:px-16 lg:px-24 py-20 md:py-32 relative flex flex-col justify-center"
        >
          {/* Bolder Capsule Connection in background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0">
            <div className="absolute top-[-15%] right-[-10%] w-[200px] h-[900px] bg-accent rounded-full rotate-[-45deg]" />
            <div className="absolute bottom-[-15%] left-[-15%] w-[180px] h-[800px] bg-white rounded-full rotate-[-45deg]" />
          </div>

          {/* Elie Logo watermark - Enlarged and focused only on name */}
          <div className="hidden md:block absolute bottom-[-5%] right-[-10%] opacity-25 pointer-events-none select-none rotate-[-15deg] z-0">
            <ElieLogo size={900} color="#bb8a3c" onlyName={true} />
          </div>

          <div className="relative z-10">
            {/* Mission Icon/Badge */}
            <div className="mb-10 w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center text-accent">
              <span className="text-xl italic font-serif">M</span>
            </div>

            <h2 className="font-serif font-light tracking-[-0.02em] leading-[0.85] uppercase text-white mb-10 text-[clamp(48px,10vw,120px)]">
              Our<br /><span className="text-accent">Mission</span>
            </h2>
            
            <div className="space-y-8 text-base md:text-[20px] leading-relaxed text-cream/90 max-w-xl font-light">
              <p>
                <strong className="text-accent font-semibold italic">At Elie Catering and Event Planning,</strong> our
                mission is to create sophisticated and memorable events that
                exceed expectations.
              </p>
              <p>
                We are committed to blending culinary artistry with meticulous
                event planning — ensuring every event is a masterpiece of
                luxury and professionalism.
              </p>
            </div>

            {/* Decorative bottom line */}
            <div className="mt-16 w-24 h-1 bg-accent/40" />
          </div>
        </motion.div>
      </div>

      {/* Bottom arched transition - preparing for next section */}
      <div className="h-24 bg-primary rounded-b-[80px] md:rounded-b-[120px] relative z-10" />
    </section>
  );
}
