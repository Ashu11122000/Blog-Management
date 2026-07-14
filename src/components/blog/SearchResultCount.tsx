import { FileText, Search } from "lucide-react";

interface SearchResultCountProps {
  query: string;
  totalResults: number;
  totalItems: number;
}

export default function SearchResultCount({
  query,
  totalResults,
  totalItems,
}: Readonly<SearchResultCountProps>) {
  const hasQuery = query.trim().length > 0;

  return (
    <section
      className="
        flex
        flex-col
        gap-5
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        p-6
        shadow-sm
        sm:flex-row
        sm:items-center
        sm:justify-between
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            rounded-xl
            bg-blue-100
            p-3
            dark:bg-blue-500/10
          "
        >
          {hasQuery ? (
            <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          ) : (
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight">
            {hasQuery ? "Search Results" : "All Articles"}
          </h2>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {hasQuery ? (
              <>
                Found{" "}
                <span className="font-semibold text-foreground">
                  {totalResults}
                </span>{" "}
                result{totalResults !== 1 ? "s" : ""} matching{" "}
                <span className="font-semibold text-foreground">
                  &quot;{query}&quot;
                </span>
                .
              </>
            ) : (
              <>
                Browse all{" "}
                <span className="font-semibold text-foreground">
                  {totalItems}
                </span>{" "}
                published article
                {totalItems !== 1 ? "s" : ""}.
              </>
            )}
          </p>
        </div>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-3
          text-center
          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        <p className="text-2xl font-bold text-slate-900 dark:text-white">
          {hasQuery ? totalResults : totalItems}
        </p>

        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {hasQuery ? "Results Found" : "Total Articles"}
        </p>
      </div>
    </section>
  );
}