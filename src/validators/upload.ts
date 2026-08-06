import { z } from "zod";

/**
 * Shared Fields
 */
const imageMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;

const documentMimeTypes = ["application/pdf"] as const;

const imageFileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "File name is required.")
    .max(255, "File name cannot exceed 255 characters."),

  type: z.enum(imageMimeTypes, {
    message: "Unsupported image format.",
  }),

  size: z
    .number()
    .positive("File size must be greater than 0.")
    .max(5 * 1024 * 1024, "Image must not exceed 5 MB."),
});

const documentFileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "File name is required.")
    .max(255, "File name cannot exceed 255 characters."),

  type: z.enum(documentMimeTypes, {
    message: "Unsupported document format.",
  }),

  size: z
    .number()
    .positive("File size must be greater than 0.")
    .max(10 * 1024 * 1024, "Document must not exceed 10 MB."),
});

/**
 * Upload Image
 */
export const uploadImageSchema = imageFileSchema;

export type UploadImageInput = z.infer<typeof uploadImageSchema>;

/**
 * Upload Document
 */
export const uploadDocumentSchema = documentFileSchema;

export type UploadDocumentInput = z.infer<typeof uploadDocumentSchema>;

/**
 * Delete Uploaded File
 */
export const deleteUploadSchema = z.object({
  fileId: z.uuid("Invalid file ID."),
});

export type DeleteUploadInput = z.infer<typeof deleteUploadSchema>;
