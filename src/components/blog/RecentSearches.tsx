"use client";

import { Clock3, Trash2, X } from "lucide-react";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { useRecentSearches } from "@/hooks/useRecentSearches";

interface RecentSearchesProps {
  onSelect?: (search: string) => void;
}

export default function RecentSearches({
  onSelect,
}: Readonly<RecentSearchesProps>) {
  const {
    recentSearches,
    removeSearch,
    clearSearches,
  } = useRecentSearches();

  if (recentSearches.length === 0) {
    return null;
  }

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
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-amber-100 p-3 dark:bg-amber-500/10">
            <Clock3 className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Recent Searches
            </h2>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Quickly continue exploring topics you&apos;ve searched for recently.
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={clearSearches}
          className="gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Clear
        </Button>
      </div>

      {/* Search Chips */}
      <div className="mt-6 flex flex-wrap gap-3">
        {recentSearches.map((search) => (
          <div
            key={search}
            className="
              group
              flex
              items-center
              rounded-full
              border
              border-slate-200
              bg-slate-50
              p-1
              transition-all
              duration-200
              hover:border-blue-300
              hover:bg-blue-50
              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:border-blue-700
              dark:hover:bg-blue-950/30
            "
          >
            <button
              type="button"
              onClick={() => onSelect?.(search)}
              className="
                rounded-full
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
              "
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {search}
              </Badge>
            </button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove ${search}`}
              onClick={() => removeSearch(search)}
              className="
                ml-1
                h-8
                w-8
                rounded-full
                p-0
                text-muted-foreground
                hover:bg-red-100
                hover:text-red-600
                dark:hover:bg-red-500/10
                dark:hover:text-red-400
              "
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
          {recentSearches.length}{" "}
          {recentSearches.length === 1
            ? "Recent Search"
            : "Recent Searches"}
        </p>

        <p className="text-sm text-muted-foreground">
          Search history is stored locally.
        </p>
      </div>
    </section>
  );
}