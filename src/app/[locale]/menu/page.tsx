import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuCategories } from "@/lib/menu";

export const metadata = {
  title: "Our Menu | Elie Catering & Event Planning",
  description:
    "Explore our full catering menu — from Finger Food and Coffee Breaks to BBQ Stations, Eastern & Italian Cuisine, Seafood & Sushi, and specialty Arabic Coffee.",
};

/* Dish count per category (for display on card) */
function getDishCount(slug: string) {
  const cat = menuCategories.find((c) => c.slug === slug);
  if (!cat) return 0;
  return cat.packages.reduce(
    (acc, p) => acc + p.sections.reduce((s, sec) => s + sec.items.length, 0),
    0
  );
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localePath = `/${locale}`;

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════════
          HERO — full-viewport cinematic
          ══════════════════════════════════════════ */}
      <section className="relative min-h-svh flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
            alt="Elie Catering Menu"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.35) saturate(1.3)" }}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1b1226] via-[#2c1e39]/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#1b1226]/80 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#1b1226]/60 to-transparent" />
        </div>

        {/* Gold left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-accent/80 to-transparent" />

        {/* Ghost text */}
        <div
          className="absolute right-0 bottom-0 font-serif select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(8rem, 22vw, 20rem)", color: "rgba(187,138,60,0.035)", lineHeight: 1 }}
        >
          Menu
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-20 pt-40">
          <p className="flex items-center gap-3 text-accent uppercase tracking-[0.35em] text-[11px] font-bold mb-6">
            <span className="w-10 h-px bg-accent" />
            Culinary Artistry
          </p>

          <h1
            className="font-serif text-cream leading-[0.95] mb-8 max-w-3xl"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            Exquisite{" "}
            <span className="italic text-accent">Options</span>
          </h1>

          <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mb-14">
            Every menu crafted with precision, seasonal ingredients, and an eye
            for detail — from intimate gatherings to grand galas.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            {[
              { value: menuCategories.length.toString(), label: "Menu Categories" },
              { value: "50+", label: "Curated Dishes" },
              { value: "14+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-accent text-3xl md:text-4xl">{stat.value}</p>
                <p className="text-cream/35 text-[10px] uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/25 z-10">
          <span className="text-[9px] uppercase tracking-[0.3em]">Browse</span>
          <div className="w-px h-10 bg-linear-to-b from-accent/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY GRID — cream background
          ══════════════════════════════════════════ */}
      <section className="bg-[#FAF6EF] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="flex items-center gap-3 text-accent uppercase tracking-[0.35em] text-[11px] font-bold mb-4">
                <span className="w-10 h-px bg-accent" />
                Browse by Category
              </p>
              <h2
                className="font-serif text-[#2c1e39] leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                A World of Flavour
              </h2>
            </div>
            <p className="font-serif italic text-[#4a4358]/40 text-base md:text-lg max-w-xs text-right">
              Select a category to explore the full menu
            </p>
          </div>

          {/* Cards grid — all 8 categories equal treatment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {menuCategories.map((category, i) => {
              const dishCount = getDishCount(category.slug);
              return (
                <Link
                  key={category.slug}
                  href={`${localePath}/menu/${category.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(44,30,57,0.07)] hover:shadow-[0_12px_48px_rgba(187,138,60,0.20)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
                >
                  {/* Image — portrait with consistent ratio */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(0.75) saturate(1.2)" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Gradient for text legibility */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#1b1226]/60 via-transparent to-transparent" />

                    {/* Category number */}
                    <div className="absolute top-4 left-4">
                      <span className="font-serif text-white/25 text-2xl leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Eyebrow pill */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#bb8a3c]/90 backdrop-blur-sm text-[#1b1226] text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full">
                        {category.eyebrow}
                      </span>
                    </div>

                    {/* Hover: "Explore" overlay */}
                    <div className="absolute inset-0 bg-[#1b1226]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest border border-white/40 px-6 py-2.5 rounded-full backdrop-blur-sm translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        Explore Menu →
                      </span>
                    </div>
                  </div>

                  {/* Card body — cream */}
                  <div className="flex-1 p-5 flex flex-col">
                    {/* Gold accent line */}
                    <div className="w-7 h-0.5 bg-accent mb-3 transition-all duration-300 group-hover:w-12" />

                    {/* Title */}
                    <h3 className="font-serif text-[#2c1e39] text-xl leading-snug mb-2 group-hover:text-[#2c1e39] transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4a4358]/55 text-[13px] leading-relaxed line-clamp-2 flex-1">
                      {category.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E6E1F5]/60">
                      <div className="flex items-center gap-4">
                        <span className="text-accent/70 text-[10px] uppercase tracking-widest">
                          {dishCount} dishes
                        </span>
                        <span className="w-px h-3 bg-[#E6E1F5]" />
                        <span className="text-[#4a4358]/40 text-[10px] uppercase tracking-widest">
                          {category.packages.length}{" "}
                          {category.packages.length === 1 ? "pkg" : "pkgs"}
                        </span>
                      </div>
                      <span className="text-accent text-base opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1b1226] py-28 px-6 md:px-16 text-center">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #bb8a3c 0px, #bb8a3c 1px, transparent 1px, transparent 60px)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #bb8a3c 0%, transparent 55%), radial-gradient(circle at 75% 50%, #4a2c6e 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-accent/60" />
            <span className="text-accent text-xl">✦</span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-accent/60" />
          </div>

          <p className="text-accent uppercase tracking-[0.35em] text-[11px] font-bold mb-6">
            Custom Menus Available
          </p>
          <h2
            className="font-serif text-cream leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Have a specific vision?
            <br />
            <span className="text-accent">We&apos;ll build it for you.</span>
          </h2>
          <p className="text-cream/45 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Our culinary team crafts bespoke menus tailored to your event theme,
            dietary requirements, and guest preferences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${localePath}/contact`}
              className="inline-flex items-center gap-3 bg-accent text-[#1b1226] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-soft transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Book a Consultation
              <span className="text-base">→</span>
            </Link>
            <a
              href="https://wa.me/966544356564"
              className="inline-flex items-center gap-2 border border-[#25D366]/40 text-[#25D366] px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
