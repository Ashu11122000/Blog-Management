/**
 * =============================================================================
 * API Constants
 * =============================================================================
 *
 * Centralized API constants used across Route Handlers,
 * Server Actions and HTTP clients.
 *
 * Responsibilities:
 * - API version
 * - Base paths
 * - HTTP methods
 * - Content types
 * - Headers
 * - Timeouts
 * - Request limits
 * - Status codes
 * =============================================================================
 */

export const API = {
  /**
   * API Version
   */
  VERSION: "v1",

  /**
   * Base Route
   */
  PREFIX: "/api",

  /**
   * Base API Path
   */
  BASE_PATH: "/api/v1",

  /**
   * Request Timeout (milliseconds)
   */
  TIMEOUT: 30_000,

  /**
   * Maximum Request Body Size
   */
  MAX_REQUEST_SIZE: 10 * 1024 * 1024, // 10 MB

  /**
   * Default Headers
   */
  HEADERS: {
    CONTENT_TYPE: "Content-Type",
    ACCEPT: "Accept",
    AUTHORIZATION: "Authorization",
    CACHE_CONTROL: "Cache-Control",
    X_REQUEST_ID: "X-Request-Id",
  },

  /**
   * Content Types
   */
  CONTENT_TYPES: {
    JSON: "application/json",
    FORM_DATA: "multipart/form-data",
    URL_ENCODED: "application/x-www-form-urlencoded",
    TEXT: "text/plain",
  },

  /**
   * HTTP Methods
   */
  METHODS: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS",
    HEAD: "HEAD",
  },

  /**
   * Cache Control
   */
  CACHE: {
    NO_STORE: "no-store",
    NO_CACHE: "no-cache",
    PRIVATE: "private",
    PUBLIC: "public",
  },
} as const;

export default API;
