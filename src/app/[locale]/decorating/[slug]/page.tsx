import { setRequestLocale } from "next-intl/server";
import { decoratingServices } from "@/lib/decorating";
import DecoratingDetailPageClient from "./DecoratingDetailPageClient";

export function generateStaticParams() {
  return decoratingServices.map((s) => ({ slug: s.slug }));
}

export default async function DecoratingDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  return <DecoratingDetailPageClient slug={slug} locale={locale} />;
}
