/**
 * =============================================================================
 * Upload Constants
 * =============================================================================
 *
 * Shared upload configuration used throughout the application.
 *
 * Responsibilities:
 * - File size limits
 * - Allowed MIME types
 * - Allowed extensions
 * - Upload paths
 * - Image constraints
 * =============================================================================
 */

export const UPLOAD = {
  /**
   * Maximum file sizes (bytes)
   */
  MAX_SIZE: {
    IMAGE: 5 * 1024 * 1024, // 5 MB
    AVATAR: 2 * 1024 * 1024, // 2 MB
    DOCUMENT: 10 * 1024 * 1024, // 10 MB
  },

  /**
   * Allowed MIME types
   */
  MIME_TYPES: {
    IMAGE: ["image/jpeg", "image/png", "image/webp", "image/gif"] as const,

    DOCUMENT: ["application/pdf"] as const,
  },

  /**
   * Allowed file extensions
   */
  EXTENSIONS: {
    IMAGE: [".jpg", ".jpeg", ".png", ".webp", ".gif"] as const,
    DOCUMENT: [".pdf"] as const,
  },

  /**
   * Upload directories
   */
  PATHS: {
    POSTS: "posts",
    AVATARS: "avatars",
    TEMP: "temp",
  },

  /**
   * Image constraints
   */
  IMAGE: {
    MAX_WIDTH: 4000,
    MAX_HEIGHT: 4000,
    MIN_WIDTH: 300,
    MIN_HEIGHT: 300,
  },

  /**
   * Upload limits
   */
  LIMITS: {
    MAX_FILES_PER_REQUEST: 5,
  },
} as const;

export type UploadConstants = typeof UPLOAD;

export default UPLOAD;
