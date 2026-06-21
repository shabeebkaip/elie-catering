import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuListingClient from "@/components/MenuListingClient";
import { menuCategories } from "@/lib/menu";

export const metadata = {
  title: "Our Menu | Elie Catering & Event Planning",
  description:
    "Explore our full catering menu — from Finger Food and Coffee Breaks to BBQ Stations, Eastern & Italian Cuisine, Seafood & Sushi, and specialty Arabic Coffee.",
};

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

  const categories = menuCategories.map((cat) => ({
    slug: cat.slug,
    title: cat.title,
    eyebrow: cat.eyebrow,
    description: cat.description,
    heroImage: cat.heroImage,
    dishCount: getDishCount(cat.slug),
  }));

  return (
    <>
      <Header />
      <MenuListingClient categories={categories} locale={locale} />
      <Footer />
    </>
  );
}
