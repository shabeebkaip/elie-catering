import { setRequestLocale } from "next-intl/server";
import { services } from "@/lib/services";
import ServiceDetailPageClient from "./ServiceDetailPageClient";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  return <ServiceDetailPageClient slug={slug} locale={locale} />;
}
