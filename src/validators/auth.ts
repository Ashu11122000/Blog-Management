import { z } from "zod";

/**
 * Login
 */
export const loginSchema = z.object({
  email: z.email("Please enter a valid email address.").trim().toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password cannot exceed 100 characters."),
});

export type LoginInput = z.infer<typeof loginSchema>;

/**
 * Register
 */
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters.")
      .max(50, "First name cannot exceed 50 characters."),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters.")
      .max(50, "Last name cannot exceed 50 characters."),

    email: z.email("Please enter a valid email address.").trim().toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password cannot exceed 100 characters.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character.",
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type RegisterInput = z.infer<typeof registerSchema>;

/**
 * Forgot Password
 */
export const forgotPasswordSchema = z.object({
  email: z.email("Please enter a valid email address.").trim().toLowerCase(),
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

/**
 * Reset Password
 */
export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, "Reset token is required."),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password cannot exceed 100 characters."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

/**
 * Change Password
 */
export const changePasswordSchema = z
  .object({
    currentPassword: z.string(),

    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password cannot exceed 100 characters."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

/**
 * Verify Email
 */
export const verifyEmailSchema = z.object({
  token: z.string().min(1, "Verification token is required."),
});

export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;

/**
 * Resend Verification Email
 */
export const resendVerificationSchema = z.object({
  email: z.email("Please enter a valid email address.").trim().toLowerCase(),
});

export type ResendVerificationInput = z.infer<typeof resendVerificationSchema>;
