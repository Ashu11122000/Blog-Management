import { notFound } from "next/navigation";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { routing } from "@/i18n/routing";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
          {/* =======================================================
              Premium Global Background
          ======================================================= */}

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Top Left Glow */}
            <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[140px]" />

            {/* Top Right Glow */}
            <div className="absolute right-[-10rem] top-40 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[140px] dark:bg-violet-400/10" />

            {/* Bottom Center Glow */}
            <div className="absolute bottom-[-12rem] left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px] dark:bg-cyan-400/10" />

            {/* Small Accent */}
            <div className="absolute left-1/4 top-1/2 h-48 w-48 rounded-full bg-primary/10 blur-[100px]" />

            {/* Decorative Grid */}
            <div
              className="
                absolute inset-0
                opacity-[0.04]
                dark:opacity-[0.06]
                bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
                bg-[size:64px_64px]
              "
            />

            {/* Radial Fade */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,hsl(var(--background))_100%)]
              "
            />
          </div>

          {/* =======================================================
              Navbar
          ======================================================= */}

          <Navbar />

          {/* =======================================================
              Main Content
          ======================================================= */}

          <main className="relative z-10 flex min-h-screen flex-col">
            {children}
          </main>

          {/* =======================================================
              Footer
          ======================================================= */}

          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}