import { z } from "zod";

/**
 * Shared Fields
 */
const contentSchema = z
  .string()
  .trim()
  .min(2, "Comment must be at least 2 characters.")
  .max(2000, "Comment cannot exceed 2000 characters.");

/**
 * Create Comment
 */
export const createCommentSchema = z.object({
  postId: z.uuid("Invalid post ID."),
  parentId: z.uuid("Invalid parent comment ID.").optional(),
  content: contentSchema,
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;

/**
 * Update Comment
 */
export const updateCommentSchema = z.object({
  commentId: z.uuid("Invalid comment ID."),
  content: contentSchema,
});

export type UpdateCommentInput = z.infer<typeof updateCommentSchema>;

/**
 * Delete Comment
 */
export const deleteCommentSchema = z.object({
  commentId: z.uuid("Invalid comment ID."),
});

export type DeleteCommentInput = z.infer<typeof deleteCommentSchema>;

/**
 * Restore Comment
 */
export const restoreCommentSchema = z.object({
  commentId: z.uuid("Invalid comment ID."),
});

export type RestoreCommentInput = z.infer<typeof restoreCommentSchema>;

/**
 * Approve Comment
 */
export const approveCommentSchema = z.object({
  commentId: z.uuid("Invalid comment ID."),
});

export type ApproveCommentInput = z.infer<typeof approveCommentSchema>;

/**
 * Reject Comment
 */
export const rejectCommentSchema = z.object({
  commentId: z.uuid("Invalid comment ID."),
});

export type RejectCommentInput = z.infer<typeof rejectCommentSchema>;

/**
 * Mark Comment as Spam
 */
export const markCommentAsSpamSchema = z.object({
  commentId: z.uuid("Invalid comment ID."),
});

export type MarkCommentAsSpamInput = z.infer<typeof markCommentAsSpamSchema>;
