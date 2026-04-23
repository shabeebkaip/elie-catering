"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CapsuleImage from "./CapsuleImage";
import CapsuleGraphic from "./CapsuleGraphic";

export default function CateringOptions() {
  const options = [
    {
      title: "Signature Canapés",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Gourmet Platters",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Exquisite Patisserie",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop",
    },
    {
      title: "Craft Cocktails",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Bespoke Buffets",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section className="bg-violet py-32 relative overflow-hidden text-primary">
      
      {/* Background Decorative Capsules */}
      <CapsuleGraphic color="primary" className="w-[1000px] h-[300px] -top-[5%] -left-[15%] opacity-40 shadow-2xl" angle="-rotate-[35deg]" />
      <CapsuleGraphic color="accent" className="w-[600px] h-[150px] bottom-[5%] -right-[15%] opacity-30 shadow-xl" angle="-rotate-[35deg]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary uppercase tracking-[0.15em] text-sm font-semibold mb-4 drop-shadow-sm"
            >
              Gastronomic Journeys
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl text-white drop-shadow-md"
            >
              A Selection of Excellence
            </motion.h2>
          </div>
          
          <div className="hidden md:flex gap-4 mb-2">
            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary/40">
              &larr;
            </div>
            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary font-bold">
              &rarr;
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={targetRef}
          className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[400px] snap-center group"
            >
              <div className="mb-8 relative transition-transform duration-500 group-hover:scale-105">
                <CapsuleImage 
                  src={option.image} 
                  alt={option.title} 
                  widthClass="w-full"
                  heightClass="h-[450px] md:h-[550px]"
                />
                <div className="absolute inset-0 rounded-full transform -rotate-[35deg] bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              </div>
              
              <h3 className="font-serif text-3xl text-center mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                {option.title}
              </h3>
              <div className="flex justify-center">
                <p className="text-primary uppercase tracking-widest text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                  View Experience <span className="text-lg">&rarr;</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
