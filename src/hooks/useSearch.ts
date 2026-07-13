"use client";

import { useMemo } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

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

export function useSearch<T extends SearchableItem>(
  items: T[],
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.title?.toLowerCase().includes(search) ||
        item.excerpt?.toLowerCase().includes(search) ||
        item.author?.name.toLowerCase().includes(search) ||
        item.category?.name.toLowerCase().includes(search) ||
        item.tags?.some((tag) =>
          tag.toLowerCase().includes(search),
        )
      );
    });
  }, [items, query]);

  const setQuery = (value: string) => {
    const params = new URLSearchParams(
      searchParams.toString(),
    );

    const trimmed = value.trim();

    if (trimmed) {
      params.set("q", trimmed);
    } else {
      params.delete("q");
    }

    const search = params.toString();

    router.replace(
      search
        ? `${pathname}?${search}`
        : pathname,
      {
        scroll: false,
      },
    );
  };

  return {
    query,
    setQuery,
    filteredItems,
    totalResults: filteredItems.length,
  };
}