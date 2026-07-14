import Link from "next/link";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  FolderTree,
  Users,
} from "lucide-react";

import Container from "@/components/layout/Container";

import { DASHBOARD_NAVIGATION, MAIN_NAVIGATION } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";

/**
 * ==========================================================
 * Footer
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Ultra Premium UI
 * ✓ Better Typography
 * ✓ Platform Statistics
 * ✓ Explore Links
 * ✓ Dashboard Links
 * ✓ Responsive
 * ✓ Static Information
 * ✓ No Business Logic Changes
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const t = useTranslations("Navigation");

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-muted/30 via-background to-background">

      {/* ======================================================
          Background Decorations
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-0
            top-0
            h-72
            w-72
            rounded-full
            bg-blue-500/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-80
            w-80
            rounded-full
            bg-violet-500/5
            blur-3xl
          "
        />
      </div>

      <Container className="relative">

        <div className="grid gap-16 py-20 lg:grid-cols-12">

          {/* ======================================================
              Brand Section
          ====================================================== */}

          <div className="space-y-8 lg:col-span-5">

            {/* Premium Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-border/60
                bg-muted/60
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide
                text-muted-foreground
                backdrop-blur-sm
              "
            >
              <BookOpen className="h-3.5 w-3.5 text-blue-600" />
              Modern CMS Platform
            </div>

            {/* Brand */}

            <div className="space-y-5">

              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-3xl
                  font-bold
                  tracking-tight
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
              >
                {SITE_CONFIG.name}

                <ArrowUpRight
                  className="
                    h-5
                    w-5
                    opacity-70
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <p
                className="
                  max-w-lg
                  text-[15px]
                  leading-8
                  text-muted-foreground
                "
              >
                {SITE_CONFIG.description}
              </p>

            </div>

            {/* Social Links */}

            <div className="flex items-center gap-4">

              <Link
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-border/60
                  bg-background
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-lg
                "
              >
                <FaGithub
                  className="
                    h-5
                    w-5
                    text-muted-foreground
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-foreground
                  "
                />
              </Link>

              <Link
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-border/60
                  bg-background
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-lg
                "
              >
                <FaLinkedin
                  className="
                    h-5
                    w-5
                    text-muted-foreground
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-foreground
                  "
                />
              </Link>

            </div>

            {/* ======================================================
                Platform Statistics
            ====================================================== */}

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div
                className="
                  rounded-2xl
                  border
                  border-border/60
                  bg-background/70
                  p-4
                  backdrop-blur
                "
              >
                <FileText className="mb-3 h-5 w-5 text-blue-600" />

                <p className="text-2xl font-bold tracking-tight">
                  250+
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Articles
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-border/60
                  bg-background/70
                  p-4
                  backdrop-blur
                "
              >
                <Users className="mb-3 h-5 w-5 text-violet-600" />

                <p className="text-2xl font-bold tracking-tight">
                  12K+
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Monthly Readers
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-border/60
                  bg-background/70
                  p-4
                  backdrop-blur
                "
              >
                <FolderTree className="mb-3 h-5 w-5 text-emerald-600" />

                <p className="text-2xl font-bold tracking-tight">
                  32
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Categories
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-border/60
                  bg-background/70
                  p-4
                  backdrop-blur
                "
              >
                <BookOpen className="mb-3 h-5 w-5 text-amber-600" />

                <p className="text-2xl font-bold tracking-tight">
                  99%
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Uptime
                </p>
              </div>

            </div>

          </div>

                    {/* ======================================================
              Navigation Section
          ====================================================== */}

          <div className="lg:col-span-7">

            <div className="grid gap-10 sm:grid-cols-3">

              {/* ======================================================
                  Explore
              ====================================================== */}

              <div className="space-y-6">

                <div className="space-y-2">

                  <h3 className="text-base font-semibold tracking-tight">
                    Explore
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Browse the public sections of the platform.
                  </p>

                </div>

                <nav className="space-y-3">

                  {MAIN_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        font-medium
                        text-muted-foreground
                        transition-all
                        duration-300
                        hover:bg-muted/60
                        hover:text-foreground
                      "
                    >
                      <span>{t(item.key)}</span>

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  ))}

                </nav>

              </div>

              {/* ======================================================
                  Dashboard
              ====================================================== */}

              <div className="space-y-6">

                <div className="space-y-2">

                  <h3 className="text-base font-semibold tracking-tight">
                    Dashboard
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Manage your content efficiently.
                  </p>

                </div>

                <nav className="space-y-3">

                  {DASHBOARD_NAVIGATION.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        font-medium
                        text-muted-foreground
                        transition-all
                        duration-300
                        hover:bg-muted/60
                        hover:text-foreground
                      "
                    >
                      <span>{t(item.key)}</span>

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  ))}

                </nav>

              </div>

              {/* ======================================================
                  Resources
              ====================================================== */}

              <div className="space-y-6">

                <div className="space-y-2">

                  <h3 className="text-base font-semibold tracking-tight">
                    Resources
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Helpful information about the platform.
                  </p>

                </div>

                <div className="space-y-4">

                  <div
                    className="
                      rounded-2xl
                      border
                      border-border/60
                      bg-background/70
                      p-4
                      backdrop-blur-sm
                    "
                  >
                    <p className="text-sm font-semibold">
                      Built With
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Next.js App Router, TypeScript, Tailwind CSS,
                      next-intl and modern UI practices.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-border/60
                      bg-background/70
                      p-4
                      backdrop-blur-sm
                    "
                  >
                    <p className="text-sm font-semibold">
                      Contact
                    </p>

                    <Link
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="
                        mt-2
                        inline-block
                        break-all
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-blue-600
                      "
                    >
                      {SITE_CONFIG.email}
                    </Link>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-blue-500/20
                      bg-blue-500/5
                      p-4
                    "
                  >
                    <p className="text-sm font-semibold">
                      Version
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Blog Management System v1.0
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

                {/* ======================================================
            Bottom Footer
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            border-t
            border-border/60
            py-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* ======================================================
              Copyright
          ====================================================== */}

          <div className="space-y-2 text-center md:text-left">

            <p className="text-sm font-medium text-foreground">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            <p className="text-sm text-muted-foreground">
              Crafted with{" "}
              <span className="font-medium text-foreground">
                Next.js App Router
              </span>
              ,{" "}
              <span className="font-medium text-foreground">
                TypeScript
              </span>
              {" "}and{" "}
              <span className="font-medium text-foreground">
                Tailwind CSS
              </span>
              .
            </p>

          </div>

          {/* ======================================================
              Tech Stack Badges
          ====================================================== */}

          <div className="flex flex-wrap items-center justify-center gap-2">

            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "App Router",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-border/60
                  bg-muted/50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-muted-foreground
                  transition-colors
                  duration-300
                  hover:bg-muted
                  hover:text-foreground
                "
              >
                {tech}
              </span>
            ))}

          </div>

          {/* ======================================================
              Developer
          ====================================================== */}

          <div className="space-y-2 text-center md:text-right">

            <p className="text-sm text-muted-foreground">
              Designed &amp; Developed by
            </p>

            <Link
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-foreground
                transition-colors
                duration-300
                hover:text-blue-600
              "
            >
              {SITE_CONFIG.author}

              <ArrowUpRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}
