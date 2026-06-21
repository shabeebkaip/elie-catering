"use client";

import { useState, useEffect } from "react";

export type SectionTab = { id: string; title: string };

const IVORY_BLUR = "rgba(250, 248, 245, 0.82)";
const CHARCOAL = "#1C1917";
const BORDER = "rgba(0,0,0,0.06)";

export default function MenuSectionTabs({ tabs }: { tabs: SectionTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  useEffect(() => {
    if (tabs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 }
    );

    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tabs]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActive(id);
  };

  if (tabs.length <= 1) return null;

  return (
    <div
      className="sticky z-20 overflow-x-auto"
      style={{
        top: "72px",
        background: IVORY_BLUR,
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
        borderBottom: `1px solid ${BORDER}`,
        scrollbarWidth: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "6px",
          padding: "10px clamp(24px, 6vw, 96px)",
          width: "max-content",
        }}
      >
        {tabs.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: active === id ? CHARCOAL : "transparent",
              color: active === id ? "#fff" : "rgba(0,0,0,0.52)",
              border: `1px solid ${active === id ? CHARCOAL : "transparent"}`,
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "10.5px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.25s ease",
            }}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
