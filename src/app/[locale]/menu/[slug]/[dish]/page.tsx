import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToEventButton from "@/components/my-event/AddToEventButton";
import { categories } from "@/content/categories";
import { collections } from "@/content/collections";
import { dishes } from "@/content/dishes";
import type { Collection, Dish } from "@/content/types";

const GOLD       = "#C9A15B";
const CREAM      = "#F5F1E8";
const BORDER     = "rgba(201,161,91,0.10)";
const BORDER_STR = "rgba(201,161,91,0.22)";

export function generateStaticParams() {
  // One route per (cuisine, dish) pair. 116 dishes × 2 locales = 232 pages.
  return dishes
    .map((d) => {
      const cat = categories.find((c) => c.id === d.categoryId);
      if (!cat) return null;
      return { slug: cat.slug, dish: d.slug };
    })
    .filter((p): p is { slug: string; dish: string } => p !== null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; dish: string; locale: string }>;
}) {
  const { slug, dish: dishSlug, locale } = await params;
  const dish = findDish(slug, dishSlug);
  if (!dish) return {};
  const isAr = locale === "ar";
  return {
    title: `${isAr ? dish.name.ar : dish.name.en} | Elie Catering`,
    description: isAr ? dish.description.ar : dish.description.en,
  };
}

function findDish(cuisineSlug: string, dishSlug: string): Dish | null {
  const cat = categories.find((c) => c.slug === cuisineSlug);
  if (!cat) return null;
  const dish = dishes.find((d) => d.slug === dishSlug);
  if (!dish || dish.categoryId !== cat.id) return null;
  return dish;
}

export default async function DishDetailPage({
  params,
}: {
  params: Promise<{ slug: string; dish: string; locale: string }>;
}) {
  const { slug, dish: dishSlug, locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";

  const dish = findDish(slug, dishSlug);
  if (!dish) notFound();

  const category = categories.find((c) => c.id === dish.categoryId)!;
  const appearsIn = collectionsContaining(dish.id);
  const related = relatedDishes(dish);

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
          <section className="px-6 md:px-14 pt-28 md:pt-36 pb-16 md:pb-24 max-w-[1100px] mx-auto">

            {/* Breadcrumb */}
            <nav
              aria-label={isAr ? "تنقل" : "breadcrumb"}
              className={`flex items-center gap-2 mb-14 md:mb-20 text-[10px] tracking-[0.22em] uppercase font-bold ${isAr ? "flex-row-reverse" : ""}`}
            >
              <Link href={`/${locale}/menu`} className="no-underline transition-opacity hover:opacity-100 opacity-50" style={{ color: GOLD }}>
                {isAr ? "القائمة" : "Menu"}
              </Link>
              <span style={{ color: "rgba(201,161,91,0.22)" }}>{isAr ? "‹" : "›"}</span>
              <Link href={`/${locale}/menu/${category.slug}`} className="no-underline transition-opacity hover:opacity-100 opacity-50" style={{ color: GOLD }}>
                {isAr ? category.name.ar : category.name.en}
              </Link>
              <span style={{ color: "rgba(201,161,91,0.22)" }}>{isAr ? "‹" : "›"}</span>
              <span style={{ color: GOLD }}>{isAr ? dish.name.ar : dish.name.en}</span>
            </nav>

            {/* Ornamental top rule */}
            <div className={`flex items-center gap-4 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,161,91,0.5), rgba(201,161,91,0.08))" }} />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ opacity: 0.5 }}>
                <path d="M9 0 L10.5 7.5 L18 9 L10.5 10.5 L9 18 L7.5 10.5 L0 9 L7.5 7.5 Z" fill={GOLD} />
              </svg>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(201,161,91,0.08), rgba(201,161,91,0.5))" }} />
            </div>

            {/* Category eyebrow */}
            <div className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-8 h-px" style={{ background: GOLD }} />
              <Link
                href={`/${locale}/menu/${category.slug}`}
                className="no-underline text-[10px] tracking-[0.44em] uppercase font-bold transition-opacity hover:opacity-100"
                style={{ color: GOLD, opacity: 0.72 }}
              >
                {isAr ? category.name.ar : category.name.en}
              </Link>
              {dish.signature && (
                <>
                  <span style={{ color: "rgba(201,161,91,0.3)", fontSize: 9 }}>·</span>
                  <span className="text-[10px] tracking-[0.32em] uppercase font-bold" style={{ color: GOLD }}>
                    ✦ {isAr ? "طبق مميز" : "Signature Dish"}
                  </span>
                </>
              )}
            </div>

            {/* Giant dish name */}
            <h1
              className={`font-serif font-light leading-[1.0] mb-8 md:mb-10 ${isAr ? "text-right" : ""}`}
              style={{ fontSize: "clamp(42px, 7vw, 96px)", color: dish.signature ? GOLD : CREAM }}
            >
              <em>{isAr ? dish.name.ar : dish.name.en}</em>
            </h1>

            {/* Description */}
            <p
              className={`font-light leading-relaxed mb-10 md:mb-12 ${isAr ? "text-right" : ""}`}
              style={{
                fontSize: "clamp(15px, 1.5vw, 19px)",
                color: "rgba(245,241,232,0.65)",
                lineHeight: 1.85,
                maxWidth: 680,
              }}
            >
              {isAr ? dish.description.ar : dish.description.en}
            </p>

            {/* Meta row */}
            {(dish.servingStyle || (dish.tags && dish.tags.length)) && (
              <div className={`flex flex-wrap items-center gap-2 mb-10 ${isAr ? "flex-row-reverse" : ""}`}>
                {dish.servingStyle && (
                  <span
                    className="px-3 py-1.5 text-[9.5px] tracking-[0.22em] uppercase font-medium"
                    style={{ color: "rgba(245,241,232,0.58)", border: `1px solid ${BORDER_STR}`, borderRadius: 2 }}
                  >
                    {SERVING_LABEL[dish.servingStyle]?.[isAr ? "ar" : "en"] ?? dish.servingStyle}
                  </span>
                )}
                {(dish.tags ?? []).filter((t) => DISPLAY_TAGS.has(t)).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[9.5px] tracking-[0.22em] uppercase font-medium"
                    style={{ color: "rgba(245,241,232,0.42)", border: `1px solid ${BORDER}`, borderRadius: 2 }}
                  >
                    {TAG_LABEL[tag]?.[isAr ? "ar" : "en"] ?? tag}
                  </span>
                ))}
              </div>
            )}

            <AddToEventButton dishId={dish.id} variant="card" />

            {/* Ornamental bottom rule */}
            <div className={`flex items-center gap-4 mt-14 md:mt-18 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-24 h-px" style={{ background: "linear-gradient(90deg, rgba(201,161,91,0.4), transparent)" }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: GOLD, opacity: 0.35 }} />
            </div>
          </section>

          {/* ══ APPEARS IN COLLECTIONS ══════════════════════════ */}
          {appearsIn.length > 0 && (
            <section
              className="px-6 md:px-14 py-16 md:py-24"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1380px] mx-auto">
                <div className={`mb-10 md:mb-12 ${isAr ? "text-right" : ""}`}>
                  <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                    <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                    <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                      {isAr ? "يظهر في" : "Appears In"}
                    </span>
                  </div>
                  <h2
                    className="font-serif font-light"
                    style={{ fontSize: "clamp(22px, 2.8vw, 32px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                  >
                    {isAr
                      ? `${appearsIn.length} ${appearsIn.length === 1 ? "تشكيلة" : "تشكيلات منسّقة"}`
                      : `${appearsIn.length} curated collection${appearsIn.length === 1 ? "" : "s"}`}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {appearsIn.slice(0, 3).map((c) => (
                    <Link
                      key={c.id}
                      href={`/${locale}/menu/collections/${c.slug}`}
                      className="group block no-underline transition-colors duration-300"
                      style={{
                        background: "rgba(10,10,10,0.78)",
                        border: `1px solid ${BORDER}`,
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <div className="relative h-[180px] overflow-hidden">
                        <Image
                          src={c.image}
                          alt={isAr ? c.name.ar : c.name.en}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.3)" }} />
                      </div>
                      <div className="p-5">
                        <span className="text-[9px] tracking-[0.32em] uppercase font-bold block mb-2" style={{ color: GOLD }}>
                          {isAr ? c.eyebrow.ar : c.eyebrow.en}
                        </span>
                        <h3
                          className="font-serif font-light"
                          style={{ fontSize: 18, color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                        >
                          {isAr ? c.name.ar : c.name.en}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ══ RELATED DISHES ════════════════════════════════════ */}
          {related.length > 0 && (
            <section
              className="px-6 md:px-14 py-16 md:py-24"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1380px] mx-auto">
                <div className="flex items-end justify-between mb-10 md:mb-12">
                  <div className={isAr ? "text-right" : ""}>
                    <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                      <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                      <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                        {isAr ? "أطباق ذات صلة" : "From the Same Kitchen"}
                      </span>
                    </div>
                    <h2
                      className="font-serif font-light"
                      style={{ fontSize: "clamp(22px, 2.8vw, 32px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                    >
                      {isAr ? `المزيد من ${category.name.ar}` : `More from ${category.name.en}`}
                    </h2>
                  </div>
                  <Link
                    href={`/${locale}/menu/${category.slug}`}
                    className="hidden sm:inline-flex items-center gap-2 text-[10.5px] tracking-[0.22em] uppercase font-bold no-underline transition-colors duration-300 hover:text-[#dfc07a]"
                    style={{ color: "rgba(201,161,91,0.6)" }}
                  >
                    {isAr ? "كل الأطباق" : "All Dishes"}
                    <span aria-hidden>{isAr ? "←" : "→"}</span>
                  </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                  {related.map((d) => (
                    <RelatedDishCard
                      key={d.id}
                      dish={d}
                      cuisineSlug={category.slug}
                      locale={locale}
                      isAr={isAr}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

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

function RelatedDishCard({
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
  return (
    <Link
      href={`/${locale}/menu/${cuisineSlug}/${dish.slug}`}
      className="group block no-underline border-t py-6 transition-opacity duration-200 hover:opacity-100"
      style={{ borderColor: "rgba(201,161,91,0.18)", opacity: 0.82 }}
    >
      {dish.signature && (
        <span className="text-[9px] tracking-[0.28em] uppercase font-bold block mb-2" style={{ color: GOLD }}>
          ✦ {isAr ? "مميز" : "Signature"}
        </span>
      )}
      <h3
        className={`font-serif font-light leading-snug line-clamp-2 mb-2 ${isAr ? "text-right" : ""}`}
        style={{ fontSize: "clamp(15px, 1.4vw, 19px)", color: dish.signature ? GOLD : CREAM, fontStyle: isAr ? "normal" : "italic" }}
      >
        {isAr ? dish.name.ar : dish.name.en}
      </h3>
      <p
        className={`font-light line-clamp-2 ${isAr ? "text-right" : ""}`}
        style={{ fontSize: 12, color: "rgba(245,241,232,0.38)", lineHeight: 1.65 }}
      >
        {isAr ? dish.description.ar : dish.description.en}
      </p>
    </Link>
  );
}

/* ── helpers ─────────────────────────────────────────────────── */

function collectionsContaining(dishId: string): Collection[] {
  return collections
    .filter((c) => c.dishIds.includes(dishId))
    .sort((a, b) => Number(!!b.signature) - Number(!!a.signature));
}

function relatedDishes(current: Dish): Dish[] {
  // Same cuisine, excluding current. Signature dishes first, then insertion order.
  return dishes
    .filter((d) => d.categoryId === current.categoryId && d.id !== current.id)
    .sort((a, b) => Number(!!b.signature) - Number(!!a.signature))
    .slice(0, 4);
}

const SERVING_LABEL: Record<string, { en: string; ar: string }> = {
  passed:    { en: "Passed",       ar: "تُمرَّر" },
  station:   { en: "Live Station", ar: "محطة حية" },
  plated:    { en: "Plated",       ar: "مُقدَّم بطبق" },
  buffet:    { en: "Buffet",       ar: "بوفيه" },
  tableside: { en: "Tableside",    ar: "على المائدة" },
};

// Only display tags that add useful information for guests. Internal tags
// (international, saudi) are not surfaced because they're already implied
// by the cuisine context.
const DISPLAY_TAGS = new Set([
  "vegetarian", "vegan", "seafood", "spicy", "cold", "hot",
  "gluten-free", "dairy-free",
]);

const TAG_LABEL: Record<string, { en: string; ar: string }> = {
  vegetarian:    { en: "Vegetarian",   ar: "نباتي" },
  vegan:         { en: "Vegan",        ar: "نباتي صرف" },
  seafood:       { en: "Seafood",      ar: "مأكولات بحرية" },
  spicy:         { en: "Spicy",        ar: "حار" },
  cold:          { en: "Cold",         ar: "بارد" },
  hot:           { en: "Hot",          ar: "ساخن" },
  "gluten-free": { en: "Gluten-Free",  ar: "خالٍ من الجلوتين" },
  "dairy-free":  { en: "Dairy-Free",   ar: "خالٍ من الألبان" },
};
