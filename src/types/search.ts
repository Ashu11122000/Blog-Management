import type { ID } from "./common";
import type { PaginationParams, SortOptions } from "./pagination";

/**
 * Search scope.
 */
export type SearchScope =
  "posts" | "categories" | "tags" | "authors" | "comments" | "users" | "all";

/**
 * Search result type.
 */
export type SearchResultType =
  "post" | "category" | "tag" | "author" | "comment" | "user";

/**
 * Search query parameters.
 */
export interface SearchQuery extends PaginationParams {
  readonly query: string;
  readonly scope?: SearchScope;
  readonly sort?: SortOptions;
}

/**
 * Search filters.
 */
export interface SearchFilters {
  readonly categoryId?: ID;
  readonly tagId?: ID;
  readonly authorId?: ID;
  readonly published?: boolean;
}

/**
 * Highlighted search match.
 */
export interface SearchHighlight {
  readonly field: string;
  readonly snippet: string;
}

/**
 * Generic search result.
 */
export interface SearchResult {
  readonly id: ID;
  readonly type: SearchResultType;
  readonly title: string;
  readonly description?: string;
  readonly url: string;
  readonly highlights?: readonly SearchHighlight[];
}

/**
 * Search response.
 */
export interface SearchResponse<T> {
  readonly query: string;
  readonly results: readonly T[];
  readonly totalResults: number;
  readonly executionTime: number;
}

/**
 * Search suggestions.
 */
export interface SearchSuggestion {
  readonly id: ID;
  readonly text: string;
  readonly type: SearchResultType;
}

/**
 * Recent search.
 */
export interface RecentSearch {
  readonly id: ID;
  readonly query: string;
  readonly searchedAt: string;
}
