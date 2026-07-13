"use server";

import { contactSchema } from "@/lib/validations";
import type { ContactFormState } from "@/types/contact";

/**
 * ==========================================================
 * Contact Server Action
 * ==========================================================
 *
 * Validates submitted form data.
 * Later this can be extended to:
 *
 * • Send emails
 * • Store messages in a database
 * • Trigger notifications
 * • Integrate with Resend, Nodemailer, etc.
 */

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate async work (email, DB, API, etc.)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Your message has been sent successfully!",
  };
}