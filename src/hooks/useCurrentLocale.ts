"use client";

import { useParams } from "next/navigation";

import type { Locale } from "@/constants/locales";

export function useCurrentLocale() {
  const params = useParams();

  return params.locale as Locale;
}