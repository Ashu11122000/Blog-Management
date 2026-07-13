export const LOCALES = ["en", "hi"] as const;

export const DEFAULT_LOCALE = "en";

export const LOCALE_NAMES = {
  en: "English",
  hi: "हिन्दी",
} as const;

export const LOCALE_FLAGS = {
  en: "🇺🇸",
  hi: "🇮🇳",
} as const;

export type Locale = (typeof LOCALES)[number];