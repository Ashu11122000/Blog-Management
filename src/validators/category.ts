import { z } from "zod";

/**
 * Shared Fields
 */
const nameSchema = z
  .string()
  .trim()
  .min(2, "Category name must be at least 2 characters.")
  .max(100, "Category name cannot exceed 100 characters.");

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
  .max(500, "Description cannot exceed 500 characters.")
  .optional();

const colorSchema = z
  .string()
  .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color.")
  .optional();

/**
 * Create Category
 */
export const createCategorySchema = z.object({
  name: nameSchema,
  slug: slugSchema,
  description: descriptionSchema,
  color: colorSchema,
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;

/**
 * Update Category
 */
export const updateCategorySchema = createCategorySchema.partial();

export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;

/**
 * Delete Category
 */
export const deleteCategorySchema = z.object({
  categoryId: z.uuid("Invalid category ID."),
});

export type DeleteCategoryInput = z.infer<typeof deleteCategorySchema>;

/**
 * Restore Category
 */
export const restoreCategorySchema = z.object({
  categoryId: z.uuid("Invalid category ID."),
});

export type RestoreCategoryInput = z.infer<typeof restoreCategorySchema>;
