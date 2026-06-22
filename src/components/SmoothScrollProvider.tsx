"use client";

import ReactLenis, { useLenis } from "lenis/react";

function FramerMotionSync() {
  useLenis(() => {
    /* Lenis ticks on every frame; this hook keeps Framer Motion's
       native scroll listeners in sync with the smoothed position. */
  });
  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
        overscroll: false,
      }}
    >
      <FramerMotionSync />
      {children}
    </ReactLenis>
  );
}
