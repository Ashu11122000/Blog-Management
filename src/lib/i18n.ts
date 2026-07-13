import en from "@/dictionaries/en.json";

import type { Locale } from "@/types/locale";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),

  hi: () => import("@/dictionaries/hi.json").then((m) => m.default),
};

export async function getDictionary(
  locale: Locale
): Promise<Dictionary> {
  return dictionaries[locale]();
}