import type { Metadata } from "next";
import { Fraunces, Inter, Instrument_Serif, Almarai } from "next/font/google";
import { getLocale } from "next-intl/server";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "400",
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Elie Catering & Event Planning",
  description: "Luxury catering and event planning services across Saudi Arabia and beyond.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={isArabic ? "font-arabic" : ""}
      suppressHydrationWarning
    >
      <body
        className={`${fraunces.variable} ${inter.variable} ${instrumentSerif.variable} ${almarai.variable} ${
          isArabic ? "font-arabic" : "font-sans"
        } antialiased`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
