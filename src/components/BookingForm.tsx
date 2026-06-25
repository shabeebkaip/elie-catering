"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";

const GOLD = "#C79A3B";
const CREAM = "#F5F2EA";
const CREAM_BODY = "rgba(245,242,234,0.62)";
const CREAM_MUTED = "rgba(245,242,234,0.32)";
const EASE: [number, number, number, number] = [0.22, 0.08, 0.24, 1.0];
const WA = "966544356564";

const WaSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: 15, height: 15, flexShrink: 0 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CONTENT = {
  en: {
    eyebrow: "RESERVE YOUR DATE",
    headline1: "Begin the",
    headline2: "Conversation.",
    subtitle:
      "Our hospitality consultants are ready to craft something extraordinary with you.",
    qualities: [
      "Within 30 minutes",
      "Private consultation",
      "Complete confidentiality",
    ],
    concierge: {
      label: "Private Concierge",
      body: "Your dedicated hospitality consultant, available daily for personalised event planning.",
      support: "All enquiries treated with complete confidentiality.",
      cta: "Connect on WhatsApp",
      message: "Hello! I'd like to discuss my celebration with Elie Catering.",
    },
    formIntro: "A few details to begin the conversation.",
    fields: {
      name:    { label: "Full Name",            placeholder: "Your full name" },
      phone:   { label: "Phone Number",         placeholder: "+966 xx xxx xxxx" },
      email:   { label: "Email Address",        placeholder: "you@example.com" },
      date:    { label: "Preferred Event Date" },
      message: {
        label: "Tell us about your celebration",
        placeholder:
          "Share your vision, the occasion, and any details that will help us begin…",
      },
    },
    submit:      "Begin the Journey",
    arrow:       "→",
    divider:     "or speak with us directly",
    reassurance: "Every enquiry is personally reviewed by our hospitality team.",
    success: {
      headline: "We've received your message.",
      body: (name: string) =>
        `Thank you, ${name}. A member of our hospitality team will be in touch shortly.`,
      reset: "Send another enquiry",
    },
  },
  ar: {
    eyebrow: "احجز تاريخك",
    headline1: "ابدأ",
    headline2: "المحادثة.",
    subtitle:
      "مستشارو الضيافة لدينا على أتمّ الاستعداد لصياغة تجربة استثنائية معك.",
    qualities: [
      "خلال ٣٠ دقيقة",
      "استشارة خاصة",
      "سرية تامة",
    ],
    concierge: {
      label: "كونسيرج خاص",
      body: "مستشار ضيافتك الخاص، متاح يومياً للتخطيط المخصص لمناسبتك.",
      support: "تُعامَل جميع الاستفسارات بسرية تامة.",
      cta: "تواصل عبر واتساب",
      message: "مرحباً! أودّ مناقشة احتفالي مع إيلي للضيافة.",
    },
    formIntro: "بعض التفاصيل لبدء المحادثة.",
    fields: {
      name:    { label: "الاسم الكامل",              placeholder: "اسمك الكامل" },
      phone:   { label: "رقم الهاتف",                placeholder: "+966 xx xxx xxxx" },
      email:   { label: "البريد الإلكتروني",          placeholder: "you@example.com" },
      date:    { label: "التاريخ المفضّل للمناسبة" },
      message: {
        label: "أخبرنا عن احتفالك",
        placeholder:
          "شاركنا رؤيتك، ومناسبتك، وأي تفاصيل تساعدنا على البدء في التخطيط…",
      },
    },
    submit:      "ابدأ الرحلة",
    arrow:       "←",
    divider:     "أو تحدّث معنا مباشرةً",
    reassurance: "كل استفسار يُراجع شخصياً من قِبل فريق ضيافتنا.",
    success: {
      headline: "تلقّينا رسالتك.",
      body: (name: string) =>
        `شكراً لك، ${name}. سيتواصل معك أحد أعضاء فريق الضيافة قريباً.`,
      reset: "أرسل استفساراً آخر",
    },
  },
} as const;

type FormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
};

const EMPTY: FormData = { name: "", phone: "", email: "", date: "", message: "" };

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 as number },
    transition: { duration: 0.9, delay, ease: EASE },
  };
}

const fieldVariant = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function styleInput(el: HTMLElement, focused: boolean) {
  if (focused) {
    el.style.borderColor  = "rgba(199,154,59,0.38)";
    el.style.background   = "rgba(199,154,59,0.035)";
    el.style.boxShadow    = "0 0 0 1px rgba(199,154,59,0.15), 0 6px 24px rgba(199,154,59,0.07)";
  } else {
    el.style.borderColor  = "rgba(245,242,234,0.06)";
    el.style.background   = "rgba(255,255,255,0.035)";
    el.style.boxShadow    = "none";
  }
}

function Field({
  label,
  isAr,
  children,
}: {
  label: string;
  isAr: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span
        style={{
          display: "block",
          fontSize: 9,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "rgba(245,242,234,0.36)",
          marginBottom: isAr ? 11 : 9,
          textAlign: isAr ? "right" : "left",
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

export default function BookingForm() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const c = isAr ? CONTENT.ar : CONTENT.en;

  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(c.concierge.message)}`;

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(245,242,234,0.06)",
    borderRadius: 12,
    padding: "16px 22px",
    fontSize: 14,
    color: CREAM,
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.35s, background 0.35s, box-shadow 0.35s",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <div
      id="contact"
      className="bg-purple-deep overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Arch transition */}
      <div style={{ background: "#090022" }}>
        <div className="h-16 md:h-24 bg-purple-deep rounded-t-[80px] md:rounded-t-[120px]" />
      </div>

      <section style={{ position: "relative", overflow: "hidden" }}>

        {/* Soft radial glow behind headline */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "0%",
            left: isAr ? "auto" : "-10%",
            right: isAr ? "-10%" : "auto",
            width: "60%",
            height: "70%",
            background:
              "radial-gradient(ellipse, rgba(199,154,59,0.065) 0%, transparent 65%)",
            pointerEvents: "none",
            filter: "blur(56px)",
          }}
        />

        <div
          className="bf-outer-pad"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding:
              "clamp(56px,7vw,96px) clamp(24px,6vw,80px) clamp(72px,10vw,120px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "clamp(28px,3.5vw,48px)",
            }}
            className="bf-grid"
          >

            {/* ── EDITORIAL COLUMN ── */}
            <div className="bf-editorial">

              {/* Eyebrow */}
              <motion.div
                {...fadeUp(0)}
                style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(22px,2.8vw,32px)" }}
              >
                <div style={{ width: 28, height: 1, background: GOLD, opacity: 0.52, flexShrink: 0 }} />
                <span style={{ color: GOLD, opacity: 0.76, fontSize: 9, letterSpacing: "0.44em", textTransform: "uppercase", fontWeight: 700 }}>
                  {c.eyebrow}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                {...fadeUp(0.1)}
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 300,
                  fontSize: "clamp(38px,5.8vw,92px)",
                  color: CREAM,
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  marginBottom: "clamp(18px,2.2vw,28px)",
                  textTransform: "uppercase",
                }}
              >
                {c.headline1}
                <br />
                <em style={{ color: GOLD, fontStyle: "italic" }}>{c.headline2}</em>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                {...fadeUp(0.18)}
                style={{
                  fontSize: "clamp(13px,1.1vw,15px)",
                  color: CREAM_BODY,
                  lineHeight: isAr ? 1.9 : 1.72,
                  marginBottom: "clamp(24px,3vw,36px)",
                  fontWeight: 300,
                  maxWidth: 340,
                }}
              >
                {c.subtitle}
              </motion.p>

              {/* Quality assurances */}
              <motion.div
                {...fadeUp(0.26)}
                style={{ marginBottom: "clamp(36px,5vw,56px)" }}
              >
                {c.qualities.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: i < c.qualities.length - 1 ? 10 : 0,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: GOLD,
                        opacity: 0.45,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: CREAM_MUTED,
                        fontSize: 11,
                        letterSpacing: isAr ? "0.04em" : "0.1em",
                        fontWeight: 400,
                        lineHeight: 1.4,
                      }}
                    >
                      {q}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Private Concierge — pure typography */}
              <motion.div {...fadeUp(0.35)} style={{ maxWidth: 380 }}>

                <p style={{ color: GOLD, fontSize: 9, letterSpacing: "0.42em", textTransform: "uppercase", fontWeight: 700, opacity: 0.76, marginBottom: 16 }}>
                  {c.concierge.label}
                </p>

                <p style={{ color: CREAM, fontSize: "clamp(14px,1.15vw,16px)", fontWeight: 300, lineHeight: isAr ? 1.88 : 1.68, marginBottom: 11 }}>
                  {c.concierge.body}
                </p>

                <p style={{ color: CREAM_MUTED, fontSize: 12, fontWeight: 300, lineHeight: isAr ? 1.72 : 1.58, marginBottom: 26 }}>
                  {c.concierge.support}
                </p>

                {/* Gradient rule */}
                <div
                  style={{
                    height: 1,
                    background: `linear-gradient(${isAr ? "to left" : "to right"}, rgba(199,154,59,0.28), transparent)`,
                    marginBottom: 20,
                    width: "75%",
                  }}
                />

                {/* WhatsApp link */}
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    textDecoration: "none",
                    color: CREAM,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    opacity: 0.75,
                    transition: "opacity 0.3s, color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.opacity = "1";
                    el.style.color = GOLD;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.opacity = "0.75";
                    el.style.color = CREAM;
                  }}
                >
                  <span style={{ color: GOLD, fontWeight: 600, fontSize: 13 }}>{c.arrow}</span>
                  <WaSvg />
                  {c.concierge.cta}
                </a>
              </motion.div>
            </div>

            {/* Vertical hairline — reduced to barely perceptible */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bf-vdivider"
              style={{
                flexShrink: 0,
                width: 1,
                alignSelf: "stretch",
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(199,154,59,0.07) 20%, rgba(199,154,59,0.07) 80%, transparent 100%)",
                transformOrigin: "top center",
              }}
            />

            {/* ── FORM COLUMN ── */}
            <div style={{ flex: "1 1 0", minWidth: 0, maxWidth: "min(580px, 100%)" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="bf-form-card"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      background: "rgba(12,4,30,0.65)",
                      border: "1px solid rgba(199,154,59,0.14)",
                      borderRadius: 28,
                      padding: "clamp(52px,7vw,88px) clamp(32px,4.5vw,56px)",
                      textAlign: "center",
                      backdropFilter: "blur(28px)",
                    }}
                  >
                    {/* Monogram watermark */}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        bottom: "-8%",
                        right: isAr ? "auto" : "-4%",
                        left: isAr ? "-4%" : "auto",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: "clamp(180px,22vw,280px)",
                        fontWeight: 700,
                        color: GOLD,
                        opacity: 0.022,
                        pointerEvents: "none",
                        userSelect: "none",
                        lineHeight: 1,
                        zIndex: 0,
                      }}
                    >
                      E
                    </div>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          background: "rgba(199,154,59,0.09)",
                          border: "1px solid rgba(199,154,59,0.24)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 20px",
                        }}
                      >
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M2.5 9L7 13.5L14.5 5" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontWeight: 300,
                          fontSize: "clamp(20px,2.8vw,34px)",
                          color: CREAM,
                          marginBottom: 12,
                          lineHeight: 1.2,
                        }}
                      >
                        {c.success.headline}
                      </h3>
                      <p
                        style={{
                          color: CREAM_BODY,
                          fontSize: 14,
                          fontWeight: 300,
                          maxWidth: 300,
                          margin: "0 auto 28px",
                          lineHeight: isAr ? 1.85 : 1.65,
                        }}
                      >
                        {c.success.body(form.name)}
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm(EMPTY); }}
                        style={{
                          background: "none",
                          border: "none",
                          color: GOLD,
                          fontSize: 9,
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          cursor: "pointer",
                          opacity: 0.55,
                          fontFamily: "inherit",
                          transition: "opacity 0.25s",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; }}
                      >
                        {c.success.reset}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.9, delay: 0.16, ease: EASE }}
                    className="bf-form-card"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      background: "rgba(12,4,30,0.65)",
                      border: "1px solid rgba(245,242,234,0.06)",
                      borderRadius: 28,
                      padding: "clamp(28px,3.5vw,44px) clamp(24px,3vw,42px)",
                      backdropFilter: "blur(32px)",
                    }}
                  >
                    {/* Monogram watermark — Elie signature */}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        bottom: "-8%",
                        right: isAr ? "auto" : "-4%",
                        left: isAr ? "-4%" : "auto",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: "clamp(180px,22vw,280px)",
                        fontWeight: 700,
                        color: GOLD,
                        opacity: 0.022,
                        pointerEvents: "none",
                        userSelect: "none",
                        lineHeight: 1,
                        zIndex: 0,
                      }}
                    >
                      E
                    </div>

                    <div style={{ position: "relative", zIndex: 1 }}>
                      {/* Form intro */}
                      <p
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          color: CREAM_MUTED,
                          textTransform: "uppercase",
                          fontWeight: 500,
                          marginBottom: 26,
                          textAlign: isAr ? "right" : "left",
                        }}
                      >
                        {c.formIntro}
                      </p>

                      {/* Fields */}
                      <motion.form
                        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
                        }}
                        style={{ display: "flex", flexDirection: "column", gap: isAr ? 26 : 22 }}
                      >
                        {/* Full Name */}
                        <motion.div variants={fieldVariant}>
                          <Field label={c.fields.name.label} isAr={isAr}>
                            <input
                              required
                              type="text"
                              placeholder={c.fields.name.placeholder}
                              value={form.name}
                              onChange={(e) => set("name", e.target.value)}
                              className="bf-input"
                              style={inputBase}
                              onFocus={(e) => styleInput(e.currentTarget, true)}
                              onBlur={(e) => styleInput(e.currentTarget, false)}
                            />
                          </Field>
                        </motion.div>

                        {/* Phone + Email */}
                        <motion.div
                          variants={fieldVariant}
                          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
                          className="bf-two-col"
                        >
                          <Field label={c.fields.phone.label} isAr={isAr}>
                            <input
                              required
                              type="tel"
                              placeholder={c.fields.phone.placeholder}
                              value={form.phone}
                              onChange={(e) => set("phone", e.target.value)}
                              className="bf-input"
                              style={{ ...inputBase, direction: "ltr", textAlign: isAr ? "right" : "left" }}
                              onFocus={(e) => styleInput(e.currentTarget, true)}
                              onBlur={(e) => styleInput(e.currentTarget, false)}
                            />
                          </Field>
                          <Field label={c.fields.email.label} isAr={isAr}>
                            <input
                              required
                              type="email"
                              placeholder={c.fields.email.placeholder}
                              value={form.email}
                              onChange={(e) => set("email", e.target.value)}
                              className="bf-input"
                              style={{ ...inputBase, direction: "ltr", textAlign: isAr ? "right" : "left" }}
                              onFocus={(e) => styleInput(e.currentTarget, true)}
                              onBlur={(e) => styleInput(e.currentTarget, false)}
                            />
                          </Field>
                        </motion.div>

                        {/* Event Date */}
                        <motion.div variants={fieldVariant}>
                          <Field label={c.fields.date.label} isAr={isAr}>
                            <input
                              required
                              type="date"
                              value={form.date}
                              onChange={(e) => set("date", e.target.value)}
                              className="bf-input"
                              style={{ ...inputBase, direction: "ltr", colorScheme: "dark" }}
                              onFocus={(e) => styleInput(e.currentTarget, true)}
                              onBlur={(e) => styleInput(e.currentTarget, false)}
                            />
                          </Field>
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={fieldVariant}>
                          <Field label={c.fields.message.label} isAr={isAr}>
                            <textarea
                              rows={4}
                              placeholder={c.fields.message.placeholder}
                              value={form.message}
                              onChange={(e) => set("message", e.target.value)}
                              className="bf-input"
                              style={{ ...inputBase, resize: "none", lineHeight: isAr ? 1.8 : 1.62 }}
                              onFocus={(e) => styleInput(e.currentTarget, true)}
                              onBlur={(e) => styleInput(e.currentTarget, false)}
                            />
                          </Field>
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                          variants={fieldVariant}
                          style={{ display: "flex", flexDirection: "column", gap: 13, paddingTop: 4 }}
                        >
                          {/* Primary submit */}
                          <button
                            type="submit"
                            className="bf-submit"
                            style={{
                              position: "relative",
                              overflow: "hidden",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 8,
                              padding: "15px 28px",
                              borderRadius: 9999,
                              fontSize: 12,
                              letterSpacing: "0.14em",
                              fontWeight: 600,
                              background: "linear-gradient(105deg, #BF9234 0%, #D4AA48 60%, #C29638 100%)",
                              color: "#0A0018",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "inherit",
                              transition: "opacity 0.3s",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                          >
                            {c.submit}
                            <span style={{ opacity: 0.65 }}>{c.arrow}</span>
                            {/* Subtle shimmer — every 9 seconds */}
                            <span
                              aria-hidden
                              className="bf-shimmer"
                              style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                                backgroundSize: "200% 100%",
                                pointerEvents: "none",
                              }}
                            />
                          </button>

                          {/* Divider */}
                          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "3px 0" }}>
                            <div style={{ flex: 1, height: 1, background: "rgba(245,242,234,0.06)" }} />
                            <span style={{ color: CREAM_MUTED, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, whiteSpace: "nowrap" }}>
                              {c.divider}
                            </span>
                            <div style={{ flex: 1, height: 1, background: "rgba(245,242,234,0.06)" }} />
                          </div>

                          {/* WhatsApp */}
                          <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 9,
                              padding: "13px 24px",
                              borderRadius: 9999,
                              fontSize: 11,
                              letterSpacing: "0.12em",
                              fontWeight: 500,
                              background: "rgba(37,211,102,0.06)",
                              border: "1px solid rgba(37,211,102,0.18)",
                              color: "#25D366",
                              textDecoration: "none",
                              transition: "background 0.35s, border-color 0.35s",
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.background = "rgba(37,211,102,0.12)";
                              el.style.borderColor = "rgba(37,211,102,0.32)";
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.background = "rgba(37,211,102,0.06)";
                              el.style.borderColor = "rgba(37,211,102,0.18)";
                            }}
                          >
                            <WaSvg />
                            {c.concierge.cta}
                          </a>

                          {/* Reassurance */}
                          <p
                            style={{
                              color: CREAM_MUTED,
                              fontSize: 10,
                              letterSpacing: isAr ? "0.02em" : "0.06em",
                              textAlign: "center",
                              fontWeight: 400,
                              marginTop: 5,
                              lineHeight: isAr ? 1.72 : 1.5,
                              opacity: 0.85,
                            }}
                          >
                            {c.reassurance}
                          </p>
                        </motion.div>
                      </motion.form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bf-editorial {
          flex-shrink: 0;
          width: clamp(300px, 38vw, 440px);
        }
        .bf-vdivider { display: none; }
        @media (min-width: 1024px) {
          .bf-vdivider { display: block !important; }
        }
        @media (max-width: 1023px) {
          .bf-grid { flex-direction: column !important; }
          .bf-editorial { width: 100% !important; }
        }
        @media (max-width: 599px) {
          .bf-two-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .bf-outer-pad {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .bf-editorial {
            padding-left: clamp(20px, 5vw, 32px);
            padding-right: clamp(20px, 5vw, 32px);
          }
          .bf-form-card {
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
          }
        }
        .bf-input::placeholder {
          color: rgba(245,242,234,0.2);
          font-weight: 300;
        }
        @keyframes bf-shimmer {
          0%, 78%, 100% { background-position: -200% center; }
          86%            { background-position: 200% center; }
        }
        .bf-shimmer {
          animation: bf-shimmer 9s ease-in-out infinite;
          background-size: 200% 100%;
        }
        .bf-submit:hover .bf-shimmer {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
