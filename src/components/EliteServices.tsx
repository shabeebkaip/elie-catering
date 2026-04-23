"use client";

import { motion } from "framer-motion";
import { GlassWater, ChefHat, Music, Flower2 } from "lucide-react";
import CapsuleGraphic from "./CapsuleGraphic";

export default function EliteServices() {
  const services = [
    {
      icon: <ChefHat className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-300 relative z-10" />,
      title: "Private Dining",
      description: "Exclusive culinary experiences crafted for intimate gatherings in the comfort of your home or chosen venue.",
    },
    {
      icon: <GlassWater className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-300 relative z-10" />,
      title: "Corporate Events",
      description: "Sophisticated catering solutions designed to impress clients and elevate your corporate functions.",
    },
    {
      icon: <Flower2 className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-300 relative z-10" />,
      title: "Weddings",
      description: "Breathtaking menus and flawless service to make your special day truly unforgettable.",
    },
    {
      icon: <Music className="w-10 h-10 text-white group-hover:text-primary transition-colors duration-300 relative z-10" />,
      title: "Gala Dinners",
      description: "Grand scale catering with meticulous attention to detail for large-scale premium celebrations.",
    },
  ];

  return (
    <section className="bg-primary py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decorative Capsules */}
      <CapsuleGraphic color="primary" className="w-[1200px] h-[400px] -bottom-[10%] -right-[5%] opacity-80" angle="-rotate-[35deg]" />
      <CapsuleGraphic color="white" className="w-[600px] h-[150px] top-[10%] -left-[10%] opacity-20" angle="-rotate-[35deg]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-accent uppercase tracking-[0.15em] text-sm font-semibold mb-4"
            >
              Beyond Catering
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl text-white tracking-tight"
            >
              Our Elite Services
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             <button className="text-white border-b-2 border-accent pb-1 uppercase tracking-widest text-sm font-bold hover:text-accent transition-colors">
              View All Services
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-10 hover:bg-accent transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden"
            >
              {/* Capsule fill on hover */}
              <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-white rounded-full transform -rotate-[45deg] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              <div className="mb-8 relative z-10">
                {service.icon}
              </div>
              <h3 className="relative z-10 font-serif text-3xl text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-300 font-medium leading-relaxed group-hover:text-gray-600 transition-colors duration-300 flex-grow">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-white/10 group-hover:border-primary/20 transition-colors duration-300 relative z-10">
                 <span className="text-accent group-hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors duration-300 flex items-center gap-2">
                   Discover <span className="text-lg leading-none">&rarr;</span>
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
