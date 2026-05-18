import { setRequestLocale } from "next-intl/server";
import { planningServices } from "@/lib/planning";
import PlanningDetailPageClient from "./PlanningDetailPageClient";

export function generateStaticParams() {
  return planningServices.map((s) => ({ slug: s.slug }));
}

export default async function PlanningDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  return <PlanningDetailPageClient slug={slug} locale={locale} />;
}
