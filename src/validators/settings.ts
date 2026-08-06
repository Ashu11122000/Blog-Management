import { z } from "zod";

/**
 * Theme
 */
const themeSchema = z.enum(["LIGHT", "DARK", "SYSTEM"]);

/**
 * Language
 */
const languageSchema = z
  .string()
  .trim()
  .min(2, "Language code is required.")
  .max(10, "Invalid language code.");

/**
 * Timezone
 */
const timezoneSchema = z
  .string()
  .trim()
  .min(1, "Timezone is required.")
  .max(100, "Invalid timezone.");

/**
 * Notification Settings
 */
const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean(),
  commentNotifications: z.boolean(),
  newsletterNotifications: z.boolean(),
});

/**
 * Privacy Settings
 */
const privacySettingsSchema = z.object({
  profilePublic: z.boolean(),
  showEmail: z.boolean(),
});

/**
 * Update User Settings
 */
export const updateSettingsSchema = z.object({
  theme: themeSchema,
  language: languageSchema,
  timezone: timezoneSchema,
  notifications: notificationSettingsSchema,
  privacy: privacySettingsSchema,
});

export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;

/**
 * Update Theme
 */
export const updateThemeSchema = z.object({
  theme: themeSchema,
});

export type UpdateThemeInput = z.infer<typeof updateThemeSchema>;

/**
 * Update Notification Settings
 */
export const updateNotificationSettingsSchema = z.object({
  notifications: notificationSettingsSchema,
});

export type UpdateNotificationSettingsInput = z.infer<
  typeof updateNotificationSettingsSchema
>;

/**
 * Update Privacy Settings
 */
export const updatePrivacySettingsSchema = z.object({
  privacy: privacySettingsSchema,
});

export type UpdatePrivacySettingsInput = z.infer<
  typeof updatePrivacySettingsSchema
>;
