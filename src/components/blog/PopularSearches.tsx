"use client";

import { Search } from "lucide-react";

import Badge from "@/components/common/Badge";
import { useSearch } from "@/hooks/useSearch";

interface SearchableItem {
  title?: string;
  excerpt?: string;
  tags?: string[];
  category?: {
    name: string;
  };
  author?: {
    name: string;
  };
}

interface PopularSearchesProps<
  T extends SearchableItem,
> {
  items: T[];
  searches: string[];
}

export default function PopularSearches<
  T extends SearchableItem,
>({
  items,
  searches,
}: Readonly<PopularSearchesProps<T>>) {
  const { query, setQuery } = useSearch(items);

  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        p-6
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-500/10">
          <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold tracking-tight">
            Popular Searches
          </h2>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Discover trending topics frequently explored by readers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {searches.map((search) => {
              const active =
                query.toLowerCase() ===
                search.toLowerCase();

              return (
                <button
                  key={search}
                  type="button"
                  onClick={() => setQuery(search)}
                  className="
                    rounded-full
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-ring
                    focus-visible:ring-offset-2
                  "
                >
                  <Badge
                    variant={
                      active
                        ? "default"
                        : "secondary"
                    }
                    className="
                      px-4
                      py-2
                      text-sm
                      font-medium
                    "
                  >
                    {search}
                  </Badge>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              {searches.length} Trending Topics
            </p>

            {query && (
              <p className="text-sm text-muted-foreground">
                Active:{" "}
                <span className="font-semibold text-foreground">
                  {query}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}