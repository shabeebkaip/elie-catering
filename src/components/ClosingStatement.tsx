"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClosingStatement() {
  return (
    <section style={{ position: "relative", padding: "140px 80px", background: "#C89B3C", color: "#3B2A5A", overflow: "hidden" }}>
      {/* Cream capsule top-right */}
      <div style={{ position: "absolute", top: -100, right: -80, width: 220, height: 440, borderRadius: 110, background: "#FAF6EF", transform: "rotate(-25deg)", opacity: 0.95 }} />
      {/* Purple capsule mid-right */}
      <div style={{ position: "absolute", top: 100, right: 140, width: 140, height: 280, borderRadius: 70, background: "#3B2A5A", transform: "rotate(-25deg)", opacity: 0.5 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", maxWidth: 900 }}
      >
        <p style={{
          fontSize: 17, lineHeight: 1.8, color: "#fff", margin: "0 0 36px", fontWeight: 500,
          maxWidth: 640, paddingLeft: 20, borderLeft: "4px solid #3B2A5A",
        }}>
          <strong>At Elie Catering and Event Planning,</strong> we believe in creating
          extraordinary experiences through luxury, creativity and impeccable
          service. Whether it is a wedding, corporate event, or private
          gathering, we are committed to making your event a masterpiece of
          sophistication and elegance.
        </p>
        <h2 style={{
          fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800,
          letterSpacing: -4, lineHeight: 0.95, textTransform: "uppercase",
          fontSize: 140, color: "#fff", margin: "20px 0 40px",
        }}>
          Book your<br />event.
        </h2>
        <Link
          href="#contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "20px 44px", borderRadius: 999,
            fontSize: 14, letterSpacing: 1.5,
            fontFamily: "var(--font-inter, sans-serif)", fontWeight: 500,
            textTransform: "uppercase", textDecoration: "none",
            background: "#3B2A5A", color: "#FAF6EF",
          }}
        >
          Begin a conversation →
        </Link>
      </motion.div>

      {/* Giant Elie watermark bottom-right */}
      <div style={{
        position: "absolute", right: 40, bottom: -120,
        fontFamily: "var(--font-fraunces, serif)", fontWeight: 400,
        lineHeight: 0.8, pointerEvents: "none",
        display: "flex", alignItems: "baseline", color: "#fff",
        userSelect: "none",
      }}>
        <span style={{ fontSize: 360 }}>E</span>
        <span style={{ fontSize: 460, fontStyle: "italic", fontWeight: 300, transform: "translateY(5%)", display: "inline-block" }}>l</span>
        <span style={{ fontSize: 360 }}>ie</span>
      </div>
    </section>
  );
}
