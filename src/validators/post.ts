import { z } from "zod";

/**
 * Shared Fields
 */
const titleSchema = z
  .string()
  .trim()
  .min(3, "Title must be at least 3 characters.")
  .max(200, "Title cannot exceed 200 characters.");

const slugSchema = z
  .string()
  .trim()
  .min(3, "Slug must be at least 3 characters.")
  .max(200, "Slug cannot exceed 200 characters.")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Slug must contain only lowercase letters, numbers, and hyphens.",
  );

const excerptSchema = z
  .string()
  .trim()
  .max(500, "Excerpt cannot exceed 500 characters.")
  .optional();

const contentSchema = z
  .string()
  .trim()
  .min(20, "Content must be at least 20 characters.");

const featuredImageSchema = z
  .url("Please provide a valid image URL.")
  .optional();

const seoTitleSchema = z
  .string()
  .trim()
  .max(60, "SEO title cannot exceed 60 characters.")
  .optional();

const seoDescriptionSchema = z
  .string()
  .trim()
  .max(160, "SEO description cannot exceed 160 characters.")
  .optional();

const categoryIdSchema = z.uuid("Invalid category ID.");

const tagIdsSchema = z.array(z.uuid("Invalid tag ID.")).default([]);

/**
 * Create Post
 */
export const createPostSchema = z.object({
  title: titleSchema,
  slug: slugSchema,
  excerpt: excerptSchema,
  content: contentSchema,
  featuredImage: featuredImageSchema,
  categoryId: categoryIdSchema,
  tagIds: tagIdsSchema,
  seoTitle: seoTitleSchema,
  seoDescription: seoDescriptionSchema,
});

export type CreatePostInput = z.infer<typeof createPostSchema>;

/**
 * Update Post
 */
export const updatePostSchema = createPostSchema.partial();

export type UpdatePostInput = z.infer<typeof updatePostSchema>;

/**
 * Save Draft
 */
export const saveDraftSchema = createPostSchema.partial();

export type SaveDraftInput = z.infer<typeof saveDraftSchema>;

/**
 * Publish Post
 */
export const publishPostSchema = z.object({
  postId: z.uuid("Invalid post ID."),
});

export type PublishPostInput = z.infer<typeof publishPostSchema>;

/**
 * Schedule Post
 */
export const schedulePostSchema = z.object({
  postId: z.uuid("Invalid post ID."),
  publishedAt: z.iso.datetime({
    message: "Invalid publish date.",
  }),
});

export type SchedulePostInput = z.infer<typeof schedulePostSchema>;

/**
 * Delete Post
 */
export const deletePostSchema = z.object({
  postId: z.uuid("Invalid post ID."),
});

export type DeletePostInput = z.infer<typeof deletePostSchema>;

/**
 * Restore Post
 */
export const restorePostSchema = z.object({
  postId: z.uuid("Invalid post ID."),
});

export type RestorePostInput = z.infer<typeof restorePostSchema>;

/**
 * Change Post Status
 */
export const changePostStatusSchema = z.object({
  postId: z.uuid("Invalid post ID."),
  status: z.enum(["DRAFT", "PUBLISHED", "SCHEDULED", "ARCHIVED"]),
});

export type ChangePostStatusInput = z.infer<typeof changePostStatusSchema>;
