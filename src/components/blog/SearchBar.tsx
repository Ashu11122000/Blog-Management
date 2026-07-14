"use client";

import { Search, Sparkles, X } from "lucide-react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
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

interface SearchBarProps<T extends SearchableItem> {
  items: T[];
  placeholder?: string;
  className?: string;
}

export default function SearchBar<
  T extends SearchableItem,
>({
  items,
  placeholder = "Search articles, topics, authors...",
  className,
}: Readonly<SearchBarProps<T>>) {
  const { query, setQuery } = useSearch(items);

  return (
    <section
      className={[
        "rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors",
        "dark:border-slate-800 dark:bg-slate-900",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/10">
          <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Search Articles
            </h2>

            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              Smart Search
            </span>
          </div>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Find articles by title, category, author, or technology in just a
            few keystrokes.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-3">
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          leftIcon={
            <Search
              className="h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
          }
          aria-label="Search articles"
          className="h-12 rounded-xl"
        />

        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Clear search"
            onClick={() => setQuery("")}
            className="
              h-12
              w-12
              rounded-xl
              border
              border-slate-200
              hover:bg-red-50
              hover:text-red-600
              dark:border-slate-700
              dark:hover:bg-red-500/10
              dark:hover:text-red-400
            "
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
        <p className="text-muted-foreground">
          Search by article title, category, author, or tag.
        </p>

        {query ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm dark:bg-blue-500/10">
            <span className="text-muted-foreground">
              Searching for
            </span>

            <span className="font-semibold text-foreground">
              &quot;{query}&quot;
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-muted-foreground dark:bg-slate-800">
            Start typing to search
          </div>
        )}
      </div>
    </section>
  );
}