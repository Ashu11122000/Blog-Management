"use client";

import { Search, X } from "lucide-react";

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
  placeholder = "Search articles...",
  className,
}: Readonly<SearchBarProps<T>>) {
  const { query, setQuery } = useSearch(items);

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          leftIcon={
            <Search
              className="h-4 w-4"
              aria-hidden="true"
            />
          }
          aria-label="Search"
        />

        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}