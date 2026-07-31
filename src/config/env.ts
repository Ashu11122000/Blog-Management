import { z } from "zod";

/**
 * =============================================================================
 * Environment Variables
 * =============================================================================
 *
 * Single source of truth for all environment variables.
 *
 * Rules:
 * - Never use process.env outside this file.
 * - Validate everything at startup.
 * - Fail fast if configuration is invalid.
 * - Import `env` throughout the application.
 * =============================================================================
 */

const envSchema = z.object({
  /**
   * Application
   */
  NODE_ENV: z.enum(["development", "test", "production"]),

  NEXT_PUBLIC_APP_NAME: z.string().min(1),

  NEXT_PUBLIC_APP_URL: z.url(),

  /**
   * Database
   */
  DATABASE_URL: z.string().min(1),

  /**
   * Authentication
   */
  AUTH_SECRET: z.string().min(32),

  AUTH_URL: z.url(),

  /**
   * Cloudinary
   */
  CLOUDINARY_CLOUD_NAME: z.string().min(1),

  CLOUDINARY_API_KEY: z.string().min(1),

  CLOUDINARY_API_SECRET: z.string().min(1),

  /**
   * Email
   */
  EMAIL_FROM_NAME: z.string().min(1),

  EMAIL_FROM_ADDRESS: z.email(),

  /**
   * Optional SMTP
   */
  SMTP_HOST: z.string().optional(),

  SMTP_PORT: z.coerce.number().optional(),

  SMTP_USER: z.string().optional(),

  SMTP_PASSWORD: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    parsed.error.flatten().fieldErrors,
  );

  throw new Error("Invalid environment variables.");
}

export const env = Object.freeze(parsed.data);

export type Env = typeof env;
