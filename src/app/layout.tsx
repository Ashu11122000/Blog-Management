import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog Management",
    template: "%s | Blog Management",
  },
  description:
    "Modern Blog Management System built with Next.js App Router.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}