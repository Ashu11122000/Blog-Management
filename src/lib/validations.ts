import { z } from "zod";

/**
 * ==========================================================
 * Contact Form Validation
 * ==========================================================
 */

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .email("Please enter a valid email address.")
    .max(255, "Email cannot exceed 255 characters."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters.")
    .max(150, "Subject cannot exceed 150 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(2000, "Message cannot exceed 2000 characters."),
});

export type ContactSchema = z.infer<typeof contactSchema>;

/**
 * ==========================================================
 * Login Form Validation
 * ==========================================================
 */

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address.")
    .max(255, "Email cannot exceed 255 characters."),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters.")
    .max(100, "Password cannot exceed 100 characters."),
});

export type LoginSchema = z.infer<typeof loginSchema>;