import { notFound } from "next/navigation";

import { LOCALES } from "@/constants/locales";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  await getDictionary(locale as Locale);

  return <>{children}</>;
}