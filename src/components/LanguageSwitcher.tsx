"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    if (next === locale) return;
    // Replace the locale segment in the path
    const segments = pathname.split("/");
    segments[1] = next;
    startTransition(() => {
      router.replace(segments.join("/") || "/");
    });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-cream/20 p-1">
      {(["en", "ar"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          disabled={isPending}
          className={`px-3 py-1 rounded-full text-[9px] tracking-[0.22em] uppercase font-bold transition-all duration-250 ${
            locale === l
              ? "bg-accent text-primary"
              : "text-cream/55 hover:text-cream"
          }`}
        >
          {l === "en" ? "EN" : "AR"}
        </button>
      ))}
    </div>
  );
}
