"use client";

import { motion } from "framer-motion";
import CapsuleImage from "./CapsuleImage";
import CapsuleGraphic from "./CapsuleGraphic";

const options = [
  {
    title: "Finger Food",
    description: "Delicate and sophisticated bite-sized treats for elegant receptions",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Coffee Break",
    description: "Premium coffee and refreshments for seamless event interludes",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Live Cooking Stations",
    description: "Interactive culinary experiences where our chefs cook fresh before your guests",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "BBQ Section",
    description: "High-end grilled specialties crafted with the finest meats and ingredients",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Eastern & Italian Cuisine",
    description: "Authentic Eastern flavors and exquisite Italian dishes by master chefs",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Seafood & Sushi",
    description: "Fresh, premium seafood and artfully prepared vibrant sushi rolls",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Specialty & Arabic Coffee",
    description: "Authentic Arabian hospitality and specialty coffee served with elegance",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function CateringOptions() {
  return (
    <section className="bg-violet py-32 relative overflow-hidden text-primary">

      {/* Background Decorative Capsules */}
      <CapsuleGraphic color="primary" className="w-[1000px] h-[300px] -top-[5%] -left-[15%] opacity-40 shadow-2xl" angle="-rotate-[35deg]" />
      <CapsuleGraphic color="accent" className="w-[600px] h-[150px] bottom-[5%] -right-[15%] opacity-30 shadow-xl" angle="-rotate-[35deg]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-[0.15em] text-sm font-semibold mb-4 drop-shadow-sm"
          >
            Exquisite Catering Options
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl text-accent drop-shadow-md "
          >
            A World of Flavour
          </motion.h2>
        </div>

        {/* Items — flex wrap so incomplete last row stays centered */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-14">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group flex flex-col items-center text-center w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
            >
              <div className="mb-6 w-[180px] sm:w-[200px] md:w-[220px] mx-auto relative transition-transform duration-500 group-hover:scale-105">
                <CapsuleImage
                  src={option.image}
                  alt={option.title}
                  widthClass="w-full"
                  heightClass="h-[280px] sm:h-[320px] md:h-[360px]"
                />
              </div>

              <h3 className="font-serif text-xl md:text-2xl mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                {option.title}
              </h3>
              <p className="text-primary/60 text-[12px] md:text-[13px] leading-relaxed max-w-[220px]">
                {option.description}
              </p>
              <p className="mt-3 text-primary uppercase tracking-widest text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
                Explore <span>&rarr;</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
