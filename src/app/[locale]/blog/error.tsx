"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function BlogError({
  error,
  reset,
}: Readonly<ErrorProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-950 dark:to-red-950/20" />

      <Container className="max-w-2xl">
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-slate-800/70 dark:bg-slate-900/80 sm:p-12"
        >
          {/* Error Icon */}
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <AlertTriangle
                className="h-10 w-10 animate-pulse text-red-600 dark:text-red-400"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Oops! Something went wrong
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
            We couldn&apos;t load this blog page. The problem may be temporary.
            Please try again or return to the blog listing.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={reset}
              leftIcon={<RefreshCw className="h-4 w-4" />}
            >
              Try Again
            </Button>

            <Link href="/blog">
              <Button variant="outline">Back to Blogs</Button>
            </Link>
          </div>

          {/* Development Error */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-5 text-left dark:border-red-900/50 dark:bg-red-950/20">
              <h2 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-300">
                Development Error
              </h2>

              {error.digest && (
                <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                  Digest: {error.digest}
                </p>
              )}

              <pre className="max-h-64 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-white/70 p-3 text-xs leading-6 text-red-700 dark:bg-slate-900/70 dark:text-red-400">
                {error.stack ?? error.message}
              </pre>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}