"use client";

import { useTheme as useNextTheme } from "next-themes";

/**
 * ==========================================================
 * useTheme Hook
 * ==========================================================
 *
 * A lightweight wrapper around next-themes.
 *
 * Responsibilities
 * ----------------
 * ✓ Exposes current theme
 * ✓ Updates active theme
 * ✓ Supports:
 *   • light
 *   • dark
 *   • system
 */

export function useTheme() {
    return useNextTheme();
}