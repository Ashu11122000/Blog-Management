import { z } from "zod";

/**
 * Shared Fields
 */
const nameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters.")
  .max(100, "Name cannot exceed 100 characters.");

const emailSchema = z
  .email("Please enter a valid email address.")
  .trim()
  .toLowerCase();

const subjectSchema = z
  .string()
  .trim()
  .min(5, "Subject must be at least 5 characters.")
  .max(150, "Subject cannot exceed 150 characters.");

const messageSchema = z
  .string()
  .trim()
  .min(10, "Message must be at least 10 characters.")
  .max(5000, "Message cannot exceed 5000 characters.");

/**
 * Contact Form
 */
export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: subjectSchema,
  message: messageSchema,
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Reply to Contact Message
 */
export const replyContactSchema = z.object({
  contactId: z.uuid("Invalid contact ID."),
  message: messageSchema,
});

export type ReplyContactInput = z.infer<typeof replyContactSchema>;

/**
 * Delete Contact Message
 */
export const deleteContactSchema = z.object({
  contactId: z.uuid("Invalid contact ID."),
});

export type DeleteContactInput = z.infer<typeof deleteContactSchema>;

/**
 * Mark Contact Message as Read
 */
export const markContactAsReadSchema = z.object({
  contactId: z.uuid("Invalid contact ID."),
});

export type MarkContactAsReadInput = z.infer<typeof markContactAsReadSchema>;
