import { z } from "zod";

/**
 * Shared Fields
 */
const emailSchema = z
  .email("Please enter a valid email address.")
  .trim()
  .toLowerCase();

/**
 * Subscribe to Newsletter
 */
export const subscribeNewsletterSchema = z.object({
  email: emailSchema,
});

export type SubscribeNewsletterInput = z.infer<
  typeof subscribeNewsletterSchema
>;

/**
 * Unsubscribe from Newsletter
 */
export const unsubscribeNewsletterSchema = z.object({
  email: emailSchema,
});

export type UnsubscribeNewsletterInput = z.infer<
  typeof unsubscribeNewsletterSchema
>;

/**
 * Verify Newsletter Subscription
 */
export const verifyNewsletterSchema = z.object({
  token: z.string().min(1, "Verification token is required."),
});

export type VerifyNewsletterInput = z.infer<typeof verifyNewsletterSchema>;

/**
 * Resend Verification Email
 */
export const resendNewsletterVerificationSchema = z.object({
  email: emailSchema,
});

export type ResendNewsletterVerificationInput = z.infer<
  typeof resendNewsletterVerificationSchema
>;
