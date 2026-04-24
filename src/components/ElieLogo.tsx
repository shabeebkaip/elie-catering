"use client";

import Image from "next/image";

interface ElieLogoProps {
  color?: string;
  size?: number;
  className?: string;
  onlyName?: boolean; // New prop to crop the tagline
}

export default function ElieLogo({ size = 40, className = "", color = "#bb8a3c", onlyName = true }: ElieLogoProps) {
  const isWhite = color.toLowerCase() === "#fff" || color.toLowerCase() === "white";
  
  // If onlyName is true, we crop the bottom portion of the logo image
  // The tagline "Catering & Event Planning" is at the bottom
  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ 
        width: size, 
        height: onlyName ? size * 0.45 : size * 0.7, 
        filter: isWhite ? "brightness(0) invert(1)" : "none",
        overflow: "hidden"
      }}
    >
      <div 
        className="relative w-full"
        style={{ 
          height: size * 0.7, // Original full height to keep aspect ratio
          marginTop: 0
        }}
      >
        <Image
          src="/images/elite-logo.webp"
          alt="Elie Logo"
          fill
          className="object-contain object-top" // Force it to the top to show the name
          priority
        />
      </div>
    </div>
  );
}
