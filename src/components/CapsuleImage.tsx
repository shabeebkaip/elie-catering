import Image from "next/image";
import { motion } from "framer-motion";

interface CapsuleImageProps {
  src: string;
  alt: string;
  className?: string;
  widthClass?: string;
  heightClass?: string;
  angle?: string;
  counterAngle?: string;
  scale?: string;
}

export default function CapsuleImage({
  src,
  alt,
  className = "",
  widthClass = "w-[300px] md:w-[400px]",
  heightClass = "h-[600px] md:h-[800px]",
  angle = "-rotate-[35deg]",
  counterAngle = "rotate-[35deg]",
  scale = "scale-[1.5]",
}: CapsuleImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-full transform ${angle} ${widthClass} ${heightClass} shadow-2xl ${className}`}
    >
      {/* The inner div counter-rotates and scales up to ensure the image covers the corners properly without being tilted */}
      <div className={`absolute inset-0 w-full h-full transform ${counterAngle} ${scale} origin-center flex items-center justify-center`}>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}
