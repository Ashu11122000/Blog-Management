import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <div className="space-y-4">
                <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                    Page Not Found
                </h2>

                <p className="mx-auto max-w-md text-slate-600 dark:text-slate-400">
                    Sorry, the page you are looking for doesn&apos;t exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                    Go Back Home
                </Link>
            </div>
        </main>
    );
}
