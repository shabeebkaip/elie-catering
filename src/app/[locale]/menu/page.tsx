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

export default function MenuPage() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-[#2c1e39]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
            alt="Elie Catering Menu"
            fill
            className="object-cover scale-105"
            style={{ filter: "brightness(0.4) saturate(1.2)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e39] via-[#2c1e39]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c1e39]/70 to-transparent" />
        </div>

        {/* Gold left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#bb8a3c]/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 pb-20 pt-40">
          <p className="text-[#bb8a3c] uppercase tracking-[0.3em] text-[11px] font-bold mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#bb8a3c]" />
            Culinary Artistry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#FAF6EF] leading-[1.05] max-w-3xl">
            Exquisite Catering{" "}
            <span className="italic text-[#bb8a3c]">Options</span>
          </h1>
          <p className="mt-5 text-[#FAF6EF]/55 text-base md:text-lg max-w-xl leading-relaxed">
            Each menu is crafted with precision, seasonal ingredients, and tailored for your event — from intimate gatherings to grand galas.
          </p>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { value: menuCategories.length.toString(), label: "Menu Categories" },
              { value: "50+", label: "Curated Dishes" },
              { value: "14+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-[#bb8a3c]">{stat.value}</p>
                <p className="text-[#FAF6EF]/40 text-[10px] uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="bg-[#1e1430] py-24 px-6 md:px-16">
        <div className="container mx-auto">

          {/* Section header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#bb8a3c] uppercase tracking-[0.3em] text-[11px] font-bold mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-[#bb8a3c]" />
                Browse by Category
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#FAF6EF]">
                A World of Flavour
              </h2>
            </div>
            <p className="hidden md:block text-[#FAF6EF]/25 text-sm font-serif italic">
              Select a category to explore
            </p>
          </div>

          {/* Featured first card (large) + grid */}
          <div className="space-y-4">

            {/* First item — wide featured card */}
            {menuCategories[0] && (
              <Link
                href={`/en/menu/${menuCategories[0].slug}`}
                className="group relative flex overflow-hidden rounded-2xl h-80 border border-white/[0.07] hover:border-[#bb8a3c]/30 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <Image
                    src={menuCategories[0].heroImage}
                    alt={menuCategories[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.45) saturate(1.2)" }}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e1430]/90 via-[#1e1430]/50 to-transparent" />
                </div>
                <div className="relative z-10 flex items-end p-10">
                  <div>
                    <span className="inline-block bg-[#bb8a3c]/90 text-[#2c1e39] text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full mb-4">
                      {menuCategories[0].eyebrow}
                    </span>
                    <h3 className="font-serif text-4xl text-white mb-2 group-hover:text-[#bb8a3c] transition-colors duration-300">
                      {menuCategories[0].title}
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                      {menuCategories[0].description}
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-[#bb8a3c] text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      Explore Menu <span className="text-base">→</span>
                    </p>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining items — 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuCategories.slice(1).map((category) => (
                <Link
                  key={category.slug}
                  href={`/en/menu/${category.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] hover:border-[#bb8a3c]/30 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ filter: "brightness(0.5) saturate(1.2)" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1430] via-[#1e1430]/20 to-transparent" />

                    {/* Eyebrow pill */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#bb8a3c]/85 backdrop-blur-sm text-[#2c1e39] text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-1 rounded-full">
                        {category.eyebrow}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-[#1e1430] p-6 group-hover:bg-[#251840] transition-colors duration-300">
                    {/* Gold top accent */}
                    <div className="w-6 h-0.5 bg-[#bb8a3c]/50 mb-4 group-hover:w-10 transition-all duration-300" />

                    <h3 className="font-serif text-xl text-[#FAF6EF] mb-2 group-hover:text-[#bb8a3c] transition-colors duration-300 leading-snug">
                      {category.title}
                    </h3>
                    <p className="text-[#FAF6EF]/40 text-[13px] leading-relaxed mb-5 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#bb8a3c]/50 text-[10px] uppercase tracking-widest">
                        {category.packages.length}{" "}
                        {category.packages.length === 1 ? "package" : "packages"}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#bb8a3c] text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        Explore <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-[#bb8a3c] py-20 px-6 md:px-16">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #2c1e39 0px, #2c1e39 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[#2c1e39]/60 uppercase tracking-[0.3em] text-[11px] font-bold mb-3">
              Custom Menus Available
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2c1e39] leading-tight max-w-lg">
              Have a specific vision in mind?
            </h2>
            <p className="text-[#2c1e39]/60 mt-3 text-sm leading-relaxed max-w-md">
              Our culinary team crafts bespoke menus tailored to your event theme,
              dietary requirements, and guest preferences.
            </p>
          </div>
          <Link
            href="/en/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[#2c1e39] text-[#FAF6EF] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#3d2a52] transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Book a Consultation
            <span className="text-base">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
