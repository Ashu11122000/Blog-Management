"use client";

import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
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
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-foreground">
          Recent Searches
        </h2>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={clearSearches}
        >
          Clear History
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {recentSearches.map((search) => (
          <div
            key={search}
            className="flex items-center gap-1"
          >
            <button
              type="button"
              onClick={() => onSelect?.(search)}
              className="focus:outline-none"
            >
              <Badge variant="secondary">
                {search}
              </Badge>
            </button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove ${search}`}
              onClick={() => removeSearch(search)}
              className="h-6 w-6 rounded-full p-0"
            >
              ×
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}