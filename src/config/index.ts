/**
 * =============================================================================
 * Configuration Exports
 * =============================================================================
 *
 * Centralized exports for all application configuration.
 *
 * Example:
 *
 * import { env, SITE_CONFIG, DATABASE_CONFIG } from "@/config";
 * =============================================================================
 */

export { env } from "./env";

export { default as DATABASE_CONFIG } from "./database";
export type { DatabaseConfig } from "./database";

export { default as EMAIL_CONFIG } from "./email";
export type { EmailConfig } from "./email";

export { default as SITE_CONFIG } from "./site";
export type { SiteConfig } from "./site";
