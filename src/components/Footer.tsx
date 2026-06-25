"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.55)";
const CREAM_MUTED = "rgba(245,242,234,0.28)";
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];

type IconKey = "instagram" | "linkedin" | "tiktok" | "snapchat" | "pinterest" | "whatsapp";

const CONTENT = {
  en: {
    quote: "Where exceptional taste meets the art of celebration.",
    tagline: "CATERING & EVENT PLANNING · RIYADH",
    consultation: "Private Consultation",
    location: "Riyadh, Saudi Arabia",
    phone: "+966 54 435 6564",
    email: "info@elie-catering.com",
    hours: "Sunday – Thursday · 10:00 – 18:00",
    whatsapp: "WhatsApp",
    services: "Services",
    serviceLinks: ["Weddings", "Corporate", "Private Dining", "Galas"],
    follow: "Follow",
    socials: [
      { name: "Instagram", href: "https://www.instagram.com/eliecatering.sa", icon: "instagram" as IconKey },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/elie-catering", icon: "linkedin" as IconKey },
      { name: "TikTok", href: "https://www.tiktok.com/@eliecatering", icon: "tiktok" as IconKey },
      { name: "Snapchat", href: "https://www.snapchat.com/add/eliecatering", icon: "snapchat" as IconKey },
      { name: "Pinterest", href: "https://www.pinterest.com/eliecatering", icon: "pinterest" as IconKey },
      { name: "WhatsApp", href: "https://wa.me/966544356564", icon: "whatsapp" as IconKey },
    ],
    copyright: "© 2026 Elie Catering & Event Planning",
    terms: "Terms",
    privacy: "Privacy",
    signature: "Crafted with Elegance",
    designedIn: "Designed in Saudi Arabia",
  },
  ar: {
    quote: "حيث يلتقي الذوق الرفيع بفن الاحتفال.",
    tagline: "التموين وتنظيم الفعاليات · الرياض",
    consultation: "استشارة خاصة",
    location: "الرياض، المملكة العربية السعودية",
    phone: "+966 54 435 6564",
    email: "info@elie-catering.com",
    hours: "الأحد – الخميس · ١٠:٠٠ – ١٨:٠٠",
    whatsapp: "واتساب",
    services: "الخدمات",
    serviceLinks: ["الأعراس", "المؤسسات", "العشاء الخاص", "الحفلات الكبرى"],
    follow: "تابعنا",
    socials: [
      { name: "إنستغرام", href: "https://www.instagram.com/eliecatering.sa", icon: "instagram" as IconKey },
      { name: "لينكد إن", href: "https://www.linkedin.com/company/elie-catering", icon: "linkedin" as IconKey },
      { name: "تيك توك", href: "https://www.tiktok.com/@eliecatering", icon: "tiktok" as IconKey },
      { name: "سناب شات", href: "https://www.snapchat.com/add/eliecatering", icon: "snapchat" as IconKey },
      { name: "بينتريست", href: "https://www.pinterest.com/eliecatering", icon: "pinterest" as IconKey },
      { name: "واتساب", href: "https://wa.me/966544356564", icon: "whatsapp" as IconKey },
    ],
    copyright: "© 2026 إيلي للتموين وتنظيم الفعاليات",
    terms: "الشروط",
    privacy: "الخصوصية",
    signature: "صُنع بأناقة",
    designedIn: "صُمِّم في المملكة العربية السعودية",
  },
} as const;

/* ── Inline SVG icons ── */
function IcoInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IcoLinkedIn() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IcoTikTok() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.8 1.53V6.78a4.85 4.85 0 0 1-1.03-.09z" />
    </svg>
  );
}
function IcoSnapchat() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.2 2C9.26 2 6.24 3.56 6.24 7.2v1.4c-.52.12-1.1.3-1.32.82-.2.48-.06.98.2 1.36-.14.42-.46 1.1-1.12 1.56-.24.16-.36.42-.3.7.08.36.5.58.84.72l.16.1c.18.16.24.42.1.64-.2.34-.56.5-.9.5-.42 0-.7.14-.7.4 0 .22.14.42.72.62.84.28 1.8.82 2.06 2.02.06.28.3.46.6.46l.18-.02c.68-.1 1.3-.44 1.94-.44.62 0 1.2.18 1.84.48.46.22.94.34 1.44.34s.98-.12 1.44-.34c.64-.3 1.22-.48 1.84-.48.64 0 1.26.34 1.94.44l.18.02c.3 0 .54-.18.6-.46.26-1.2 1.22-1.74 2.06-2.02.58-.2.72-.4.72-.62 0-.26-.28-.4-.7-.4-.34 0-.7-.16-.9-.5-.14-.22-.08-.48.1-.64l.16-.1c.34-.14.76-.36.84-.72.06-.28-.06-.54-.3-.7-.66-.46-.98-1.14-1.12-1.56.26-.38.4-.88.2-1.36-.22-.52-.8-.7-1.32-.82V7.2C18.16 3.56 15.14 2 12.2 2z" />
    </svg>
  );
}
function IcoPinterest() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.17 9.44 7.67 11.17-.1-.94-.2-2.37.04-3.4.22-.93 1.46-6.17 1.46-6.17s-.37-.74-.37-1.84c0-1.73.99-3.02 2.23-3.02 1.05 0 1.56.79 1.56 1.73 0 1.05-.67 2.63-1.02 4.09-.29 1.22.61 2.22 1.8 2.22 2.17 0 3.84-2.29 3.84-5.59 0-2.92-2.1-4.97-5.1-4.97-3.47 0-5.51 2.6-5.51 5.29 0 1.05.4 2.17.9 2.78.1.12.11.23.08.35-.09.37-.29 1.22-.33 1.39-.05.22-.17.27-.39.16-1.47-.68-2.39-2.84-2.39-4.57 0-3.72 2.7-7.14 7.78-7.14 4.09 0 7.27 2.91 7.27 6.8 0 4.06-2.55 7.32-6.1 7.32-1.19 0-2.31-.62-2.7-1.35l-.73 2.73c-.27 1.02-1 2.3-1.49 3.07C9.57 23.81 10.76 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  );
}
function IcoWhatsApp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const ICON_MAP: Record<IconKey, () => React.ReactElement> = {
  instagram: IcoInstagram,
  linkedin: IcoLinkedIn,
  tiktok: IcoTikTok,
  snapchat: IcoSnapchat,
  pinterest: IcoPinterest,
  whatsapp: IcoWhatsApp,
};

/* ── Full-width gold hairline ── */
function GoldRule({ isAr }: { isAr: boolean }) {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(to ${isAr ? "left" : "right"}, transparent 0%, rgba(199,154,59,0.16) 18%, rgba(199,154,59,0.16) 82%, transparent 100%)`,
    }} />
  );
}

/* ── Tiny section label ── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 9, letterSpacing: "0.42em",
      textTransform: "uppercase" as const,
      color: GOLD, opacity: 0.65, fontWeight: 700,
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.04 as number },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

/* ── Component ── */
export default function Footer() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const c = isAr ? CONTENT.ar : CONTENT.en;

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #07001A 0%, #09001F 55%, #060015 100%)",
        color: CREAM,
        overflow: "hidden",
      }}
    >
      <style>{`
        /* Info links */
        .ft-link {
          position: relative;
          text-decoration: none;
          color: ${CREAM_MUTED};
          font-weight: 300;
          display: inline-block;
          transition: color 0.26s ease;
        }
        .ft-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 100%; height: 1px;
          background: ${GOLD};
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.36s ease;
        }
        .ft-link:dir(rtl)::after { transform-origin: right center; }
        .ft-link:hover { color: ${CREAM}; }
        .ft-link:hover::after { transform: scaleX(1); }

        /* Social icon buttons */
        .ft-ico {
          color: rgba(245,242,234,0.30);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.22s ease, transform 0.22s ease, filter 0.22s ease;
        }
        .ft-ico:hover {
          color: ${GOLD};
          transform: translateY(-2px);
          filter: drop-shadow(0 2px 7px rgba(199,154,59,0.48));
        }

        /* Bottom nav */
        .ft-nav {
          text-decoration: none;
          color: rgba(245,242,234,0.22);
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 600;
          transition: color 0.22s ease;
        }
        .ft-nav:hover { color: ${GOLD}; }

        /* Desktop middle grid */
        @media (min-width: 768px) {
          .ft-mid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }

        /* Mobile bottom bar */
        @media (max-width: 639px) {
          .ft-bot {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>

      {/* Architectural grid */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(199,154,59,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(199,154,59,0.016) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Radial glow */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 480, height: 320,
        background: "radial-gradient(ellipse 60% 55% at 50% 10%, rgba(199,154,59,0.04) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.026'/%3E%3C/svg%3E")`,
        backgroundSize: "180px 180px",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* ── CONTENT ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto", padding: "0 clamp(24px,6vw,80px)" }}>

        {/* ── HERO: Logo + Quote ── */}
        <div style={{ textAlign: "center", padding: "clamp(40px,5vw,60px) 0 clamp(22px,2.8vw,32px)" }}>

          <motion.div {...fade(0)} style={{ marginBottom: "clamp(12px,1.5vw,18px)" }}>
            <Link href={`/${locale}`} style={{ display: "inline-block", textDecoration: "none" }}>
              <img
                src="/images/elite-logo.webp"
                alt="Elie Catering"
                style={{
                  width: "clamp(88px,9vw,136px)",
                  height: "auto",
                  transition: "opacity 0.36s ease, transform 0.36s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.75";
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </Link>
          </motion.div>

          <motion.p
            {...fade(0.1)}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(14px,1.8vw,22px)",
              fontWeight: 300,
              color: CREAM,
              opacity: 0.46,
              lineHeight: 1.5,
              maxWidth: 560,
              margin: "0 auto clamp(8px,1vw,13px)",
              letterSpacing: "-0.01em",
            }}
          >
            {c.quote}
          </motion.p>

          <motion.span
            {...fade(0.18)}
            style={{
              display: "inline-block",
              color: GOLD, opacity: 0.48,
              fontSize: 8, letterSpacing: "0.46em",
              textTransform: "uppercase", fontWeight: 700,
            }}
          >
            {c.tagline}
          </motion.span>
        </div>

        {/* ── DIVIDER 1 ── */}
        <GoldRule isAr={isAr} />

        {/* ── MIDDLE: Consultation · Services · Social ── */}
        <div style={{ padding: "clamp(18px,2.2vw,28px) 0" }}>
          <div
            className="ft-mid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(22px,3vw,40px)",
              alignItems: "start",
            }}
          >
            {/* Consultation column */}
            <motion.div {...fade(0.06)}>
              <Label>{c.consultation}</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontSize: 11, color: CREAM_MUTED, letterSpacing: "0.015em", lineHeight: 1.4 }}>
                  {c.location}
                </span>
                <a href="tel:+966544356564" className="ft-link"
                  style={{ fontSize: 14, color: CREAM_BODY, letterSpacing: "0.03em", lineHeight: 1.3 }}>
                  {c.phone}
                </a>
                <a href="mailto:info@elie-catering.com" className="ft-link"
                  style={{ fontSize: 11, letterSpacing: "0.01em" }}>
                  {c.email}
                </a>
                <span style={{ fontSize: 11, color: CREAM_MUTED, letterSpacing: "0.015em", lineHeight: 1.4 }}>
                  {c.hours}
                </span>
                <div style={{ marginTop: 5 }}>
                  <a
                    href="https://wa.me/966544356564"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center",
                      gap: 6, color: GOLD,
                      fontSize: 9, letterSpacing: "0.32em",
                      textTransform: "uppercase", fontWeight: 700,
                      textDecoration: "none", opacity: 0.72,
                      transition: "opacity 0.22s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.72"; }}
                  >
                    <IcoWhatsApp />
                    {c.whatsapp}
                    <span style={{ fontSize: 10, marginInlineStart: 1 }}>{isAr ? "←" : "→"}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Services column */}
            <motion.div {...fade(0.12)}>
              <Label>{c.services}</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {c.serviceLinks.map((label) => (
                  <a key={label} href="#services" className="ft-link" style={{ fontSize: 12 }}>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social column */}
            <motion.div {...fade(0.18)}>
              <Label>{c.follow}</Label>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                gap: "10px 18px",
                justifyContent: "start",
              }}>
                {c.socials.map((s) => {
                  const Icon = ICON_MAP[s.icon];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ft-ico"
                      title={s.name}
                      aria-label={s.name}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── DIVIDER 2 ── */}
        <GoldRule isAr={isAr} />
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1400, margin: "0 auto",
        padding: "clamp(13px,1.6vw,18px) clamp(24px,6vw,80px) clamp(20px,2.5vw,32px)",
      }}>
        <div
          className="ft-bot"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "clamp(8px,1.2vw,14px)",
          }}
        >
          <span style={{
            fontSize: 9, fontWeight: 600,
            color: "rgba(245,242,234,0.18)",
            letterSpacing: "0.22em", textTransform: "uppercase",
          }}>
            {c.copyright}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px,1.8vw,20px)" }}>
            <a href="#" className="ft-nav">{c.privacy}</a>
            <div style={{ width: 1, height: 8, background: "rgba(245,242,234,0.1)" }} />
            <a href="#" className="ft-nav">{c.terms}</a>
          </div>

          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: isAr ? "flex-start" : "flex-end",
            gap: 3,
          }}>
            <span style={{
              fontSize: 9, fontWeight: 600,
              color: "rgba(245,242,234,0.15)",
              letterSpacing: "0.26em", textTransform: "uppercase",
            }}>
              {c.signature}
            </span>
            <span style={{
              fontSize: 9, fontWeight: 600,
              color: "rgba(199,154,59,0.28)",
              letterSpacing: "0.18em", textTransform: "uppercase",
            }}>
              {c.designedIn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
