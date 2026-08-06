import type { ID } from "./common";
import type { PaginationMeta } from "./pagination";

/**
 * Standard API error object.
 */
export interface ApiError {
  readonly code: string;
  readonly message: string;
  readonly field?: string;
}

/**
 * Generic successful API response.
 */
export interface ApiSuccessResponse<T> {
  readonly success: true;
  readonly data: T;
  readonly message?: string;
  readonly timestamp: string;
}

/**
 * Generic failed API response.
 */
export interface ApiErrorResponse {
  readonly success: false;
  readonly error: ApiError;
  readonly timestamp: string;
}

/**
 * Standard API response.
 */
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Paginated API response.
 */
export interface PaginatedApiResponse<T> {
  readonly success: true;
  readonly data: readonly T[];
  readonly pagination: PaginationMeta;
  readonly message?: string;
  readonly timestamp: string;
}

/**
 * Metadata sent with API requests.
 */
export interface ApiRequestContext {
  readonly requestId?: ID;
  readonly ipAddress?: string;
  readonly userAgent?: string;
  readonly locale?: string;
}

/**
 * Sorting options.
 */
export interface SortOptions {
  readonly sortBy: string;
  readonly sortOrder: "asc" | "desc";
}

/**
 * Generic filter object.
 */
export type ApiFilters = Readonly<Record<string, unknown>>;

/**
 * API query parameters.
 */
export interface ApiQueryParams {
  readonly page?: number;
  readonly limit?: number;
  readonly search?: string;
  readonly sort?: SortOptions;
  readonly filters?: ApiFilters;
}

/**
 * Validation error.
 */
export interface ValidationError {
  readonly field: string;
  readonly message: string;
}

/**
 * Validation error response.
 */
export interface ValidationErrorResponse {
  readonly success: false;
  readonly errors: readonly ValidationError[];
  readonly timestamp: string;
}

/**
 * Resource creation response.
 */
export interface CreatedResponse {
  readonly id: ID;
  readonly message: string;
}

/**
 * Resource deletion response.
 */
export interface DeletedResponse {
  readonly id: ID;
  readonly deleted: true;
  readonly message: string;
}
