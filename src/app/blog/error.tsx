"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

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
    <main className="flex min-h-[80vh] items-center justify-center py-16">
      <Container className="max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle
              className="h-10 w-10 text-red-600 dark:text-red-400"
              aria-hidden="true"
            />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight">
            Something went wrong
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            We couldn&apos;t load this blog page. The error may be temporary.
            Try again or return to the blog listing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              leftIcon={<RefreshCw className="h-4 w-4" />}
              onClick={reset}
            >
              Try Again
            </Button>

            <Link href="/blog">
              <Button variant="outline">
                Back to Blogs
              </Button>
            </Link>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-8 rounded-lg bg-slate-100 p-4 text-left dark:bg-slate-800">
              <p className="mb-2 text-sm font-semibold">
                Development Error
              </p>

              <code className="wrap-break-word text-xs text-red-600 dark:text-red-400">
                {error.message}
              </code>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}