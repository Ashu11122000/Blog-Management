import type { ID, ISODateString } from "./common";
import type { UserSummary } from "./user";

/**
 * Comment status.
 */
export type CommentStatus = "PENDING" | "APPROVED" | "REJECTED" | "SPAM";

/**
 * Minimal comment information.
 */
export interface CommentSummary {
  readonly id: ID;
  readonly content: string;
  readonly author: UserSummary;
  readonly createdAt: ISODateString;
}

/**
 * Comment author information.
 */
export interface CommentAuthor {
  readonly id: ID;
  readonly name: string;
  readonly image?: string | null;
}

/**
 * Complete comment.
 */
export interface Comment {
  readonly id: ID;
  readonly postId: ID;
  readonly parentId: ID | null;

  readonly content: string;

  readonly status: CommentStatus;

  readonly author: CommentAuthor;

  readonly replies: readonly Comment[];

  readonly createdAt: ISODateString;
  readonly updatedAt: ISODateString;
}

/**
 * Create comment request.
 */
export interface CreateCommentRequest {
  readonly postId: ID;
  readonly parentId?: ID;
  readonly content: string;
}

/**
 * Update comment request.
 */
export interface UpdateCommentRequest {
  readonly content: string;
}

/**
 * Comment moderation request.
 */
export interface ModerateCommentRequest {
  readonly status: Exclude<CommentStatus, "PENDING">;
}

/**
 * Comment statistics.
 */
export interface CommentStats {
  readonly total: number;
  readonly approved: number;
  readonly pending: number;
  readonly rejected: number;
  readonly spam: number;
}

/**
 * Nested comment tree.
 */
export interface CommentTree {
  readonly comment: Comment;
  readonly children: readonly CommentTree[];
}
