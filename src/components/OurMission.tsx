"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CapsuleGraphic from "./CapsuleGraphic";
import CapsuleImage from "./CapsuleImage";

export default function OurMission() {
  return (
    <section className="bg-primary text-white py-32 relative overflow-hidden min-h-[900px] flex items-center">
      {/* "Rising" Decorative Capsules (Bridging the Hero Curve) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <CapsuleGraphic color="accent" className="w-[600px] h-[150px] -top-[10%] left-[10%] opacity-20" angle="-rotate-[35deg]" animate={true} delay={0.5} />
         <CapsuleGraphic color="primary" className="w-[800px] h-[250px] -top-[5%] left-[40%] opacity-40 border-[2px] border-white/10 bg-transparent" angle="-rotate-[35deg]" animate={true} delay={0.7} />
         <CapsuleGraphic color="accent" className="w-[1000px] h-[200px] bottom-[10%] -right-[15%] opacity-10" angle="-rotate-[35deg]" animate={true} delay={0.9} />
         
         {/* Faint "E l i e" watermark effect */}
         <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-serif text-white/5 whitespace-nowrap select-none font-light pointer-events-none">
           E l i e
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Overlapping Images in Capsules */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <CapsuleImage 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Event Planning"
                widthClass="w-[280px] md:w-[350px]"
                heightClass="h-[450px] md:h-[600px]"
                angle="-rotate-[35deg]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -right-4 md:right-0 top-20 z-10 hidden md:block"
            >
              <CapsuleImage 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                alt="Luxury Catering"
                widthClass="w-[200px] md:w-[250px]"
                heightClass="h-[350px] md:h-[450px]"
                angle="-rotate-[35deg]"
              />
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              {/* Internal Accent Capsule */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>

              <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                OUR <br className="hidden md:block" /> MISSION
              </h2>
              
              <div className="space-y-6 text-white/90 font-light leading-relaxed text-lg max-w-xl">
                <p>
                  At Elie Catering and Event Planning, our mission is to create sophisticated and memorable events that exceed expectations.
                </p>
                <p>
                  We are committed to blending culinary artistry with meticulous event planning, ensuring every event is a masterpiece of luxury and professionalism.
                </p>
              </div>

              <motion.div 
                className="mt-10 h-[2px] w-24 bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
