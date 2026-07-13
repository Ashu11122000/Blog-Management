import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Container from "@/components/layout/Container";

import { FOOTER_NAVIGATION } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";

/**
 * ==========================================================
 * Footer
 * ==========================================================
 *
 * Features
 * ----------
 * ✓ Responsive
 * ✓ Brand Section
 * ✓ Social Links
 * ✓ Navigation
 * ✓ Copyright
 * ✓ Dark Mode
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-(--border) bg-(--background)">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2">
          {/* ======================================================
              Brand Section
          ====================================================== */}

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight transition-colors hover:text-blue-600"
            >
              {SITE_CONFIG.name}
            </Link>

            <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
              {SITE_CONFIG.description}
            </p>

            {/* ======================================================
                Social Links
            ====================================================== */}

            <div className="flex items-center gap-3">
  <Link
    href={SITE_CONFIG.socials.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
  >
    <FaGithub className="h-5 w-5" />
  </Link>

  <Link
    href={SITE_CONFIG.socials.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
  >
    <FaLinkedin className="h-5 w-5" />
  </Link>
            </div>
          </div>

          {/* ======================================================
              Footer Navigation
          ====================================================== */}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-(--foreground)">
                Navigation
              </h3>

              <nav className="flex flex-col gap-3">
                {FOOTER_NAVIGATION.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      text-sm
                      text-slate-600
                      transition-colors
                      hover:text-blue-600
                      dark:text-slate-400
                      dark:hover:text-blue-400
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-(--foreground)">
                Resources
              </h3>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <p>Built with Next.js App Router</p>
                <p>TypeScript</p>
                <p>Tailwind CSS</p>
                <p>Production-ready Architecture</p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            Bottom Footer
        ====================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-(--border) py-6 text-center text-sm text-slate-600 dark:text-slate-400 md:flex-row">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights
            reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-medium text-(--foreground)">
              Ashish Sharma
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}