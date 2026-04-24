"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  { t: "Excellence", d: "We strive for perfection in every detail, from planning to execution." },
  { t: "Innovation", d: "Creativity and fresh ideas are at the heart of everything we do." },
  { t: "Luxury", d: "We specialize in curating high-end experiences that exude sophistication and elegance." },
  { t: "Integrity", d: "Trust and transparency are the foundation of our client relationships." },
  { t: "Client-centered service", d: "Every event is uniquely tailored to reflect our clients’ visions and preferences." },
  { t: "Discretion", d: "The evening belongs to you. We are the quiet architects of it." },
];

export default function CoreValues() {
  return (
    <section className="relative bg-cream overflow-hidden section-padding min-h-[700px] md:min-h-[900px] flex items-center">
      
      {/* Attractive Capsule Connection Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 100, y: -100 }}
          whileInView={{ opacity: 0.15, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[-10%] right-[5%] w-[200px] h-[800px] bg-primary rounded-full rotate-[-35deg] blur-[2px]" 
        />
        <motion.div 
          initial={{ opacity: 0, x: 150, y: -50 }}
          whileInView={{ opacity: 0.2, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[10%] right-[-10%] w-[180px] h-[700px] bg-accent rounded-full rotate-[-35deg]" 
        />
        <div className="absolute top-[40%] right-[15%] w-[140px] h-[400px] border border-primary/20 rounded-full rotate-[-35deg]" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content - Updated to Large Serif Title */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif font-light tracking-[-0.02em] leading-[0.85] uppercase text-accent m-0 text-[clamp(64px,12vw,140px)]">
                Core<br />Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mt-20 md:mt-24">
              {values.map((v, i) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="pl-6 border-l-[3px] border-accent"
                >
                  <h3 className="font-sans text-xl font-extrabold text-primary mb-3 uppercase tracking-tight">
                    {v.t}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-body m-0 opacity-80 font-light">{v.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Image Composition */}
          <div className="relative flex justify-center lg:justify-end h-[500px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative w-[280px] md:w-[320px] lg:w-[360px] h-[450px] md:h-[550px] rounded-t-[180px] rounded-b-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] border-[12px] border-white bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional excellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-[-10%] bottom-10 z-20 hidden md:block"
            >
              <div 
                className="relative w-44 h-44 rounded-full overflow-hidden border-[8px] border-accent shadow-2xl"
                style={{
                  animation: "elFloat 10s ease-in-out infinite",
                  ["--r" as string]: "0deg",
                } as React.CSSProperties}
              >
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury detail"
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-0 right-0 z-0 hidden lg:block"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop"
                  alt="Catering innovation"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
