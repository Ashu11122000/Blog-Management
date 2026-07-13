"use client";

import { useEffect, useState } from "react";

/**
 * ==========================================================
 * useDebounce Hook
 * ==========================================================
 *
 * Delays updating the returned value until after
 * the specified delay has elapsed.
 *
 * Useful for:
 * - Search inputs
 * - API requests
 * - Filtering
 * - Expensive calculations
 */

export function useDebounce<T>(
  value: T,
  delay = 300,
): T {
  const [debouncedValue, setDebouncedValue] =
    useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}