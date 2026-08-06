import type { ID } from "./common";
import type { PostSummary } from "./post";
import type { UserSummary } from "./user";

/**
 * Bookmark visibility.
 */
export type BookmarkVisibility = "private" | "public";

/**
 * Minimal bookmark information.
 */
export interface BookmarkSummary {
  readonly id: ID;
  readonly userId: ID;
  readonly postId: ID;
  readonly createdAt: string;
}

/**
 * Complete bookmark.
 */
export interface Bookmark {
  readonly id: ID;
  readonly user: UserSummary;
  readonly post: PostSummary;
  readonly visibility: BookmarkVisibility;
  readonly createdAt: string;
}

/**
 * Create bookmark request.
 */
export interface CreateBookmarkRequest {
  readonly postId: ID;
}

/**
 * Delete bookmark request.
 */
export interface DeleteBookmarkRequest {
  readonly bookmarkId: ID;
}

/**
 * Bookmark statistics.
 */
export interface BookmarkStats {
  readonly totalBookmarks: number;
}

/**
 * User bookmark collection.
 */
export interface UserBookmarks {
  readonly items: readonly Bookmark[];
  readonly total: number;
}
