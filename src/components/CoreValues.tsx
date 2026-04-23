"use client";

import { motion } from "framer-motion";
import CapsuleGraphic from "./CapsuleGraphic";

export default function CoreValues() {
  return (
    <section className="bg-white py-32 relative overflow-hidden text-primary min-h-[800px] flex items-center">
      {/* Decorative Right-Side Capsules (Matching Reference exactly) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <CapsuleGraphic color="primary" className="w-[1800px] h-[400px] -top-[15%] left-[55%] origin-center" angle="-rotate-[35deg]" />
         <CapsuleGraphic color="accent" className="w-[1000px] h-[300px] top-[30%] left-[60%] origin-center" angle="-rotate-[35deg]" delay={0.2} />
         <CapsuleGraphic color="accent" className="w-[800px] h-[250px] top-[75%] left-[50%] origin-center" angle="-rotate-[35deg]" delay={0.4} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-6xl md:text-8xl leading-none font-bold text-primary tracking-tight">
            CORE <br/> VALUES
          </h2>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 max-w-4xl relative">
          
          {/* Column 1 */}
          <div className="flex-1 space-y-12 pr-4 border-r-0 md:border-r border-gray-300">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-2xl font-bold mb-3 tracking-wider text-primary">EXCELLENCE</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                We strive for perfection in every detail, from planning to execution.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-2xl font-bold mb-3 tracking-wider text-primary">LUXURY</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                We specialize in curating high-end experiences that exude sophistication and elegance.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <h3 className="text-2xl font-bold mb-3 tracking-wider text-primary">CLIENT - CENTERED SERVICE</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                Every event is uniquely tailored to reflect our clients' visions and preferences.
              </p>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <h3 className="text-2xl font-bold mb-3 tracking-wider text-primary">INNOVATION</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                Creativity and fresh ideas are at the heart of everything we do.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
              <h3 className="text-2xl font-bold mb-3 tracking-wider text-primary">INTEGRITY</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                Trust and transparency are the foundation of our client relationships.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
