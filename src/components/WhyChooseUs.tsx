"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const expertiseRows = [
  {
    t: "Unparalleled expertise",
    d: "With years of experience, Elie Catering has earned a reputation for excellence in event management and catering. Our seasoned professionals are committed to bringing your vision to life with creativity, precision and professionalism.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Luxury and elegance",
    d: "We ensure luxury in every detail, from concept to presentation, creating sophisticated and elegant experiences that leave a lasting impression.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Customized solutions",
    d: "Every event is built from a blank page. Allergens, stories, the wine your grandfather loved — a menu made once, exactly for you.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    t: "Culinary excellence",
    d: "We cook from a pantry built each week at market, guided by the season and the chef's notebook. No dish is ever served twice in quite the same way.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
  },
  {
    t: "Seamless execution",
    d: "One producer. One timeline. One standard. The seams you usually see between vendors simply disappear.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    t: "Commitment to quality",
    d: "Quality is not a claim — it is the list of names of the farmers we buy from, the suppliers we've kept for a decade, and the people we trained ourselves.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
  },
];

const whyCards = [
  { 
    t: "A single point of contact", 
    d: "One producer from first call to last candle. No vendor seams.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    t: "In-house craftspeople", 
    d: "Chefs, florists, service — trained under one roof, to one standard.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    t: "Fourteen years of memory", 
    d: "Institutional knowledge you can only build by doing this for a long time.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function WhyChooseUs() {
  return (
    <div id="why-us" className="overflow-hidden">
      {/* Marble intro with Image Cards - Updated to Large Serif Title */}
      <section className="section-padding bg-cream relative text-center pb-32 md:pb-48">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          <div className="absolute top-[-10%] right-[10%] w-[300px] h-[800px] bg-primary rounded-full rotate-[-45deg]" />
          <div className="absolute bottom-[-10%] left-[10%] w-[300px] h-[800px] bg-accent rounded-full rotate-[-45deg]" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif font-light tracking-[-0.02em] leading-[0.85] uppercase text-accent mx-auto max-w-5xl text-[clamp(64px,12vw,120px)]"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="text-base md:text-xl leading-relaxed text-body max-w-2xl mx-auto mt-12 mb-20 md:mb-32 font-light opacity-80"
        >
          Choosing Elie Catering and Event Planning means selecting a partner
          who understands the nuances of crafting unforgettable events.
        </motion.p>

        {/* High-End Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 max-w-7xl mx-auto relative z-10">
          {whyCards.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover="hover"
              className="flex flex-col group cursor-pointer"
            >
              {/* Arched Image Container */}
              <div className="relative aspect-[4/5] rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl mb-12 border-[12px] border-white bg-white transition-transform duration-500 group-hover:scale-[1.02]">
                <motion.div 
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image src={v.img} alt={v.t} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </motion.div>
                {/* Floating Number Badge */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-accent flex items-center justify-center font-serif italic text-2xl shadow-xl border-2 border-white/20">
                  {i + 1}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center px-4 transition-transform duration-500 group-hover:translate-y-[-5px]">
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-5 font-normal italic tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                  {v.t}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-body opacity-80 group-hover:opacity-100 transition-opacity font-light">
                  {v.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alternating expertise rows - Modernized */}
      <section className="bg-white">
        {expertiseRows.map((f, i) => {
          const imgLeft = i % 2 === 0;
          return (
            <motion.div
              key={f.t}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[650px] overflow-hidden"
            >
              {/* Image side */}
              <div className={`relative min-h-[400px] md:min-h-full overflow-hidden ${imgLeft ? "lg:order-1" : "lg:order-2"} flex items-center justify-center p-8 md:p-16`}>
                <div className="relative w-full h-full rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl">
                  <Image src={f.img} alt={f.t} fill className="object-cover transition-transform duration-1000 hover:scale-110" sizes="50vw" />
                </div>
              </div>

              {/* Text side */}
              <div className={`relative overflow-hidden flex flex-col justify-center p-8 md:p-16 lg:p-24 ${
                imgLeft ? "lg:order-2 bg-primary text-cream" : "lg:order-1 bg-[#FAF6EF] text-primary"
              }`}>
                {/* Background decoration */}
                <div className={`absolute w-60 h-[500px] rounded-full opacity-[0.07] rotate-[22deg] ${
                  imgLeft ? "-top-20 -right-20 bg-accent" : "-bottom-20 -left-20 bg-primary"
                }`} />

                <div className="relative z-10">
                  <div className={`text-[10px] tracking-[0.4em] uppercase font-bold mb-10 flex items-center gap-4 ${
                    imgLeft ? "text-accent" : "text-accent"
                  }`}>
                    <div className="w-8 h-[1px] bg-accent" />
                    <span>Expertise 0{i + 1}</span>
                  </div>
                  <h3 className={`font-serif font-light tracking-tighter leading-[0.85] uppercase mb-10 text-[clamp(48px,8vw,80px)] ${
                    imgLeft ? "text-white" : "text-primary"
                  }`}>
                    {f.t}
                  </h3>
                  <p className={`text-base md:text-xl leading-relaxed font-light ${
                    imgLeft ? "text-cream/80" : "text-primary/70"
                  }`}>
                    {f.d}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
