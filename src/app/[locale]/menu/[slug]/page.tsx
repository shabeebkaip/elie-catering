import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenuCategory, menuCategories } from "@/lib/menu";

export function generateStaticParams() {
  return menuCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getMenuCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | Elie Catering Menu`,
    description: category.description,
  };
}

/* ─── Section → Unsplash image map ─── */
const SECTION_IMAGES: Record<string, string> = {
  // Bread & starters
  "bread & wraps":
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  sandwiches:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
  tableside:
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  "tableside appetizers":
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",

  // Salads & Cold
  "salads & cold appetizers":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  "cold appetizers & salad":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  "appetizers and salads":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  "cold canapés":
    "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
  "cold seafood":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",

  // Hot starters & snacks
  appetizers:
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
  "hot appetizers":
    "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop",
  "hot bites":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  "mini snacks":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  "omelette live section":
    "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",

  // Mains
  "main courses":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  "main course":
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
  "party food":
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?q=80&w=800&auto=format&fit=crop",

  // Grilled / BBQ
  "grilled meats":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  "lamb selection":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "chicken selection":
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c4?q=80&w=800&auto=format&fit=crop",
  "specialty cuts":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  burgers:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  "served with":
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=800&auto=format&fit=crop",

  // BBQ stations
  "station 1 — lamb & fish":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  "station 2 — chicken & potatoes":
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c4?q=80&w=800&auto=format&fit=crop",
  "station 3 — lamb neck & arayes":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "station 4 — seafood & chicken":
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",

  // Toppings & sauces
  toppings:
    "https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=800&auto=format&fit=crop",
  sauces:
    "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=800&auto=format&fit=crop",

  // Seafood
  "seafood mains":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "sushi station":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",

  // Dessert
  dessert:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "dessert bites":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "candy corner":
    "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?q=80&w=800&auto=format&fit=crop",

  // Drinks
  beverages:
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "hot & cold beverages":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "live section drinks":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",

  // Coffee
  "arabic coffee":
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  "specialty coffee":
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
  accompaniments:
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=800&auto=format&fit=crop",
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop";

function getSectionImage(title: string): string {
  const key = title.toLowerCase().trim();
  if (SECTION_IMAGES[key]) return SECTION_IMAGES[key];
  // partial keyword match
  for (const [k, v] of Object.entries(SECTION_IMAGES)) {
    if (key.includes(k) || k.includes(key.split(" ")[0])) return v;
  }
  return FALLBACK_IMAGE;
}

/* ─── Page ─── */
export default async function MenuCategoryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const category = getMenuCategory(slug);
  if (!category) notFound();

  const localePath = `/${locale}`;

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#2c1e39]">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover scale-105"
            style={{ filter: "brightness(0.4) saturate(1.2)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e39] via-[#2c1e39]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c1e39]/70 to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#bb8a3c]/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 pb-20 pt-40">
          <nav className="flex items-center gap-2 text-[#FAF6EF]/30 text-[10px] uppercase tracking-[0.2em] mb-8">
            <Link href={`${localePath}/menu`} className="hover:text-[#bb8a3c] transition-colors">
              Menu
            </Link>
            <span className="text-[#bb8a3c]/40">›</span>
            <span className="text-[#bb8a3c]/80">{category.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[#bb8a3c] uppercase tracking-[0.3em] text-[11px] font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-[#bb8a3c]" />
                {category.eyebrow}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl text-[#FAF6EF] leading-[1.05] max-w-2xl">
                {category.title}
              </h1>
              <p className="mt-5 text-[#FAF6EF]/55 text-base max-w-xl leading-relaxed">
                {category.description}
              </p>
            </div>
            <div className="flex-shrink-0 border border-[#bb8a3c]/30 rounded-2xl px-6 py-4 backdrop-blur-sm bg-white/5 text-center min-w-[120px]">
              <p className="font-serif text-4xl text-[#bb8a3c]">{category.packages.length}</p>
              <p className="text-[#FAF6EF]/50 text-[10px] uppercase tracking-widest mt-1">
                {category.packages.length === 1 ? "Package" : "Packages"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="bg-[#1a1128]">
        {category.packages.map((pkg, pkgIndex) => (
          <div key={pkg.id}>
            {/* Package image banner */}
            <div className="relative h-[48vh] md:h-[52vh] overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover"
                style={{ filter: "brightness(0.48) saturate(1.3)" }}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1128]/95 via-[#1a1128]/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1128] via-transparent to-transparent" />

              {/* Decorative large number */}
              <div className="absolute top-6 right-8 md:right-16 font-serif text-[110px] md:text-[150px] leading-none text-white/[0.035] select-none pointer-events-none">
                {String(pkgIndex + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-16">
                  <p className="text-[#bb8a3c] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-3">
                    <span className="w-6 h-px bg-[#bb8a3c]" />
                    Package {pkgIndex + 1} of {category.packages.length}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight max-w-xl">
                    {pkg.name}
                  </h2>
                  {pkg.tier && (
                    <p className="mt-3 text-[#bb8a3c]/75 text-sm tracking-wide">
                      {pkg.tier}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ── Section image cards ── */}
            <div className="bg-[#1a1128] px-6 md:px-16 py-14">
              <div className="container mx-auto">
                <div
                  className="grid gap-4"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(pkg.sections.length, 4)}, minmax(0, 1fr))`,
                  }}
                >
                  {pkg.sections.map((section, sectionIndex) => {
                    const sectionImg = getSectionImage(section.title);
                    return (
                      <div
                        key={section.title}
                        className="group rounded-xl overflow-hidden border border-white/[0.07] hover:border-[#bb8a3c]/30 transition-all duration-500 flex flex-col"
                      >
                        {/* Section image */}
                        <div className="relative h-44 overflow-hidden shrink-0">
                          <Image
                            src={sectionImg}
                            alt={section.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{ filter: "brightness(0.65) saturate(1.15)" }}
                            sizes="(max-width: 640px) 100vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1128]/90 via-[#1a1128]/20 to-transparent" />

                          {/* Index badge */}
                          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#bb8a3c]/20 border border-[#bb8a3c]/40 flex items-center justify-center">
                            <span className="text-[#bb8a3c] text-[10px] font-bold">
                              {String(sectionIndex + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* Section title overlaid at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                            <div className="w-5 h-0.5 bg-[#bb8a3c] mb-2" />
                            <h4 className="text-white text-[11px] uppercase tracking-[0.18em] font-bold leading-snug">
                              {section.title}
                            </h4>
                          </div>
                        </div>

                        {/* Items list */}
                        <div className="bg-[#1a1128] group-hover:bg-[#21183a] transition-colors duration-300 p-4 flex-1">
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-[#FAF6EF]/58 text-[12px] leading-snug"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#bb8a3c]/55 mt-1.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Note */}
                {pkg.note && (
                  <div className="mt-6 flex items-start gap-3 bg-[#bb8a3c]/[0.07] border border-[#bb8a3c]/20 rounded-xl px-5 py-4">
                    <span className="text-[#bb8a3c] shrink-0">ⓘ</span>
                    <p className="text-[#FAF6EF]/45 text-xs leading-relaxed">{pkg.note}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            {pkgIndex < category.packages.length - 1 && (
              <div className="container mx-auto px-16 pb-2">
                <div className="h-px bg-gradient-to-r from-transparent via-[#bb8a3c]/15 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ── GALLERY ── */}
      {category.gallery.length > 0 && (
        <section className="bg-[#17102a] py-24 px-6 md:px-16">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[#bb8a3c] uppercase tracking-[0.3em] text-[11px] font-bold mb-3 flex items-center gap-3">
                  <span className="w-8 h-px bg-[#bb8a3c]" />
                  Visual Showcase
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#FAF6EF]">
                  From Our Table
                </h2>
              </div>
              <p className="hidden md:block text-[#FAF6EF]/25 text-sm">
                {category.gallery.length} photos
              </p>
            </div>

            <div className="grid grid-cols-12 gap-3 auto-rows-[120px]">
              {category.gallery.map((img, i) => {
                const spans = [
                  "col-span-6 row-span-3",
                  "col-span-6 row-span-2",
                  "col-span-4 row-span-2",
                  "col-span-4 row-span-2",
                  "col-span-4 row-span-2",
                  "col-span-3 row-span-2",
                ];
                const spanClass = spans[i] ?? "col-span-4 row-span-2";
                return (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-xl ${spanClass}`}
                  >
                    <Image
                      src={img}
                      alt={`${category.title} ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      style={{ filter: "brightness(0.8) saturate(1.1)" }}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17102a]/40 to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#2c1e39] py-28 px-6 md:px-16 text-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #bb8a3c 0%, transparent 55%), radial-gradient(circle at 75% 50%, #4a2c6e 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#bb8a3c] uppercase tracking-[0.3em] text-[11px] font-bold mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#bb8a3c]" />
            Ready to Book?
            <span className="w-8 h-px bg-[#bb8a3c]" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#FAF6EF] leading-tight mb-5">
            Let&apos;s plan your perfect event together
          </h2>
          <p className="text-[#FAF6EF]/45 text-base leading-relaxed mb-10">
            Get a custom quote, discuss dietary requirements, or arrange a private tasting.
            Our culinary team is ready to exceed your expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${localePath}/contact`}
              className="inline-flex items-center gap-3 bg-[#bb8a3c] text-[#2c1e39] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#d4b47a] transition-all duration-300 hover:shadow-lg hover:shadow-[#bb8a3c]/30 hover:-translate-y-0.5"
            >
              Book a Consultation <span>→</span>
            </Link>
            <Link
              href={`${localePath}/menu`}
              className="inline-flex items-center gap-3 border border-white/15 text-[#FAF6EF]/60 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-[#bb8a3c]/40 hover:text-[#FAF6EF] transition-all duration-300"
            >
              ← All Menus
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
