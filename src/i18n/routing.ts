import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "ja", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
