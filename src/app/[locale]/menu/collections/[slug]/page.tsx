import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  getCollectionBySlug,
  getCollectionsForEvent,
  getDishesInCollection,
  getEvent,
} from "@/lib/content";
import { collections } from "@/content/collections";
import { categories } from "@/content/categories";
import type {
  CategoryId,
  Collection,
  Dish,
  EventId,
  Locale,
} from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToEventButton from "@/components/my-event/AddToEventButton";
import UseCollectionButton from "@/components/my-event/UseCollectionButton";

const GOLD = "#C9A15B";
const CREAM = "#F5F1E8";
const BORDER = "rgba(201,161,91,0.10)";
const BORDER_STRONG = "rgba(201,161,91,0.22)";

// Build at SSG time — one page per collection. dynamicParams default true,
// but we never add collections without a deploy, so unknowns 404.
export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  const isAr = locale === "ar";
  return {
    title: `${isAr ? collection.name.ar : collection.name.en} | Elie Catering`,
    description: isAr ? collection.description.ar : collection.description.en,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const isAr = (locale as Locale) === "ar";

  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const dishes = getDishesInCollection(collection);
  const dishesByCategory = groupByCategory(dishes);
  const eventTypes = collection.forEventIds
    .map((id) => getEvent(id))
    .filter((e): e is NonNullable<ReturnType<typeof getEvent>> => Boolean(e));
  const otherCollections = relatedCollections(collection);

  return (
    <>
      {/* Fixed marble background — same device as Service Detail page */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Image src="/images/about/marble.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.92)" }} />
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

            {/* Breadcrumb */}
            <nav
              aria-label={isAr ? "تنقل" : "breadcrumb"}
              className={`flex items-center gap-2 mb-10 md:mb-14 text-[10.5px] tracking-[0.2em] uppercase font-bold ${isAr ? "flex-row-reverse" : ""}`}
              style={{ color: "rgba(201,161,91,0.4)" }}
            >
              <Link href={`/${locale}/menu`} className="no-underline hover:text-accent transition-colors" style={{ color: "rgba(201,161,91,0.5)" }}>
                {isAr ? "القائمة" : "Menu"}
              </Link>
              <span style={{ color: "rgba(201,161,91,0.25)" }}>{isAr ? "‹" : "›"}</span>
              <Link href={`/${locale}/menu`} className="no-underline hover:text-accent transition-colors" style={{ color: "rgba(201,161,91,0.5)" }}>
                {isAr ? "التشكيلات" : "Collections"}
              </Link>
              <span style={{ color: "rgba(201,161,91,0.25)" }}>{isAr ? "‹" : "›"}</span>
              <span style={{ color: "rgba(201,161,91,0.75)" }}>{isAr ? collection.name.ar : collection.name.en}</span>
            </nav>

            {/* Hero — image left / text right on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-2xl order-1 lg:order-none"
                style={{ aspectRatio: "5/4" }}
              >
                <Image
                  src={collection.heroImage || collection.image}
                  alt={isAr ? collection.name.ar : collection.name.en}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
                <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.12)" }} />
                {collection.signature && (
                  <div className="absolute top-5 left-5">
                    <span
                      className="px-3 py-1.5 rounded-full text-[9.5px] tracking-[0.28em] uppercase font-bold backdrop-blur-sm"
                      style={{
                        background: "rgba(201,161,91,0.14)",
                        border: `1px solid ${BORDER_STRONG}`,
                        color: GOLD,
                      }}
                    >
                      {isAr ? "تشكيلة مميزة" : "Signature Collection"}
                    </span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className={isAr ? "text-right" : ""}>
                <div className={`flex items-center gap-3 mb-5 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-6 h-px" style={{ background: GOLD }} />
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ color: GOLD }}>
                    {isAr ? collection.eyebrow.ar : collection.eyebrow.en}
                  </span>
                </div>

                <h1
                  className="font-serif font-light tracking-tight mb-6"
                  style={{
                    fontSize: "clamp(34px, 5.4vw, 72px)",
                    lineHeight: 1.02,
                    color: CREAM,
                  }}
                >
                  <em>{isAr ? collection.name.ar : collection.name.en}</em>
                </h1>

                <p
                  className="font-light leading-relaxed mb-8"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                    color: "rgba(245,241,232,0.7)",
                    lineHeight: 1.75,
                    maxWidth: 520,
                  }}
                >
                  {isAr ? collection.description.ar : collection.description.en}
                </p>

                {/* Facts strip */}
                <dl
                  className={`grid grid-cols-2 gap-x-8 gap-y-4 mb-10 max-w-md ${isAr ? "text-right" : ""}`}
                >
                  <FactRow
                    label={isAr ? "عدد الأطباق" : "Courses"}
                    value={`${dishes.length}`}
                    isAr={isAr}
                  />
                  <FactRow
                    label={isAr ? "عدد الضيوف" : "Guest range"}
                    value={
                      <span dir="ltr" style={{ unicodeBidi: "isolate" }}>
                        {collection.guestRange.min}–{collection.guestRange.max}
                      </span>
                    }
                    isAr={isAr}
                  />
                </dl>

                {/* CTAs */}
                <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <UseCollectionButton
                    collectionId={collection.id}
                    collectionName={isAr ? collection.name.ar : collection.name.en}
                    dishIds={collection.dishIds}
                  />
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.2em] uppercase font-bold no-underline transition-colors duration-300 hover:text-accent"
                    style={{ color: "rgba(245,241,232,0.4)" }}
                  >
                    {isAr ? "أو اطلب استشارة" : "Or request a consultation"}
                    <span>{isAr ? "←" : "→"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ══ FULL MENU ═════════════════════════════════════════ */}
          <section
            className="px-6 md:px-14 py-16 md:py-24"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="max-w-[1100px] mx-auto">
              <div className={isAr ? "text-right" : ""}>
                <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "التشكيلة الكاملة" : "The Full Collection"}
                  </span>
                </div>
                <h2
                  className="font-serif font-light mb-3"
                  style={{ fontSize: "clamp(26px, 3.6vw, 44px)", color: CREAM }}
                >
                  {isAr
                    ? <><em style={{ color: GOLD, fontStyle: "normal" }}>{numberToArabic(dishes.length)}</em> طبقاً</>
                    : <><em className="italic" style={{ color: GOLD }}>{numberToWord(dishes.length)}</em> courses</>
                  }
                </h2>
                <p
                  className="font-light"
                  style={{ fontSize: 13, color: "rgba(245,241,232,0.42)", letterSpacing: "0.04em" }}
                >
                  {isAr
                    ? "أضف أي طبق فردياً أو خذ التشكيلة كاملة."
                    : "Add any dish individually, or take the full collection."}
                </p>
              </div>

              {/* Dishes grouped by category */}
              <div className="mt-12 md:mt-16 space-y-12 md:space-y-16">
                {dishesByCategory.map(({ category, items }) => (
                  <div key={category.id}>
                    <div className={`flex items-baseline gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                      <div className="w-5 h-px translate-y-[-4px]" style={{ background: GOLD }} />
                      <h3
                        className="font-serif font-light"
                        style={{ fontSize: "clamp(18px, 2vw, 24px)", color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                      >
                        {isAr ? category.name.ar : category.name.en}
                      </h3>
                      <span
                        className="text-[10px] tracking-[0.28em] uppercase"
                        style={{ color: "rgba(245,241,232,0.36)" }}
                      >
                        {items.length} {isAr ? "طبق" : items.length === 1 ? "dish" : "dishes"}
                      </span>
                    </div>

                    <ul className="space-y-0">
                      {items.map((dish, idx) => (
                        <li
                          key={dish.id}
                          className={`flex items-center gap-4 md:gap-6 py-5 md:py-6 ${isAr ? "flex-row-reverse" : ""}`}
                          style={{
                            borderBottom: idx < items.length - 1 ? `1px solid ${BORDER}` : "none",
                          }}
                        >
                          {/* Thumbnail */}
                          <div
                            className="relative flex-shrink-0 overflow-hidden rounded-lg w-[72px] h-[72px] md:w-[112px] md:h-[84px]"
                            style={{ background: "rgba(245,241,232,0.04)" }}
                          >
                            <Image
                              src={dish.image}
                              alt=""
                              fill
                              sizes="(max-width: 768px) 72px, 112px"
                              className="object-cover"
                            />
                          </div>

                          {/* Name + tags */}
                          <div className={`flex-1 min-w-0 ${isAr ? "text-right" : ""}`}>
                            <h4
                              className="font-serif font-light leading-snug mb-1.5"
                              style={{
                                fontSize: "clamp(15px, 1.5vw, 19px)",
                                color: CREAM,
                                fontStyle: isAr ? "normal" : "italic",
                              }}
                            >
                              {isAr ? dish.name.ar : dish.name.en}
                            </h4>
                            <p
                              className="line-clamp-1 md:line-clamp-2"
                              style={{
                                fontSize: 12.5,
                                color: "rgba(245,241,232,0.42)",
                                lineHeight: 1.55,
                                maxWidth: 580,
                              }}
                            >
                              {isAr ? dish.description.ar : dish.description.en}
                            </p>
                          </div>

                          {/* Add toggle */}
                          <div className="flex-shrink-0">
                            <AddToEventButton dishId={dish.id} variant="ghost" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bulk CTA — repeated at the bottom of the menu for users who scrolled */}
              <div
                className="mt-16 md:mt-20 p-8 md:p-10 rounded-2xl text-center"
                style={{
                  background: "rgba(10,10,10,0.78)",
                  border: `1px solid ${BORDER}`,
                }}
              >
                <p
                  className="font-serif font-light leading-snug mb-2"
                  style={{
                    fontSize: "clamp(20px, 2.6vw, 30px)",
                    color: CREAM,
                    fontStyle: isAr ? "normal" : "italic",
                  }}
                >
                  {isAr
                    ? "خذ التشكيلة كاملة كنقطة بداية لفعاليتك."
                    : "Take the full collection as a starting point."}
                </p>
                <p
                  className="font-light mb-7 max-w-md mx-auto"
                  style={{ fontSize: 13.5, color: "rgba(245,241,232,0.5)", lineHeight: 1.65 }}
                >
                  {isAr
                    ? "كل تشكيلات إيلي قابلة للتخصيص الكامل. أضف وأزل واستبدل بحرية قبل طلب العرض."
                    : "Every Elie collection is fully customizable. Add, remove or substitute any dish freely before requesting a proposal."}
                </p>
                <UseCollectionButton
                  collectionId={collection.id}
                  collectionName={isAr ? collection.name.ar : collection.name.en}
                  dishIds={collection.dishIds}
                />
              </div>

              {/* Service notes if any */}
              {collection.notes && (
                <p
                  className={`mt-10 text-[12px] leading-relaxed ${isAr ? "text-right" : "text-center"}`}
                  style={{ color: "rgba(245,241,232,0.36)", letterSpacing: "0.04em" }}
                >
                  {isAr ? collection.notes.ar : collection.notes.en}
                </p>
              )}
            </div>
          </section>

          {/* ══ PAIRS WITH (event cross-links) ═══════════════════ */}
          {eventTypes.length > 0 && (
            <section
              className="px-6 md:px-14 py-16 md:py-20"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1100px] mx-auto">
                <div className={`flex items-center gap-3 mb-8 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                  <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                  <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                    {isAr ? "مناسبة لـ" : "Recommended For"}
                  </span>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(eventTypes.length, 3)} gap-5`}>
                  {eventTypes.slice(0, 3).map((event) => (
                    <Link
                      key={event.id}
                      href={`/${locale}/services/${event.slug}`}
                      className="group block no-underline rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        background: "rgba(10,10,10,0.82)",
                        border: `1px solid ${BORDER}`,
                      }}
                    >
                      <div className="relative h-[180px] overflow-hidden">
                        <Image
                          src={event.cardImage || event.heroImage}
                          alt={isAr ? event.name.ar : event.name.en}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0" style={{ background: "rgba(5,5,5,0.3)" }} />
                      </div>
                      <div className="p-5">
                        <h3
                          className="font-serif font-light mb-1.5 transition-colors duration-300"
                          style={{ fontSize: 18, color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
                        >
                          {isAr ? event.name.ar : event.name.en}
                        </h3>
                        <span
                          className="text-[9.5px] tracking-[0.28em] uppercase font-bold"
                          style={{ color: "rgba(201,161,91,0.65)" }}
                        >
                          {isAr ? "استكشف ←" : "Explore →"}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ══ ALSO CONSIDER (other collections) ════════════════ */}
          {otherCollections.length > 0 && (
            <section
              className="px-6 md:px-14 py-16 md:py-20"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div className="max-w-[1100px] mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="w-6 h-px" style={{ background: "rgba(201,161,91,0.45)" }} />
                    <span className="text-[9px] tracking-[0.44em] uppercase font-bold" style={{ color: "rgba(201,161,91,0.6)" }}>
                      {isAr ? "تشكيلات أخرى" : "Also Consider"}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {otherCollections.map((c) => (
                    <Link
                      key={c.id}
                      href={`/${locale}/menu/collections/${c.slug}`}
                      className="group block no-underline rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        background: "rgba(10,10,10,0.82)",
                        border: `1px solid ${BORDER}`,
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
                          className="font-serif font-light mb-1.5"
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

        </main>
        <Footer />
      </div>
    </>
  );
}

/* ── helpers ─────────────────────────────────────────────────── */

function groupByCategory(dishes: Dish[]): { category: (typeof categories)[number]; items: Dish[] }[] {
  const byCat = new Map<CategoryId, Dish[]>();
  for (const d of dishes) {
    const list = byCat.get(d.categoryId) ?? [];
    list.push(d);
    byCat.set(d.categoryId, list);
  }
  return [...categories]
    .filter((c) => byCat.has(c.id))
    .map((c) => ({ category: c, items: byCat.get(c.id)! }));
}

function relatedCollections(current: Collection): Collection[] {
  // Other collections sharing at least one event type, signature first.
  const eventIds = new Set<EventId>(current.forEventIds);
  return getCollectionsForEvent(current.forEventIds[0])
    .filter((c) => c.id !== current.id && c.forEventIds.some((id) => eventIds.has(id)))
    .slice(0, 3);
}

function FactRow({ label, value, isAr }: { label: string; value: React.ReactNode; isAr: boolean }) {
  return (
    <div className={isAr ? "text-right" : ""}>
      <dt
        className="text-[10px] tracking-[0.22em] uppercase font-medium mb-1.5"
        style={{ color: "rgba(245,241,232,0.36)" }}
      >
        {label}
      </dt>
      <dd
        className="font-serif font-light"
        style={{ fontSize: 18, color: CREAM, fontStyle: isAr ? "normal" : "italic" }}
      >
        {value}
      </dd>
    </div>
  );
}

const WORDS_EN: Record<number, string> = {
  6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 11: "Eleven", 12: "Twelve",
  13: "Thirteen", 14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen",
  18: "Eighteen", 19: "Nineteen", 20: "Twenty",
};
function numberToWord(n: number): string {
  return WORDS_EN[n] ?? String(n);
}

const WORDS_AR: Record<number, string> = {
  6: "ستة", 7: "سبعة", 8: "ثمانية", 9: "تسعة", 10: "عشرة", 11: "أحد عشر", 12: "اثنا عشر",
  13: "ثلاثة عشر", 14: "أربعة عشر", 15: "خمسة عشر", 16: "ستة عشر", 17: "سبعة عشر",
  18: "ثمانية عشر", 19: "تسعة عشر", 20: "عشرون",
};
function numberToArabic(n: number): string {
  return WORDS_AR[n] ?? String(n);
}
