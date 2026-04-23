"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CapsuleGraphic from "./CapsuleGraphic";
import CapsuleImage from "./CapsuleImage";

const sliderImages = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498579150354-979475d54334?q=80&w=2070&auto=format&fit=crop",
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const points = [
    {
      title: "INNOVATION",
      description: "Creativity and fresh ideas are at the heart of everything we do.",
    },
    {
      title: "INTEGRITY",
      description: "Trust and transparency are the foundation of our client relationships.",
    },
    {
      title: "SERVICE",
      description: "Our dedicated team ensures flawless execution and attentive hospitality.",
    },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden text-primary min-h-[800px] flex items-center">
      
      {/* Decorative Capsules (Now smaller and positioned as frames) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <CapsuleGraphic color="primary" className="w-[800px] h-[200px] -top-[5%] left-[60%] opacity-20" angle="-rotate-[35deg]" />
         <CapsuleGraphic color="accent" className="w-[600px] h-[150px] top-[40%] left-[55%] opacity-10" angle="-rotate-[35deg]" delay={0.2} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Side (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4 leading-none font-bold text-primary tracking-tight">
                OUR <br/> VALUES
              </h2>
            </motion.div>

            <div className="space-y-12">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                >
                  <h3 className="text-2xl font-bold mb-3 tracking-wider text-primary border-l-4 border-accent pl-4">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-lg max-w-md">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image Slider Side (Right) - Image in a Capsule Shape */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <CapsuleImage 
                    src={sliderImages[currentSlide]} 
                    alt="Our Values" 
                    widthClass="w-[300px] md:w-[450px]"
                    heightClass="h-[500px] md:h-[650px]"
                    angle="-rotate-[35deg]"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Decorative accent capsule behind the slider */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[110%] h-[110%] border-2 border-accent/20 rounded-full transform -rotate-[35deg]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
