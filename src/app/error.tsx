"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: Readonly<ErrorPageProps>) {
  console.error(error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="max-w-md text-gray-600 dark:text-gray-400">
        An unexpected error occurred while loading this page.
      </p>

      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
      >
        Try Again
      </button>
    </main>
  );
}