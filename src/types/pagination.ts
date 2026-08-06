import type { SortDirection } from "./common";

/**
 * Pagination strategy.
 */
export type PaginationType = "offset" | "cursor";

/**
 * Pagination request.
 */
export interface PaginationParams {
  readonly page: number;
  readonly limit: number;
}

/**
 * Sorting options.
 */
export interface SortOptions {
  readonly sortBy: string;
  readonly sortDirection: SortDirection;
}

/**
 * Offset pagination metadata.
 */
export interface PaginationMeta {
  readonly page: number;
  readonly limit: number;
  readonly totalItems: number;
  readonly totalPages: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}

/**
 * Cursor pagination parameters.
 */
export interface CursorPaginationParams {
  readonly cursor?: string;
  readonly limit: number;
}

/**
 * Cursor pagination metadata.
 */
export interface CursorPaginationMeta {
  readonly nextCursor?: string;
  readonly previousCursor?: string;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
}

/**
 * Generic paginated response.
 */
export interface PaginatedResult<T> {
  readonly items: readonly T[];
  readonly pagination: PaginationMeta;
}

/**
 * Generic cursor paginated response.
 */
export interface CursorPaginatedResult<T> {
  readonly items: readonly T[];
  readonly pagination: CursorPaginationMeta;
}
