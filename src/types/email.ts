import type { ID, ISODateString } from "./common";

/**
 * Email provider.
 */
export type EmailProvider = "resend" | "sendgrid" | "nodemailer" | "aws-ses";

/**
 * Email status.
 */
export type EmailStatus =
  "pending" | "queued" | "sent" | "delivered" | "failed";

/**
 * Email priority.
 */
export type EmailPriority = "low" | "normal" | "high";

/**
 * Email recipient.
 */
export interface EmailRecipient {
  readonly name?: string;
  readonly email: string;
}

/**
 * Email attachment.
 */
export interface EmailAttachment {
  readonly filename: string;
  readonly contentType: string;
  readonly url?: string;
}

/**
 * Email payload.
 */
export interface EmailPayload {
  readonly from: EmailRecipient;
  readonly to: readonly EmailRecipient[];
  readonly cc?: readonly EmailRecipient[];
  readonly bcc?: readonly EmailRecipient[];

  readonly subject: string;

  readonly html?: string;
  readonly text?: string;

  readonly attachments?: readonly EmailAttachment[];

  readonly priority?: EmailPriority;
}

/**
 * Email message.
 */
export interface EmailMessage {
  readonly id: ID;
  readonly provider: EmailProvider;
  readonly status: EmailStatus;
  readonly payload: EmailPayload;
  readonly sentAt?: ISODateString;
}

/**
 * Email template.
 */
export interface EmailTemplate {
  readonly id: string;
  readonly name: string;
  readonly subject: string;
}

/**
 * Email send result.
 */
export interface EmailSendResult {
  readonly success: boolean;
  readonly messageId?: string;
  readonly error?: string;
}
