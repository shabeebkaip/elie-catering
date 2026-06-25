"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function LocaleHtmlSync() {
  const locale = useLocale();

  useEffect(() => {
    const isArabic = locale === "ar";
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.classList.toggle("font-arabic", isArabic);
    document.body.classList.toggle("font-arabic", isArabic);
    document.body.classList.toggle("font-sans", !isArabic);
  }, [locale]);

  return null;
}
