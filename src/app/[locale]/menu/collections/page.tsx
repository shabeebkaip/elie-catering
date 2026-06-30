import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/content/collections";
import { events } from "@/content/events";
import type { Collection, EventId } from "@/content/types";

const GOLD       = "#C9A15B";
const CREAM      = "#F5F1E8";
const BORDER     = "rgba(201,161,91,0.10)";
const BORDER_STR = "rgba(201,161,91,0.22)";

export const metadata = {
  title: "All Collections | Elie Catering & Event Planning",
  description:
    "Twenty-two curated catering collections — for weddings, corporate events, VIP receptions, private gatherings, Ramadan, birthdays and government hosting.",
};

export default async function CollectionsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";

  const groups = groupByPrimaryEvent(collections);
  const totalWord = numberWord(collections.length, isAr);

  return (
    <>
      {/* Marble background — same device as Menu landing + Collection detail */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Image src="/images/about/marble.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.93)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 18% 22%, rgba(201,161,91,0.05), transparent)," +
              "radial-gradient(ellipse 55% 50% at 82% 78%, rgba(201,161,91,0.04), transparent)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />

        <main className="min-h-screen" style={{ background: "transparent" }}>

          {/* ══ HERO ══════════════════════════════════════════════ */}
          <section className="px-6 md:px-14 pt-32 md:pt-44 pb-14 md:pb-20 max-w-[1380px] mx-auto">

            {/* Breadcrumb */}
            <nav
              aria-label={isAr ? "تنقل" : "breadcrumb"}
              className={`flex items-center gap-2 mb-10 md:mb-14 text-[10.5px] tracking-[0.2em] uppercase font-bold ${isAr ? "flex-row-reverse" : ""}`}
              style={{ color: "rgba(201,161,91,0.4)" }}
            >
              <Link href={`/${locale}/menu`} className="no-underline transition-colors hover:text-accent" style={{ color: "rgba(201,161,91,0.5)" }}>
                {isAr ? "القائمة" : "Menu"}
              </Link>
              <span style={{ color: "rgba(201,161,91,0.25)" }}>{isAr ? "‹" : "›"}</span>
              <span style={{ color: "rgba(201,161,91,0.75)" }}>{isAr ? "جميع التشكيلات" : "All Collections"}</span>
            </nav>

            <div className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-9 h-px" style={{ background: GOLD }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                {isAr ? "التشكيلات" : "Collections"}
              </span>
            </div>

            <h1
              className={`font-serif font-light tracking-tight ${isAr ? "text-right" : ""}`}
              style={{
                fontSize: "clamp(40px, 7vw, 96px)",
                lineHeight: 0.98,
                color: CREAM,
              }}
            >
              {isAr ? (
                <>
                  <em>{totalWord}</em>
                  <br />
                  قائمة منسّقة.
                </>
              ) : (
                <>
                  <em>{totalWord} curated</em>
                  <br />
                  menus.
                </>
              )}
            </h1>

            <div className={`mt-10 md:mt-14 flex items-start gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-20 h-px flex-shrink-0 mt-3" style={{ background: GOLD }} />
              <p
                className="font-light"
                style={{
                  fontSize: "clamp(14px, 1.45vw, 18px)",
                  color: "rgba(245,241,232,0.55)",
                  lineHeight: 1.75,
                  maxWidth: 540,
                }}
              >
                {isAr
                  ? "نقاط بداية لكل احتفال — من الزفاف الكبير إلى عشاء المجلس الهادئ. كل تشكيلة قابلة للتعديل الكامل قبل طلب العرض."
                  : "A starting point for every celebration — from the grand wedding to the quiet majlis dinner. Every collection is fully customizable before you request a proposal."}
              </p>
            </div>
          </section>

          {/* ══ COLLECTIONS BY EVENT TYPE ════════════════════════ */}
          {groups.map(({ event, items }) => (
            <section
              key={event.id}
              className="px-6 md:px-14 py-16 md:py-24"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1380px] mx-auto">
                {/* Section heading */}
                <div className={`mb-10 md:mb-14 ${isAr ? "text-right" : ""}`}>
                  <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                    <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                    <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                      {isAr ? `لـ ${event.name.ar}` : `For ${event.name.en}`}
                    </span>
                    <span className="text-[9px] tracking-[0.2em]" style={{ color: "rgba(201,161,91,0.35)" }}>
                      · {items.length}
                    </span>
                  </div>
                  <h2
                    className="font-serif font-light"
                    style={{ fontSize: "clamp(24px, 2.8vw, 36px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                  >
                    {isAr ? event.tagline.ar : event.tagline.en}
                  </h2>
                </div>

                {/* Collections grid — varies by group size */}
                <div
                  className={`grid grid-cols-1 ${
                    items.length === 1
                      ? "lg:grid-cols-1"
                      : items.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                  } gap-5 md:gap-6`}
                >
                  {items.map((c) => (
                    <CollectionCard key={c.id} collection={c} locale={locale} isAr={isAr} />
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* ══ FINAL INVITATION ══════════════════════════════════ */}
          <section
            className="relative px-6 py-24 md:py-32 overflow-hidden"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.72)" }} />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(201,161,91,0.06), transparent)" }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,161,91,0.32), transparent)" }}
            />

            <div className="max-w-2xl mx-auto text-center relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-8 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
                <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.52)" }}>
                  {isAr ? "هل تحتاج تخصيصاً؟" : "Want Something Bespoke?"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
              </div>

              <h2
                className="font-serif font-light leading-[0.95] mb-6"
                style={{ fontSize: "clamp(32px, 5vw, 60px)", color: CREAM }}
              >
                <em>{isAr ? "نصمّم لك تشكيلتك" : "We'll design one for you"}</em>
              </h2>

              <p
                className="font-light leading-relaxed mx-auto mb-10"
                style={{ fontSize: 14.5, color: "rgba(245,241,232,0.42)", maxWidth: 460, lineHeight: 1.75 }}
              >
                {isAr
                  ? "إذا لم تجد ما يناسبك بالضبط، يصمّم فريقنا الطهوي تشكيلة خاصة وفق رؤيتك."
                  : "If none of these fit perfectly, our culinary team will design a bespoke collection around your vision."}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-[10.5px] tracking-[0.24em] uppercase font-bold no-underline transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, #dfc07a 50%, ${GOLD} 100%)`,
                  color: "#050505",
                  boxShadow: "0 12px 44px rgba(201,161,91,0.36)",
                }}
              >
                {isAr ? "اطلب استشارة" : "Request a Consultation"}
                <span aria-hidden className="opacity-60">{isAr ? "←" : "→"}</span>
              </Link>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}

/* ── pieces ──────────────────────────────────────────────────── */

function CollectionCard({
  collection: c,
  locale,
  isAr,
}: {
  collection: Collection;
  locale: string;
  isAr: boolean;
}) {
  return (
    <Link
      href={`/${locale}/menu/collections/${c.slug}`}
      className="group block no-underline transition-colors duration-300"
      style={{
        background: "rgba(10,10,10,0.78)",
        border: `1px solid ${BORDER}`,
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={c.image}
          alt={isAr ? c.name.ar : c.name.en}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.25)" }} />
        {c.signature && (
          <div className="absolute top-4 left-4">
            <span
              className="px-2.5 py-1 text-[9px] tracking-[0.26em] uppercase font-bold backdrop-blur-sm"
              style={{
                background: "rgba(201,161,91,0.14)",
                border: `1px solid ${BORDER_STR}`,
                color: GOLD,
                borderRadius: 2,
              }}
            >
              {isAr ? "مميزة" : "Signature"}
            </span>
          </div>
        )}
      </div>

      <div className={`p-6 md:p-7 ${isAr ? "text-right" : ""}`}>
        <span
          className="block text-[9.5px] tracking-[0.32em] uppercase font-bold mb-2"
          style={{ color: GOLD }}
        >
          {isAr ? c.eyebrow.ar : c.eyebrow.en}
        </span>
        <h3
          className="font-serif font-light leading-snug mb-3"
          style={{ fontSize: 20, color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
        >
          {isAr ? c.name.ar : c.name.en}
        </h3>
        <p
          className="font-light line-clamp-2"
          style={{ fontSize: 13, color: "rgba(245,241,232,0.5)", lineHeight: 1.65 }}
        >
          {isAr ? c.description.ar : c.description.en}
        </p>

        <div
          className={`mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-bold transition-colors duration-300 group-hover:text-[#dfc07a] ${isAr ? "flex-row-reverse" : ""}`}
          style={{ color: "rgba(201,161,91,0.6)" }}
        >
          {isAr ? "استكشف" : "Explore"}
          <span aria-hidden>{isAr ? "←" : "→"}</span>
        </div>
      </div>
    </Link>
  );
}

/* ── helpers ─────────────────────────────────────────────────── */

function groupByPrimaryEvent(
  list: Collection[],
): { event: (typeof events)[number]; items: Collection[] }[] {
  // Each collection appears under its primary (first) event type, never duplicated.
  // Signature-first within each group, then insertion order.
  const byEvent = new Map<EventId, Collection[]>();
  for (const c of list) {
    const primary = c.forEventIds[0];
    if (!primary) continue;
    const bucket = byEvent.get(primary) ?? [];
    bucket.push(c);
    byEvent.set(primary, bucket);
  }
  for (const [k, items] of byEvent) {
    items.sort((a, b) => Number(!!b.signature) - Number(!!a.signature));
    byEvent.set(k, items);
  }
  return events
    .filter((e) => byEvent.has(e.id))
    .map((e) => ({ event: e, items: byEvent.get(e.id)! }));
}

const WORDS_EN: Record<number, string> = {
  20: "Twenty", 21: "Twenty-one", 22: "Twenty-two", 23: "Twenty-three", 24: "Twenty-four",
  25: "Twenty-five",
};
const WORDS_AR: Record<number, string> = {
  20: "عشرون", 21: "إحدى وعشرون", 22: "اثنتان وعشرون", 23: "ثلاث وعشرون",
  24: "أربع وعشرون", 25: "خمس وعشرون",
};
function numberWord(n: number, isAr: boolean): string {
  return (isAr ? WORDS_AR[n] : WORDS_EN[n]) ?? String(n);
}
