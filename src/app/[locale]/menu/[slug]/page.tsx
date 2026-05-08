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
    title: `${category.title} | Elie Catering`,
    description: category.description,
  };
}

/* ────────────────────────────────────────────
   FINGER FOOD: dish name → local image path
   ──────────────────────────────────────────── */
const FINGER_FOOD_IMAGES: Record<string, string> = {
  "salmon blinis with cream cheese":
    "/menu/finger%20foods/Smoked-Salmon-and-Cream-Cheese-Blinis-01.jpeg",
  "bruschetta with tomato & basil":
    "/menu/finger%20foods/Bruschetta-Tomato-Basil.webp",
  "smoked turkey mini rolls": "/menu/finger%20foods/smoked-turkey.webp",
  "caprese skewers": "/menu/finger%20foods/caprese-skewers.jpg",
  "prawn cocktail bites": "/menu/finger%20foods/Prawn-cocktail.webp",
  "mini chicken samosas": "/menu/finger%20foods/mini-chicken-samosas.jpg",
  "cheese borek": "/menu/finger%20foods/cheese-borek.webp",
  "meat spring rolls": "/menu/finger%20foods/meat-spring-rolls.jpg",
  "mini quiche lorraine": "/menu/finger%20foods/Mini-Quiche-Lorraine.jpg",
  "stuffed mushrooms": "/menu/finger%20foods/Stuffed-Mushrooms.jpg",
  "mini chocolate eclairs":
    "/menu/finger%20foods/mini-chocolate-eclairs.webp",
  "fruit tartlets": "/menu/finger%20foods/fruit-tarlets.jpg",
  macarons: "/menu/finger%20foods/macarons.jpg",
  "mini cheesecakes": "/menu/finger%20foods/mini-cheese-cakes.jpg",
};

const FINGER_FOOD_GALLERY = [
  { src: "/menu/finger%20foods/Prawn-cocktail.webp", alt: "Prawn Cocktail Bites", span: "col-span-2 row-span-2" },
  { src: "/menu/finger%20foods/cheese-borek.webp", alt: "Cheese Borek", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/macarons.jpg", alt: "Macarons", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/Bruschetta-Tomato-Basil.webp", alt: "Bruschetta", span: "col-span-1 row-span-2" },
  { src: "/menu/finger%20foods/mini-chicken-samosas.jpg", alt: "Mini Chicken Samosas", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/mini-chocolate-eclairs.webp", alt: "Mini Chocolate Eclairs", span: "col-span-2 row-span-1" },
  { src: "/menu/finger%20foods/Smoked-Salmon-and-Cream-Cheese-Blinis-01.jpeg", alt: "Smoked Salmon Blinis", span: "col-span-1 row-span-2" },
  { src: "/menu/finger%20foods/fruit-tarlets.jpg", alt: "Fruit Tartlets", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/Stuffed-Mushrooms.jpg", alt: "Stuffed Mushrooms", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/mini-cheese-cakes.jpg", alt: "Mini Cheesecakes", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/caprese-skewers.jpg", alt: "Caprese Skewers", span: "col-span-1 row-span-1" },
  { src: "/menu/finger%20foods/meat-spring-rolls.jpg", alt: "Meat Spring Rolls", span: "col-span-1 row-span-1" },
];

const FINGER_FOOD_SECTION_META: Record<string, { tagline: string; description: string }> = {
  "cold canapés": {
    tagline: "Fresh. Refined. Stunning.",
    description: "Delicate bites that open the palate and spark conversation.",
  },
  "hot bites": {
    tagline: "Warm. Golden. Irresistible.",
    description: "Crisp pastry, tender fillings — passed at the perfect moment.",
  },
  "dessert bites": {
    tagline: "Sweet. Petite. Memorable.",
    description: "A final flourish that guests will talk about long after.",
  },
};

/* ────────────────────────────────────────────
   COFFEE BREAK: dish name → local image path
   ──────────────────────────────────────────── */
const COFFEE_BREAK_IMAGES: Record<string, string> = {
  // Sandwiches
  "mini milk bread with turkey and pickled cucumber":
    "/menu/coffee%20break/sandwiches/Mini%20milk%20bread%20with%20turkey%20and%20cucumber.png",
  "mini baguette bread with feta cheese and fresh cucumber":
    "/menu/coffee%20break/sandwiches/Mini%20baguette%20bread%20with%20feta%20cheese%20and%20fresh%20cucumber.png",
  "mini olive balls with tuna and corn":
    "/menu/coffee%20break/sandwiches/ChatGPT%20Image%20May%208%2C%202026%2C%2003_56_18%20AM%20%281%29.png",
  // Salads & Cold Appetizers
  "cucumber and feta roll with shrimp":
    "/menu/coffee%20break/salads/Cucumber-and-Feta-Roll-with-Shrimp.png",
  "cranberry pecan cheese ball":
    "/menu/coffee%20break/salads/Nuts%20and%20cranberries%20cheese%20appetizer.png",
  "mini tart chicken & cheese quiches":
    "/menu/coffee%20break/salads/Mini%20tarts%20with%20chicken%20and%20cheese.png",
  "gorgonzola cheese canapés with walnut":
    "/menu/coffee%20break/salads/Gorgonzola%20cheese%20canap%C3%A9s%20with%20walnut.png",
  // Appetizers
  "meat & cheese sambuusa":
    "/menu/coffee%20break/appetizers/ChatGPT%20Image%20May%208%2C%202026%2C%2004_22_29%20AM%20%281%29.png",
  // Dessert
  "assorted french pastry":
    "/menu/coffee%20break/dessert/Assorted%20French%20Pastry.png",
  "assorted danish pastry":
    "/menu/coffee%20break/dessert/Assorted%20Danish%20Pastry.png",
  "mini croissants":
    "/menu/coffee%20break/dessert/Mini%20Croissants.png",
  "fresh-cut fruits":
    "/menu/coffee%20break/dessert/Fresh-cut%20Fruits.png",
  // Beverages
  "mineral water":
    "/menu/coffee%20break/beverages/689dfc618fefcf4041d9c01e.webp",
  "assorted juices":
    "/menu/coffee%20break/beverages/ChatGPT%20Image%20May%208%2C%202026%2C%2011_02_30%20AM.png",
  "coffee":
    "/menu/coffee%20break/beverages/ChatGPT%20Image%20May%208%2C%202026%2C%2011_06_21%20AM.png",
  "tea":
    "/menu/coffee%20break/beverages/ChatGPT%20Image%20May%208%2C%202026%2C%2011_08_11%20AM.png",
};

/* ────────────────────────────────────────────
   LIVE COOKING STATIONS: dish name → local image path
   ──────────────────────────────────────────── */
const LIVE_COOKING_IMAGES: Record<string, string> = {
  // Station 1 — Lamb & Fish
  "lamb ousal":
    "/menu/live-cooking/lamp%26fish/Lamb%20Ousal.png",
  "lamb kebab":
    "/menu/live-cooking/lamp%26fish/lamb%20kebab.png",
  "fish sabach":
    "/menu/live-cooking/lamp%26fish/Fish%20Sabach.png",
  "served with: tahini sauce & cream sauce":
    "/menu/live-cooking/lamp%26fish/tahini.png",
  // Station 2 — Chicken & Potatoes
  "chicken tikka":
    "https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1-819x1024.jpg",
  "chicken kebab":
    "https://www.kitchensanctuary.com/wp-content/uploads/2016/04/Honey-Garlic-Chicken-Skewers-square-FS-21.jpg",
  "shish tawook (red + white)":
    "https://mamaslebanesekitchen.com/wp-content/uploads/2011/10/skewered-shish-tawook-chicken-kabobs.jpg",
  "served with: full grilled potatoes & potato cubes":
    "https://www.allrecipes.com/thmb/2A1wFJnDdnku9LgCgF60oX_Ck-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20963-oven-roasted-potatoes-DDMFS-4x3-ada74550e9454bd3afc343a1bf88270f.jpg",
  // Station 3 — Lamb Neck & Arayes
  "lamb neck ribs":
    "https://img.delicious.com.au/L2auynZx/del/2023/07/lamb-neck-roast-with-rough-cut-chermoula-193255-4.jpg",
  "lamb arayes":
    "https://urbanfarmandkitchen.com/wp-content/uploads/2023/11/arayes-meat-stuffed-pitas-5.jpg",
  "served with: special bbq bread & rocket salad":
    "https://www.sprinklesandsprouts.com/wp-content/uploads/2023/12/rocket-salad-sq.jpg",
  // Station 4 — Seafood & Chicken
  "grilled fish steak":
    "https://sauers.com/cdn/shop/articles/20220527163322-grilled_fish_fillets_1024x_d8c1f4f0-a64f-4b1b-89f0-8cea38e46718_1024x.webp?v=1669236149",
  "grilled chicken leg":
    "https://shewearsmanyhats.com/wp-content/uploads/2015/05/grilled-bbq-chicken-3.jpg",
  "served with: lebanese bread & corn":
    "https://www.allrecipes.com/thmb/M4uGXoJpt9Q3ld_Ay2Bx_xbAqo4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/259099-Lebanese-Mountain-Bread-ddmfs-4x3-step-13-cafb72da0b3f4893b3771e7caa6e47e5.jpg",
  // Breads
  "sandwich bread":
    "https://thesaltedpepper.com/wp-content/uploads/2024/07/Butter-Bread-sq.jpg",
  "manoush bread":
    "https://www.elmundoeats.com/wp-content/uploads/2024/02/Lebanese-flatbreads-manoushe-zaatar.jpg",
  "lettuce":
    "https://www.tasteofhome.com/wp-content/uploads/2025/06/Mandarin-Orange-Romaine-Salad_EXPS_TOHD25_45715_RatulaChakraborti_06.jpg?w=700",
};

/* ────────────────────────────────────────────
   PER-CATEGORY dish image maps
   Add more slugs here as images are uploaded
   ──────────────────────────────────────────── */
const CATEGORY_DISH_IMAGES: Record<string, Record<string, string>> = {
  "finger-food": FINGER_FOOD_IMAGES,
  "coffee-break": COFFEE_BREAK_IMAGES,
  "live-cooking-stations": LIVE_COOKING_IMAGES,
};

function getDishImage(slug: string, itemName: string): string | null {
  const map = CATEGORY_DISH_IMAGES[slug];
  if (!map) return null;
  return map[itemName.toLowerCase().trim()] ?? null;
}

/* ────────────────────────────────────────────
   SECTION → Unsplash image (placeholder for
   dishes that don't have a specific photo yet)
   ──────────────────────────────────────────── */
const SECTION_IMAGES: Record<string, string> = {
  "bread & wraps":
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  sandwiches:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
  tableside:
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
  "tableside appetizers":
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
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
  "main courses":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  "main course":
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
  "party food":
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?q=80&w=800&auto=format&fit=crop",
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
  "station 1 — lamb & fish":
    "https://images.unsplash.com/photo-1544025162-d76538f54073?q=80&w=800&auto=format&fit=crop",
  "station 2 — chicken & potatoes":
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c4?q=80&w=800&auto=format&fit=crop",
  "station 3 — lamb neck & arayes":
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "station 4 — seafood & chicken":
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
  toppings:
    "https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=800&auto=format&fit=crop",
  sauces:
    "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=800&auto=format&fit=crop",
  "seafood mains":
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "sushi station":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  dessert:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "dessert bites":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  "candy corner":
    "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?q=80&w=800&auto=format&fit=crop",
  beverages:
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "hot & cold beverages":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  "live section drinks":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
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
  for (const [k, v] of Object.entries(SECTION_IMAGES)) {
    if (key.includes(k) || k.includes(key.split(" ")[0])) return v;
  }
  return FALLBACK_IMAGE;
}

/* ────────────────────────────────────────────
   Per-category event tags
   ──────────────────────────────────────────── */
const CATEGORY_TAGS: Record<string, string[]> = {
  "finger-food": ["Cocktail Receptions", "Corporate Events", "Weddings", "Private Parties"],
  "coffee-break": ["Corporate Meetings", "Conferences", "Training Days", "Seminars"],
  "live-cooking-stations": ["Weddings", "Gala Dinners", "Outdoor Events", "Corporate Parties"],
  "bbq-section": ["Outdoor Gatherings", "Family Events", "Corporate BBQs", "Celebrations"],
  "eastern-italian-cuisine": ["Weddings", "Gala Dinners", "Cultural Events", "Banquets"],
  "seafood-sushi": ["Cocktail Parties", "Business Dinners", "Beach Events", "VIP Gatherings"],
  "specialty-arabic-coffee": ["Majlis", "Corporate Events", "Weddings", "Cultural Occasions"],
  "birthday-menu": ["Birthday Parties", "Kids Celebrations", "Family Gatherings", "Private Events"],
};

/* ────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────── */
export default async function MenuCategoryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const category = getMenuCategory(slug);
  if (!category) notFound();

  const localePath = `/${locale}`;
  const eventTags = CATEGORY_TAGS[slug] ?? [];
  const totalDishes = category.packages.reduce(
    (acc, p) => acc + p.sections.reduce((s, sec) => s + sec.items.length, 0),
    0
  );

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════════
          HERO — full-viewport cinematic
          ══════════════════════════════════════════ */}
      <section className="relative min-h-svh flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.36) saturate(1.3)" }}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-purple-deep via-[#2c1e39]/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-purple-deep/80 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-purple-deep/60 to-transparent" />
        </div>

        {/* Gold left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-accent/80 to-transparent" />

        {/* Decorative ghost word */}
        <div
          className="absolute right-0 bottom-0 font-serif select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(7rem, 18vw, 16rem)", color: "rgba(187,138,60,0.04)", lineHeight: 1 }}
        >
          {category.title.split(" ")[0]}
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-20 pt-40">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-cream/30 text-[10px] uppercase tracking-[0.25em] mb-10">
            <Link href={`${localePath}/menu`} className="hover:text-accent transition-colors">
              Menu
            </Link>
            <span className="text-accent/40">›</span>
            <span className="text-accent/80">{category.title}</span>
          </nav>

          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-accent uppercase tracking-[0.35em] text-[11px] font-bold mb-6">
              <span className="w-10 h-px bg-accent" />
              {category.eyebrow}
            </p>

            <h1
              className="font-serif text-cream leading-[0.95] mb-8"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
            >
              {category.title}
            </h1>

            <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mb-12">
              {category.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {eventTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-accent/30 text-accent/80 text-[11px] uppercase tracking-widest bg-accent/[0.07] backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-cream/40 text-[11px] uppercase tracking-widest backdrop-blur-sm">
                {totalDishes} Dishes
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/25 z-10">
          <span className="text-[9px] uppercase tracking-[0.3em]">Explore</span>
          <div className="w-px h-10 bg-linear-to-b from-accent/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT AREA  (cream background)
          ══════════════════════════════════════════ */}
      <div className="bg-cream">
        {category.packages.map((pkg, pkgIndex) => (
          <div key={pkg.id}>

            {/* Package header strip */}
            <div className="bg-[#2c1e39] px-6 md:px-16 lg:px-24 py-14">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  {category.packages.length > 1 && (
                    <p className="flex items-center gap-3 text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-3">
                      <span className="w-6 h-px bg-accent" />
                      Package {pkgIndex + 1} of {category.packages.length}
                    </p>
                  )}
                  <h2 className="font-serif text-cream text-3xl md:text-4xl leading-tight">
                    {pkg.name}
                  </h2>
                  {pkg.tier && (
                    <p className="text-accent/60 text-sm mt-2 tracking-wide">{pkg.tier}</p>
                  )}
                </div>
                {pkg.note && (
                  <div className="flex items-start gap-3 border border-accent/20 rounded-xl px-5 py-4 bg-accent/6 max-w-sm shrink-0">
                    <span className="text-accent text-base mt-0.5 shrink-0">ⓘ</span>
                    <p className="text-cream/50 text-sm leading-relaxed">{pkg.note}</p>
                  </div>
                )}
              </div>
            </div>

            {/* ── Sections — unified dish-card grid for ALL categories ── */}
            <div>
              {pkg.sections.map((section, sIdx) => {
                const meta = FINGER_FOOD_SECTION_META[section.title.toLowerCase()] ?? null;
                const ordinal = String(sIdx + 1).padStart(2, "0");
                // Fallback image = the section's thematic Unsplash photo
                const sectionFallbackImg = getSectionImage(section.title);

                return (
                  <div key={section.title}>
                    {/* Section editorial header */}
                    <div className="px-6 md:px-16 lg:px-24 pt-16 pb-8 max-w-7xl mx-auto">
                      <div className="flex items-start gap-6 md:gap-10">
                        <span
                          className="font-serif text-accent/15 leading-none select-none hidden md:block"
                          style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                        >
                          {ordinal}
                        </span>
                        <div>
                          <div className="w-12 h-px bg-accent mb-4" />
                          <h3
                            className="font-serif text-[#2c1e39] leading-tight mb-3"
                            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                          >
                            {section.title}
                          </h3>
                          {meta && (
                            <p className="text-body/60 text-base leading-relaxed max-w-lg">
                              {meta.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dish cards grid */}
                    <div className="px-6 md:px-16 lg:px-24 pb-4 max-w-7xl mx-auto">
                      <div
                        className="grid gap-4 md:gap-5"
                        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))" }}
                      >
                        {section.items.map((item) => {
                          // Specific dish image (if available), else section fallback
                          const specificImg = getDishImage(slug, item);
                          const imgSrc = specificImg ?? sectionFallbackImg;

                          return (
                            <div
                              key={item}
                              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(44,30,57,0.07)] hover:shadow-[0_8px_40px_rgba(187,138,60,0.22)] transition-all duration-500 hover:-translate-y-1"
                            >
                              {/* Food image — always shows something */}
                              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                                <Image
                                  src={imgSrc}
                                  alt={item}
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                  style={specificImg ? undefined : { filter: "brightness(0.72) saturate(1.1)" }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white/70 to-transparent" />
                              </div>

                              {/* Card label */}
                              <div className="px-4 pb-5 pt-3">
                                <div className="w-6 h-0.5 bg-accent mb-2 transition-all duration-300 group-hover:w-10" />
                                <h4 className="font-serif text-[#2c1e39] text-[15px] leading-snug">
                                  {item}
                                </h4>
                              </div>

                              {/* Hover border glow */}
                              <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Between-section sensory tagline (finger food only) */}
                    {meta && sIdx < pkg.sections.length - 1 && (
                      <div className="px-6 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto">
                        <div className="flex items-center gap-6">
                          <div className="h-px flex-1 bg-linear-to-r from-transparent via-accent/20 to-transparent" />
                          <p className="font-serif italic text-accent text-xl md:text-2xl text-center shrink-0">
                            &ldquo;{meta.tagline}&rdquo;
                          </p>
                          <div className="h-px flex-1 bg-linear-to-r from-transparent via-accent/20 to-transparent" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Package divider */}
            {pkgIndex < category.packages.length - 1 && (
              <div className="px-6 md:px-16 lg:px-24 py-4 max-w-7xl mx-auto">
                <div className="h-px bg-linear-to-r from-transparent via-[#2c1e39]/10 to-transparent" />
              </div>
            )}
          </div>
        ))}

        {/* ── MID-PAGE WHATSAPP CTA ── */}
        <div className="px-6 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#2c1e39] rounded-3xl px-8 md:px-14 py-12">
            <div
              className="absolute inset-0 rounded-3xl opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 0% 50%, #bb8a3c 0%, transparent 50%), radial-gradient(circle at 100% 50%, #4a2c6e 0%, transparent 50%)",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-2">
                  Customise Your Menu
                </p>
                <h3 className="font-serif text-cream text-2xl md:text-3xl leading-tight">
                  Want to mix and match?
                  <br />
                  <span className="text-accent">We&apos;ll build it for you.</span>
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="https://wa.me/966544356564"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#20bd5a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
                <Link
                  href={`${localePath}/contact`}
                  className="inline-flex items-center gap-2 border border-accent/40 text-accent px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-accent/10 transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          GALLERY
          ══════════════════════════════════════════ */}
      {category.gallery.length > 0 && (
        <section className="bg-purple-deep py-24 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="flex items-center gap-3 text-accent uppercase tracking-[0.3em] text-[11px] font-bold mb-4">
                <span className="w-8 h-px bg-accent" />
                Visual Gallery
              </p>
              <h2 className="font-serif text-cream text-4xl md:text-5xl">
                {slug === "finger-food" ? "As It Looks on Your Table" : "From Our Kitchen"}
              </h2>
              <p className="text-cream/35 text-base mt-3 max-w-lg">
                {slug === "finger-food"
                  ? "Every piece plated with intention. Every bite a work of art."
                  : "A glimpse into the quality and craft behind every dish we serve."}
              </p>
            </div>

            {slug === "finger-food" ? (
              /* Finger food masonry — all 14 local images */
              <div
                className="grid gap-3"
                style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "180px" }}
              >
                {FINGER_FOOD_GALLERY.map((item, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-xl group ${item.span}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ filter: "brightness(0.82) saturate(1.15)" }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-purple-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-xs font-medium tracking-wide">{item.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Other categories — masonry from category.gallery */
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
                    <div key={i} className={`relative overflow-hidden rounded-xl ${spanClass}`}>
                      <Image
                        src={img}
                        alt={`${category.title} ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        style={{ filter: "brightness(0.82) saturate(1.1)" }}
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-purple-deep/40 to-transparent" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-purple-deep py-32 px-6 md:px-16 text-center">
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
            Ready to Impress Your Guests?
          </p>
          <h2
            className="font-serif text-cream leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Let&apos;s craft your perfect
            <br />
            <span className="text-accent">tasting experience.</span>
          </h2>
          <p className="text-cream/45 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Custom menus, dietary accommodations, private tastings — our culinary
            team is ready to make your event unforgettable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${localePath}/contact`}
              className="inline-flex items-center gap-3 bg-accent text-purple-deep px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent-soft transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
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
            <Link
              href={`${localePath}/menu`}
              className="inline-flex items-center gap-2 border border-white/10 text-cream/40 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-accent/30 hover:text-cream/70 transition-all duration-300"
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
