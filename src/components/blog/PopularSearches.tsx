"use client";

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
    <div className="space-y-3">
      <h2 className="text-sm font-medium text-foreground">
        Popular Searches
      </h2>

      <div className="flex flex-wrap gap-2">
        {searches.map((search) => {
          const active =
            query.toLowerCase() ===
            search.toLowerCase();

          return (
            <button
              key={search}
              type="button"
              onClick={() => setQuery(search)}
              className="transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            >
              <Badge
                variant={
                  active
                    ? "default"
                    : "secondary"
                }
              >
                {search}
              </Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}