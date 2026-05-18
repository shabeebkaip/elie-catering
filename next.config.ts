import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "elie-catering.webcrowdsolutions.com" },
      { protocol: "https", hostname: "www.eitanbernath.com" },
      { protocol: "https", hostname: "www.kitchensanctuary.com" },
      { protocol: "https", hostname: "mamaslebanesekitchen.com" },
      { protocol: "https", hostname: "www.allrecipes.com" },
      { protocol: "https", hostname: "img.delicious.com.au" },
      { protocol: "https", hostname: "urbanfarmandkitchen.com" },
      { protocol: "https", hostname: "www.sprinklesandsprouts.com" },
      { protocol: "https", hostname: "sauers.com" },
      { protocol: "https", hostname: "shewearsmanyhats.com" },
      { protocol: "https", hostname: "thesaltedpepper.com" },
      { protocol: "https", hostname: "www.elmundoeats.com" },
      { protocol: "https", hostname: "www.tasteofhome.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
