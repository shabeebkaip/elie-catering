import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/content/categories";

const GOLD       = "#C9A15B";
const CREAM      = "#F5F1E8";
const BORDER     = "rgba(201,161,91,0.10)";

export const metadata = {
  title: "Our Cuisine | Elie Catering & Event Planning",
  description:
    "Curated collections and nine cuisines, drawn from Elie's Riyadh kitchen — Saudi, Levantine, Italian, Sushi and more, hosted for weddings, corporate, VIP and Ramadan.",
};

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";

  const cuisineCount = categories.length;
  const cuisineWordEn = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"][cuisineCount] ?? String(cuisineCount);
  const cuisineWordAr = ["", "مطبخ واحد", "مطبخان", "ثلاثة مطابخ", "أربعة مطابخ", "خمسة مطابخ", "ستة مطابخ", "سبعة مطابخ", "ثمانية مطابخ", "تسعة مطابخ", "عشرة مطابخ"][cuisineCount] ?? `${cuisineCount} مطابخ`;

  return (
    <>
      {/* Marble fixed background — same device as Service Detail + Collection page */}
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
          <section className="px-6 md:px-14 pt-32 md:pt-44 pb-16 md:pb-24 max-w-[1380px] mx-auto">
            <div className={`flex items-center gap-3 mb-7 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-9 h-px" style={{ background: GOLD }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                {isAr ? "مطبخنا" : "Our Cuisine"}
              </span>
            </div>

            <h1
              className={`font-serif font-light tracking-tight ${isAr ? "text-right" : ""}`}
              style={{
                fontSize: "clamp(48px, 8.8vw, 124px)",
                lineHeight: 0.94,
                color: CREAM,
              }}
            >
              {isAr ? (
                <>
                  <em>{cuisineWordAr}.</em>
                  <br />
                  مطبخ واحد.
                </>
              ) : (
                <>
                  <em>{cuisineWordEn} cuisines.</em>
                  <br />
                  One kitchen.
                </>
              )}
            </h1>

            <div className={`mt-10 md:mt-14 flex items-start gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-20 h-px flex-shrink-0 mt-3" style={{ background: GOLD }} />
              <p
                className="font-light"
                style={{
                  fontSize: "clamp(15px, 1.55vw, 19px)",
                  color: "rgba(245,241,232,0.55)",
                  lineHeight: 1.75,
                  maxWidth: 560,
                }}
              >
                {isAr
                  ? "من تذوّق سداسي العشاء إلى محطات الطهي الحي، من الكنابيه الصامت إلى مأدبة المنسف — تشكيلات منسّقة لكل احتفال."
                  : "From sixteen-course tastings to single-station live cooking, from the silent canapé to the long table of mansaf — curated collections for every celebration."}
              </p>
            </div>
          </section>


          {/* ══ BY CUISINE ════════════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-20 md:py-28"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="max-w-[1380px] mx-auto">
              <div className={`mb-12 md:mb-16 ${isAr ? "text-right" : ""}`}>
                <div className={`flex items-center gap-3 mb-5 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "حسب المطبخ" : "By Cuisine"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(28px, 3.8vw, 48px)", color: CREAM, lineHeight: 1.1 }}
                >
                  {isAr ? (
                    <>أو ابنِ من <em style={{ color: GOLD, fontStyle: "normal" }}>مطابخنا</em>.</>
                  ) : (
                    <>Or build from our <em className="italic" style={{ color: GOLD }}>{cuisineWordEn.toLowerCase()} kitchens</em>.</>
                  )}
                </h2>
              </div>

              {/* 3×N grid — sharp corners, border instead of shadow, no dish counts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {categories.map((cat, i) => (
                  <Link
                    key={cat.slug}
                    href={`/${locale}/menu/${cat.slug}`}
                    className="group block no-underline transition-colors duration-300"
                    style={{
                      background: "rgba(10,10,10,0.78)",
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <Image
                        src={cat.cardImage}
                        alt={isAr ? cat.name.ar : cat.name.en}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.30)" }} />
                      {/* Numbered editorial tag */}
                      <span
                        className="absolute top-5 left-5 font-serif font-light"
                        style={{
                          fontSize: 12,
                          color: "rgba(245,241,232,0.42)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className={`p-6 md:p-7 ${isAr ? "text-right" : ""}`}>
                      <div className={`flex items-baseline gap-3 mb-2 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                        <h3
                          className="font-serif font-light leading-snug"
                          style={{
                            fontSize: 22,
                            color: CREAM,
                            fontStyle: isAr ? "normal" : "italic",
                          }}
                        >
                          {isAr ? cat.name.ar : cat.name.en}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "rgba(245,241,232,0.42)",
                          lineHeight: 1.65,
                        }}
                      >
                        {isAr ? cat.eyebrow.ar : cat.eyebrow.en}
                      </p>
                      <div
                        className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-bold transition-colors duration-300 group-hover:text-[#dfc07a]"
                        style={{ color: "rgba(201,161,91,0.6)" }}
                      >
                        {isAr ? "استكشف" : "Explore"}
                        <span aria-hidden>{isAr ? "←" : "→"}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ══ BUILD YOUR EVENT — final invitation ══════════════ */}
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
                  {isAr ? "تنظّم فعالية؟" : "Hosting Soon?"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
              </div>

              <h2
                className="font-serif font-light leading-[0.95] mb-6"
                style={{ fontSize: "clamp(34px, 5.5vw, 64px)", color: CREAM }}
              >
                <em>{isAr ? "حدّثنا عن فعاليتك" : "Tell us about your event"}</em>
              </h2>

              <p
                className="font-light leading-relaxed mx-auto mb-10"
                style={{ fontSize: 14.5, color: "rgba(245,241,232,0.42)", maxWidth: 440, lineHeight: 1.75 }}
              >
                {isAr
                  ? "ابدأ من تشكيلة، أو ابنِ قائمتك طبقاً طبقاً. فريقنا يردّ خلال 24 ساعة بسرية تامة."
                  : "Start from a collection, or build your menu dish by dish. Our team responds within 24 hours, in complete discretion."}
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
                {isAr ? "اطلب عرض السعر" : "Request a Proposal"}
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
