import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToEventButton from "@/components/my-event/AddToEventButton";
import { categories } from "@/content/categories";
import { dishes } from "@/content/dishes";
import type { CategoryId, Dish } from "@/content/types";

const GOLD       = "#C9A15B";
const CREAM      = "#F5F1E8";
const BORDER     = "rgba(201,161,91,0.10)";
const BORDER_STR = "rgba(201,161,91,0.22)";


/**
 * Old slugs from src/lib/menu.ts → new slugs in src/content/categories.ts.
 * Permanent redirect so external links keep working.
 *
 * The combined "eastern-italian-cuisine" old category splits into two.
 * We pick the larger half (Eastern) as the canonical landing; users can
 * navigate from there. Birthday Menu was reclassified as an event, not a
 * cuisine — sent back to the Menu landing until the Birthdays event page
 * is wired (events.ts → /services route migration is a separate work item).
 */
const SLUG_ALIASES: Record<string, string> = {
  "live-cooking-stations":     "live-stations",
  "bbq-section":               "bbq",
  "eastern-italian-cuisine":   "eastern-cuisine",
  "specialty-arabic-coffee":   "arabic-coffee",
};

export function generateStaticParams() {
  // Generate routes for both current slugs AND legacy slugs so the
  // redirect fires server-side without a runtime hop.
  const current = categories.map((c) => ({ slug: c.slug }));
  const legacy = Object.keys(SLUG_ALIASES).map((slug) => ({ slug }));
  return [...current, ...legacy, { slug: "birthday-menu" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const resolved = resolveSlug(slug);
  if (!resolved) return {};
  const cat = categories.find((c) => c.slug === resolved);
  if (!cat) return {};
  const isAr = locale === "ar";
  return {
    title: `${isAr ? cat.name.ar : cat.name.en} | Elie Catering`,
    description: isAr ? cat.description.ar : cat.description.en,
  };
}

function resolveSlug(raw: string): string | null {
  if (categories.some((c) => c.slug === raw)) return raw;
  if (SLUG_ALIASES[raw]) return SLUG_ALIASES[raw];
  return null;
}

export default async function CuisinePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";

  // Birthday Menu reclassified — redirect back to Menu landing until the
  // events.ts → /services routes are wired (out of scope for this work item).
  if (slug === "birthday-menu") {
    redirect(`/${locale}/menu`);
  }

  // Old slugs redirect to their new canonical slug.
  if (SLUG_ALIASES[slug]) {
    redirect(`/${locale}/menu/${SLUG_ALIASES[slug]}`);
  }

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const cuisineDishes = dishes.filter((d) => d.categoryId === category.id);
  const signatureDish = cuisineDishes.find((d) => d.signature) ?? cuisineDishes[0];

  return (
    <>
      {/* Marble fixed background — same device as siblings */}
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
          <section className="px-6 md:px-14 pt-28 md:pt-36 pb-14 md:pb-20 max-w-[1380px] mx-auto">

            <nav
              aria-label={isAr ? "تنقل" : "breadcrumb"}
              className={`flex items-center gap-2 mb-10 md:mb-14 text-[10.5px] tracking-[0.2em] uppercase font-bold ${isAr ? "flex-row-reverse" : ""}`}
            >
              <Link href={`/${locale}/menu`} className="no-underline transition-colors hover:text-accent" style={{ color: "rgba(201,161,91,0.5)" }}>
                {isAr ? "القائمة" : "Menu"}
              </Link>
              <span style={{ color: "rgba(201,161,91,0.25)" }}>{isAr ? "‹" : "›"}</span>
              <span style={{ color: "rgba(201,161,91,0.75)" }}>{isAr ? category.name.ar : category.name.en}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
              {/* Hero image */}
              <div
                className="relative overflow-hidden rounded-2xl order-1 lg:order-none"
                style={{ aspectRatio: "5/4" }}
              >
                <Image
                  src={category.heroImage}
                  alt={isAr ? category.name.ar : category.name.en}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
                <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.18)" }} />
              </div>

              {/* Text panel */}
              <div className={isAr ? "text-right" : ""}>
                <div className={`flex items-center gap-3 mb-5 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-6 h-px" style={{ background: GOLD }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                    {isAr ? category.eyebrow.ar : category.eyebrow.en}
                  </span>
                </div>

                <h1
                  className="font-serif font-light tracking-tight mb-6"
                  style={{
                    fontSize: "clamp(36px, 5.6vw, 76px)",
                    lineHeight: 1.02,
                    color: CREAM,
                  }}
                >
                  <em>{isAr ? category.name.ar : category.name.en}</em>
                </h1>

                <p
                  className="font-light leading-relaxed mb-8"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                    color: "rgba(245,241,232,0.65)",
                    lineHeight: 1.75,
                    maxWidth: 520,
                  }}
                >
                  {isAr ? category.description.ar : category.description.en}
                </p>

                {/* Popular for — event suitability chips */}
                {category.popularFor.length > 0 && (
                  <div className={`flex flex-wrap items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span
                      className="text-[9px] tracking-[0.32em] uppercase font-bold"
                      style={{ color: "rgba(201,161,91,0.55)" }}
                    >
                      {isAr ? "مناسبة لـ" : "Popular For"}
                    </span>
                    {category.popularFor.slice(0, 4).map((eventId) => (
                      <span
                        key={eventId}
                        className="px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-medium"
                        style={{
                          color: "rgba(245,241,232,0.62)",
                          border: `1px solid ${BORDER_STR}`,
                          borderRadius: 2,
                        }}
                      >
                        {EVENT_LABEL[eventId]?.[isAr ? "ar" : "en"] ?? eventId}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ══ SIGNATURE DISH ════════════════════════════════════ */}
          {signatureDish && (
            <section
              className="px-6 md:px-14 py-16 md:py-24"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1100px] mx-auto">
                <div className={`flex items-center gap-3 mb-10 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "طبقنا المميز" : "Our Signature"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <Image
                      src={signatureDish.image}
                      alt={isAr ? signatureDish.name.ar : signatureDish.name.en}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.18)" }} />
                  </div>

                  <div className={isAr ? "text-right" : ""}>
                    <h3
                      className="font-serif font-light mb-5 leading-tight"
                      style={{
                        fontSize: "clamp(28px, 3.6vw, 46px)",
                        color: CREAM,
                        fontStyle: isAr ? "normal" : "italic",
                      }}
                    >
                      {isAr ? signatureDish.name.ar : signatureDish.name.en}
                    </h3>
                    <p
                      className="font-light mb-8"
                      style={{
                        fontSize: "clamp(14px, 1.4vw, 17px)",
                        color: "rgba(245,241,232,0.62)",
                        lineHeight: 1.8,
                        maxWidth: 440,
                      }}
                    >
                      {isAr ? signatureDish.description.ar : signatureDish.description.en}
                    </p>
                    <AddToEventButton dishId={signatureDish.id} variant="card" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ══ ALL DISHES ════════════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-16 md:py-24"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="max-w-[1380px] mx-auto">
              <div className={`mb-12 md:mb-16 ${isAr ? "text-right" : ""}`}>
                <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "كل الأطباق" : "All Dishes"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(26px, 3.6vw, 44px)", color: CREAM, lineHeight: 1.1 }}
                >
                  {isAr ? (
                    <>{cuisineDishes.length} طبقاً في هذا المطبخ</>
                  ) : (
                    <>{cuisineDishes.length} dishes in this cuisine</>
                  )}
                </h2>
                <p
                  className="font-light mt-3 max-w-md"
                  style={{ fontSize: 13.5, color: "rgba(245,241,232,0.42)", lineHeight: 1.7 }}
                >
                  {isAr
                    ? "أضف ما يلهمك إلى فعاليتي وستجده في الصينية أسفل اليسار."
                    : "Add anything that inspires you to My Event — it appears in the tray at bottom left."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
                {cuisineDishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    cuisineSlug={category.slug}
                    locale={locale}
                    isAr={isAr}
                  />
                ))}
              </div>
            </div>
          </section>


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
                  {isAr ? "تنظّم فعالية؟" : "Hosting Soon?"}
                </span>
                <div className="w-8 h-px" style={{ background: "rgba(201,161,91,0.32)" }} />
              </div>

              <h2
                className="font-serif font-light leading-[0.95] mb-6"
                style={{ fontSize: "clamp(32px, 5vw, 60px)", color: CREAM }}
              >
                <em>{isAr ? "حدّثنا عن فعاليتك" : "Tell us about your event"}</em>
              </h2>

              <p
                className="font-light leading-relaxed mx-auto mb-10"
                style={{ fontSize: 14.5, color: "rgba(245,241,232,0.42)", maxWidth: 460, lineHeight: 1.75 }}
              >
                {isAr
                  ? "ابنِ قائمتك في فعاليتي، أو ابدأ من تشكيلة منسّقة. سنردّ خلال 24 ساعة بسرية تامة."
                  : "Build your menu in My Event, or start from a curated collection. We respond within 24 hours, in complete discretion."}
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

/* ── pieces ──────────────────────────────────────────────────── */

function DishCard({
  dish,
  cuisineSlug,
  locale,
  isAr,
}: {
  dish: Dish;
  cuisineSlug: string;
  locale: string;
  isAr: boolean;
}) {
  const dishHref = `/${locale}/menu/${cuisineSlug}/${dish.slug}`;
  const isSignature = dish.signature;
  return (
    <article className={`group border-t py-7 md:py-9 ${isAr ? "text-right" : ""}`} style={{ borderColor: "rgba(201,161,91,0.18)" }}>
      {/* Eyebrow: serving style · tags */}
      <div className={`flex items-center gap-3 mb-3 flex-wrap ${isAr ? "flex-row-reverse justify-end" : ""}`}>
        {dish.servingStyle && (
          <span
            className="text-[9px] tracking-[0.38em] uppercase font-bold"
            style={{ color: "rgba(201,161,91,0.52)" }}
          >
            {SERVING_LABEL[dish.servingStyle]?.[isAr ? "ar" : "en"] ?? dish.servingStyle}
          </span>
        )}
        {dish.servingStyle && (dish.tags ?? []).filter((t) => DISPLAY_TAGS.has(t)).length > 0 && (
          <span style={{ color: "rgba(201,161,91,0.22)", fontSize: 9 }}>·</span>
        )}
        {(dish.tags ?? []).filter((t) => DISPLAY_TAGS.has(t)).map((tag, i, arr) => (
          <span key={tag} className="text-[9px] tracking-[0.28em] uppercase font-medium" style={{ color: "rgba(201,161,91,0.38)" }}>
            {TAG_LABEL[tag]?.[isAr ? "ar" : "en"] ?? tag}{i < arr.length - 1 ? "" : ""}
          </span>
        ))}
        {isSignature && (
          <span
            className={`text-[9px] tracking-[0.28em] uppercase font-bold ${isAr ? "mr-auto" : "ml-auto"}`}
            style={{ color: GOLD }}
          >
            ✦ {isAr ? "مميز" : "Signature"}
          </span>
        )}
      </div>

      {/* Dish name */}
      <Link href={dishHref} className="block no-underline group/link">
        <h3
          className="font-serif font-light leading-[1.15] mb-3 transition-colors duration-300"
          style={{
            fontSize: "clamp(20px, 1.9vw, 26px)",
            color: isSignature ? GOLD : CREAM,
            fontStyle: isAr ? "normal" : "italic",
          }}
        >
          {isAr ? dish.name.ar : dish.name.en}
        </h3>
        <p
          className="font-light line-clamp-2 mb-5"
          style={{ fontSize: 12.5, color: "rgba(245,241,232,0.44)", lineHeight: 1.72 }}
        >
          {isAr ? dish.description.ar : dish.description.en}
        </p>
      </Link>

      {/* Footer row: add button */}
      <div className={`flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
        <AddToEventButton dishId={dish.id} variant="ghost" />
        <Link
          href={dishHref}
          className="no-underline text-[9.5px] tracking-[0.26em] uppercase font-bold transition-colors duration-200 hover:opacity-100"
          style={{ color: "rgba(201,161,91,0.36)", marginLeft: isAr ? 0 : "auto", marginRight: isAr ? "auto" : 0 }}
          tabIndex={-1}
          aria-hidden
        >
          {isAr ? "التفاصيل ←" : "Details →"}
        </Link>
      </div>
    </article>
  );
}

/* ── label maps (used in DishCard) ───────────────────────────── */

const SERVING_LABEL: Record<string, { en: string; ar: string }> = {
  passed:    { en: "Passed",       ar: "تُمرَّر" },
  station:   { en: "Live Station", ar: "محطة حية" },
  plated:    { en: "Plated",       ar: "مُقدَّم بطبق" },
  buffet:    { en: "Buffet",       ar: "بوفيه" },
  tableside: { en: "Tableside",    ar: "على المائدة" },
};

const DISPLAY_TAGS = new Set([
  "vegetarian", "vegan", "seafood", "spicy", "cold", "hot", "gluten-free", "dairy-free",
]);

const TAG_LABEL: Record<string, { en: string; ar: string }> = {
  vegetarian:    { en: "Vegetarian",  ar: "نباتي" },
  vegan:         { en: "Vegan",       ar: "نباتي صرف" },
  seafood:       { en: "Seafood",     ar: "مأكولات بحرية" },
  spicy:         { en: "Spicy",       ar: "حار" },
  cold:          { en: "Cold",        ar: "بارد" },
  hot:           { en: "Hot",         ar: "ساخن" },
  "gluten-free": { en: "Gluten-Free", ar: "خالٍ من الجلوتين" },
  "dairy-free":  { en: "Dairy-Free",  ar: "خالٍ من الألبان" },
};

/* ── helpers ─────────────────────────────────────────────────── */

/** Inline event labels — small, bilingual, avoids importing the full events.ts
 *  on every cuisine render when we only need names for the chip strip. */
const EVENT_LABEL: Record<string, { en: string; ar: string }> = {
  weddings:     { en: "Weddings",     ar: "حفلات الزفاف" },
  corporate:    { en: "Corporate",    ar: "الفعاليات المؤسسية" },
  vip:          { en: "VIP",          ar: "كبار الشخصيات" },
  private:      { en: "Private",      ar: "المناسبات الخاصة" },
  birthdays:    { en: "Birthdays",    ar: "أعياد الميلاد" },
  "ramadan-eid": { en: "Ramadan & Eid", ar: "رمضان والعيد" },
  government:   { en: "Government",   ar: "الفعاليات الحكومية" },
};

