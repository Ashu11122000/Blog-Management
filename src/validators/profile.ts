import { z } from "zod";

/**
 * Shared Fields
 */
const firstNameSchema = z
  .string()
  .trim()
  .min(2, "First name must be at least 2 characters.")
  .max(50, "First name cannot exceed 50 characters.");

const lastNameSchema = z
  .string()
  .trim()
  .min(2, "Last name must be at least 2 characters.")
  .max(50, "Last name cannot exceed 50 characters.");

const usernameSchema = z
  .string()
  .trim()
  .min(3, "Username must be at least 3 characters.")
  .max(30, "Username cannot exceed 30 characters.")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username may only contain letters, numbers, and underscores.",
  );

const bioSchema = z
  .string()
  .trim()
  .max(500, "Bio cannot exceed 500 characters.")
  .optional();

const websiteSchema = z.url("Please enter a valid website URL.").optional();

const locationSchema = z
  .string()
  .trim()
  .max(100, "Location cannot exceed 100 characters.")
  .optional();

const avatarSchema = z.url("Please provide a valid avatar URL.").optional();

/**
 * Update Profile
 */
export const updateProfileSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  username: usernameSchema,
  bio: bioSchema,
  website: websiteSchema,
  location: locationSchema,
  avatar: avatarSchema,
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

/**
 * Update Avatar
 */
export const updateAvatarSchema = z.object({
  avatar: avatarSchema,
});

export type UpdateAvatarInput = z.infer<typeof updateAvatarSchema>;

/**
 * Delete Avatar
 */
export const deleteAvatarSchema = z.object({
  userId: z.uuid("Invalid user ID."),
});

export type DeleteAvatarInput = z.infer<typeof deleteAvatarSchema>;
