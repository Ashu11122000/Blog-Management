"use client";

import { Languages } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

import {
  LOCALES,
  LOCALE_FLAGS,
  LOCALE_NAMES,
} from "@/constants/locales";

import Button from "@/components/common/Button";

import { useCurrentLocale } from "@/hooks/useCurrentLocale";

export default function LanguageSwitcher() {
  const router = useRouter();

  const pathname = usePathname();

  const locale = useCurrentLocale();

  function switchLocale(newLocale: typeof locale) {
    if (newLocale === locale) return;

    const segments = pathname.split("/");

    segments[1] = newLocale;

    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4" />

      {LOCALES.map((item) => (
        <Button
          key={item}
          size="sm"
          variant={item === locale ? "default" : "ghost"}
          onClick={() => switchLocale(item)}
        >
          {LOCALE_FLAGS[item]} {LOCALE_NAMES[item]}
        </Button>
      ))}
    </div>
  );
}