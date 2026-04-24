"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ElieLogo from "./ElieLogo";

export default function OurVision() {
  return (
    <section className="relative section-padding bg-accent text-white overflow-hidden mt-[-100px] pt-[200px] rounded-t-[100px] md:rounded-t-[200px]">
      {/* Bolder Capsule Connection Effect - Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Thick Violet Pill */}
        <motion.div 
          initial={{ opacity: 0, x: -100, y: -100 }}
          whileInView={{ opacity: 0.25, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[-20%] left-[-10%] w-[200px] h-[1000px] bg-primary rounded-full rotate-[-45deg]" 
        />
        {/* Thick White Pill */}
        <motion.div 
          initial={{ opacity: 0, x: -150, y: -50 }}
          whileInView={{ opacity: 0.3, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[-40%] left-[15%] w-[180px] h-[1000px] bg-white rounded-full rotate-[-45deg]" 
        />
      </div>

      {/* Elie Logo watermark - Moved more towards the middle for better visibility */}
      <div className="hidden lg:block absolute bottom-[-5%] right-[5%] opacity-[0.3] pointer-events-none select-none rotate-[-15deg] z-0">
        <ElieLogo size={1100} color="#fff" onlyName={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-12 md:gap-20 items-center relative z-10">
        {/* Left: heading + text - Updated to Large Serif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Purple vertical bar */}
          <div className="w-2 h-24 md:h-48 bg-primary mb-12 md:mb-16" />
          <h2 className="font-serif font-light tracking-[-0.02em] leading-[0.85] uppercase text-white m-0 text-[clamp(64px,12vw,140px)]">
            Our<br />Vision
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-white/95 mt-12 md:mt-16 max-w-xl font-light">
            Our vision is to be the leading name in luxury event management,
            planning and catering within the region. We aim to redefine
            excellence by setting new industry benchmarks.
          </p>
        </motion.div>

        {/* Right: Layered Image Composition */}
        <div className="relative flex justify-center lg:justify-end h-[500px] md:h-[650px] w-full">
          {/* Secondary Capsule Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-[-10%] bottom-0 z-20 hidden md:block"
          >
            <div className="relative w-56 h-[380px] rounded-full overflow-hidden rotate-[-8deg] border-[8px] border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury event atmosphere"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          </motion.div>

          {/* Main Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div 
              className="w-[min(320px,70vw)] h-[min(320px,70vw)] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[12px] border-white/30 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative"
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
                sizes="(max-width: 768px) 70vw, 500px"
              />
            </div>
          </motion.div>

          {/* Tertiary Small Accent Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-[-40px] right-20 z-0 hidden lg:block"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-6 border-primary shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Table setting"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
