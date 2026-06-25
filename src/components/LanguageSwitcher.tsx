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
    const segments = pathname.split("/");
    segments[1] = next;
    startTransition(() => {
      router.replace(segments.join("/") || "/");
    });
  }

  return (
    <div
      className="flex items-center rounded-full p-0.5 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(237,229,255,0.12)",
      }}
    >
      {(["en", "ar"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          disabled={isPending}
          className={`px-3.5 py-[7px] rounded-full text-[9px] tracking-[0.24em] uppercase font-bold transition-all duration-300 ${
            locale === l
              ? "bg-accent text-primary shadow-[0_2px_10px_rgba(187,138,60,0.40)]"
              : "text-cream/50 hover:text-cream/80"
          }`}
        >
          {l === "en" ? "EN" : "AR"}
        </button>
      ))}
    </div>
  );
}
