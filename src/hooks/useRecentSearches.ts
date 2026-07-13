"use client";

import { useCallback, useState } from "react";

const STORAGE_KEY = "blog-management:recent-searches";
const MAX_RECENT_SEARCHES = 5;

function getStoredSearches(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed)
      ? parsed.filter(
          (item): item is string =>
            typeof item === "string",
        )
      : [];
  } catch {
    return [];
  }
}

export function useRecentSearches() {
  const [recentSearches, setRecentSearches] =
    useState<string[]>(getStoredSearches);

  const updateStorage = useCallback(
    (searches: string[]) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(searches),
        );
      }
    },
    [],
  );

  const addSearch = useCallback(
    (search: string) => {
      const value = search.trim();

      if (!value) {
        return;
      }

      setRecentSearches((previous) => {
        const updated = [
          value,
          ...previous.filter(
            (item) =>
              item.toLowerCase() !==
              value.toLowerCase(),
          ),
        ].slice(0, MAX_RECENT_SEARCHES);

        updateStorage(updated);

        return updated;
      });
    },
    [updateStorage],
  );

  const removeSearch = useCallback(
    (search: string) => {
      setRecentSearches((previous) => {
        const updated = previous.filter(
          (item) => item !== search,
        );

        updateStorage(updated);

        return updated;
      });
    },
    [updateStorage],
  );

  const clearSearches = useCallback(() => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    setRecentSearches([]);
  }, []);

  return {
    recentSearches,
    addSearch,
    removeSearch,
    clearSearches,
  };
}