"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CapsuleGraphic from "./CapsuleGraphic";

const heroImages = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Luxury Catering"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Decorative Capsules */}
        <CapsuleGraphic color="primary" className="w-[600px] h-[200px] -top-[5%] -right-[5%] opacity-60 z-10" angle="-rotate-[35deg]" />
        <CapsuleGraphic color="accent" className="w-[400px] h-[100px] top-[15%] -right-[10%] opacity-40 z-10" angle="-rotate-[35deg]" delay={0.2} />
        <CapsuleGraphic color="transparent" className="w-[800px] h-[300px] -bottom-[15%] -left-[5%] opacity-30 z-10" angle="-rotate-[35deg]" delay={0.4} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-6 bg-primary/50 px-4 py-1 rounded-full backdrop-blur-sm"
        >
          Welcome to Elie Catering
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 max-w-5xl drop-shadow-2xl"
        >
          Exquisite Tastes, <br />
          <span className="italic font-light">Unforgettable</span> Events
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#discover"
            className="border-2 border-accent text-white bg-accent/20 hover:bg-accent hover:text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 inline-block backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(193,143,59,0.3)]"
          >
            Discover Our Menus
          </Link>
        </motion.div>
      </div>

      {/* Modern Curved Transition Divider */}
      <div className="absolute bottom-0 left-0 w-full z-30 leading-[0]">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 120H1440V40C1440 40 1080 0 720 0C360 0 0 40 0 40V120Z" 
            fill="#1D1933" 
          />
        </svg>
        
        {/* Centered Explore Button on Curve Peak */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent flex flex-col items-center justify-center shadow-2xl border-4 border-primary group cursor-pointer hover:scale-110 transition-transform duration-300">
            <span className="text-[10px] md:text-[12px] text-white font-bold tracking-widest mb-1">EXPLORE</span>
            <span className="text-white text-xl md:text-2xl">&darr;</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
