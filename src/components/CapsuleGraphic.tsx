"use client";

import { motion } from "framer-motion";

interface CapsuleGraphicProps {
  className?: string;
  color?: "primary" | "accent" | "transparent" | "white" | "violet";
  angle?: string;
  animate?: boolean;
  delay?: number;
}

export default function CapsuleGraphic({
  className = "",
  color = "primary",
  angle = "-rotate-[35deg]",
  animate = true,
  delay = 0,
}: CapsuleGraphicProps) {
  const baseClasses = `absolute rounded-full transform ${angle}`;
  
  let colorClasses = "";
  switch (color) {
    case "primary":
      colorClasses = "bg-primary";
      break;
    case "accent":
      colorClasses = "bg-accent";
      break;
    case "white":
      colorClasses = "bg-white/5 border border-white/10";
      break;
    case "transparent":
      colorClasses = "bg-transparent border-[8px] border-primary/20";
      break;
    case "violet":
      colorClasses = "bg-violet";
      break;
  }

  const initialProps = animate ? { opacity: 0, scale: 0.9 } : {};
  const animateProps = animate ? { opacity: 1, scale: 1 } : {};

  return (
    <motion.div
      initial={initialProps}
      whileInView={animateProps}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`${baseClasses} ${colorClasses} ${className}`}
    />
  );
}
