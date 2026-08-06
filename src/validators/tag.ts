import { z } from "zod";

/**
 * Shared Fields
 */
const nameSchema = z
  .string()
  .trim()
  .min(2, "Tag name must be at least 2 characters.")
  .max(50, "Tag name cannot exceed 50 characters.");

const slugSchema = z
  .string()
  .trim()
  .min(2, "Slug must be at least 2 characters.")
  .max(100, "Slug cannot exceed 100 characters.")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Slug must contain only lowercase letters, numbers, and hyphens.",
  );

const descriptionSchema = z
  .string()
  .trim()
  .max(300, "Description cannot exceed 300 characters.")
  .optional();

const colorSchema = z
  .string()
  .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color.")
  .optional();

/**
 * Create Tag
 */
export const createTagSchema = z.object({
  name: nameSchema,
  slug: slugSchema,
  description: descriptionSchema,
  color: colorSchema,
});

export type CreateTagInput = z.infer<typeof createTagSchema>;

/**
 * Update Tag
 */
export const updateTagSchema = createTagSchema.partial();

export type UpdateTagInput = z.infer<typeof updateTagSchema>;

/**
 * Delete Tag
 */
export const deleteTagSchema = z.object({
  tagId: z.uuid("Invalid tag ID."),
});

export type DeleteTagInput = z.infer<typeof deleteTagSchema>;

/**
 * Restore Tag
 */
export const restoreTagSchema = z.object({
  tagId: z.uuid("Invalid tag ID."),
});

export type RestoreTagInput = z.infer<typeof restoreTagSchema>;
