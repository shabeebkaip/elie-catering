"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

const WHATSAPP = "966544356564";

const BG = "#0f0823";
const GOLD = "#B8945A";
const GOLD_LABEL = "rgba(184,148,90,0.65)";
const GOLD_FAINT = "rgba(184,148,90,0.18)";
const GOLD_FOCUS = "rgba(184,148,90,0.52)";
const GOLD_GLOW = "rgba(184,148,90,0.10)";
const TEXT = "#ede5ff";
const TEXT_DIM = "rgba(237,229,255,0.42)";
const TEXT_MUTED = "rgba(237,229,255,0.24)";
const INPUT_BG = "rgba(255,255,255,0.05)";

type Field = "name" | "phone" | "date" | "guests" | "venue" | "notes";

const INITIAL = { name: "", phone: "", date: "", guests: "", venue: "", notes: "" };

export default function MenuInquiryForm({ menuTitle }: { menuTitle: string }) {
  const [form, setForm] = useState(INITIAL);
  const [focused, setFocused] = useState<Field | null>(null);
  const [sent, setSent] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const set = (field: Field) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parts = [
      `✨ *Menu Enquiry — ${menuTitle}*`,
      ``,
      `👤 Name: ${form.name}`,
      `📱 Phone: ${form.phone}`,
      `📅 Event Date: ${form.date}`,
      `👥 Guests: ${form.guests}`,
      form.venue ? `📍 Venue: ${form.venue}` : null,
      form.notes ? `💬 Notes: ${form.notes}` : null,
    ];
    const msg = parts.filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const inputStyle = (field: Field): React.CSSProperties => ({
    width: "100%",
    background: INPUT_BG,
    border: `1px solid ${focused === field ? GOLD_FOCUS : GOLD_FAINT}`,
    borderRadius: "14px",
    padding: "15px 18px",
    color: TEXT,
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "0.01em",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxShadow: focused === field ? `0 0 0 3px ${GOLD_GLOW}` : "none",
    WebkitAppearance: "none",
    colorScheme: "dark",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: GOLD_LABEL,
    marginBottom: "9px",
  };

  const optionalTag = (
    <span style={{ color: TEXT_MUTED, fontWeight: 400, letterSpacing: "0.03em", textTransform: "none", fontSize: "10px" }}>
      — optional
    </span>
  );

  /* ── Success state ─────────────────────────────── */
  if (sent) {
    return (
      <div
        style={{
          background: BG,
          padding: "clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "52px",
            borderRadius: "999px",
            border: `1px solid ${GOLD_FAINT}`,
            marginBottom: "24px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif font-light" style={{ color: TEXT, fontSize: "clamp(22px, 3vw, 32px)", marginBottom: "10px" }}>
          Proposal Request Sent
        </h3>
        <p style={{ color: TEXT_DIM, fontSize: "14px", fontWeight: 300, lineHeight: 1.75, maxWidth: "380px", margin: "0 auto" }}>
          We&apos;ll reach out via WhatsApp shortly to discuss your event.
        </p>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────────── */
  return (
    <div
      style={{
        background: BG,
        padding: "clamp(48px, 6.5vw, 88px) clamp(24px, 6vw, 96px)",
      }}
    >
      {/* Suppress spinner arrows on number inputs */}
      <style>{`
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
        input[type=date]::-webkit-calendar-picker-indicator { opacity: 0.4; filter: invert(1); cursor: pointer; }
        ::placeholder { color: rgba(237,229,255,0.22) !important; }
      `}</style>

      <div style={{ maxWidth: "640px" }}>

        {/* Heading block */}
        <div style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
            <div style={{ width: "24px", height: "1px", background: GOLD, opacity: 0.55, flexShrink: 0 }} />
            <span style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "rgba(184,148,90,0.60)",
            }}>
              Private Enquiry
            </span>
          </div>
          <h2
            className="font-serif font-light"
            style={{
              color: TEXT,
              fontSize: "clamp(26px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Request This Experience
          </h2>
          <p style={{ color: TEXT_DIM, fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 300, lineHeight: 1.75 }}>
            Share your details and our culinary team will craft a personalised proposal for your event.
          </p>
        </div>

        {/* Hidden context */}
        <input type="hidden" name="menu" value={menuTitle} />

        <form onSubmit={handleSubmit}>

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Full name"
                value={form.name}
                onChange={set("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                style={inputStyle("name")}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                required
                autoComplete="tel"
                placeholder="+966 5XX XXX XXXX"
                value={form.phone}
                onChange={set("phone")}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
                style={inputStyle("phone")}
              />
            </div>
          </div>

          {/* Date + Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Event Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={set("date")}
                onFocus={() => setFocused("date")}
                onBlur={() => setFocused(null)}
                style={inputStyle("date")}
              />
            </div>
            <div>
              <label style={labelStyle}>Number of Guests</label>
              <input
                type="number"
                required
                min="1"
                placeholder="50"
                value={form.guests}
                onChange={set("guests")}
                onFocus={() => setFocused("guests")}
                onBlur={() => setFocused(null)}
                style={inputStyle("guests")}
              />
            </div>
          </div>

          {/* Venue */}
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Venue or Location {optionalTag}</label>
            <input
              type="text"
              autoComplete="street-address"
              placeholder="Venue name or city"
              value={form.venue}
              onChange={set("venue")}
              onFocus={() => setFocused("venue")}
              onBlur={() => setFocused(null)}
              style={inputStyle("venue")}
            />
          </div>

          {/* Notes */}
          <div style={{ marginBottom: "32px" }}>
            <label style={labelStyle}>Tell us about your event {optionalTag}</label>
            <textarea
              rows={4}
              placeholder="Dietary requirements, setup preferences, or anything else we should know..."
              value={form.notes}
              onChange={set("notes")}
              onFocus={() => setFocused("notes")}
              onBlur={() => setFocused(null)}
              style={{ ...inputStyle("notes"), resize: "none", lineHeight: 1.65 }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full sm:w-auto"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              background: btnHover ? GOLD : "transparent",
              border: `1px solid ${GOLD}`,
              color: btnHover ? "#0f0823" : GOLD,
              padding: "16px clamp(32px, 4vw, 52px)",
              borderRadius: "999px",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.45s cubic-bezier(0.19, 1, 0.22, 1)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: undefined,
            }}
          >
            Request Proposal
            <svg
              width="13" height="13"
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ transition: "transform 0.3s ease", transform: btnHover ? "translateX(3px)" : "translateX(0)" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
