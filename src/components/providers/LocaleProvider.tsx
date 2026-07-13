"use client";

import {
  createContext,
  useContext,
} from "react";

import type { Locale } from "@/types/locale";
import type { Dictionary } from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}

export default function LocaleProvider({
  locale,
  dictionary,
  children,
}: Readonly<LocaleProviderProps>) {
  return (
    <LocaleContext.Provider
      value={{
        locale,
        dictionary,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error(
      "useLocaleContext must be used within LocaleProvider."
    );
  }

  return context;
}