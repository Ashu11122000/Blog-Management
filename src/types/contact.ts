import type { ID, ISODateString } from "./common";

/**
 * Contact message status.
 */
export type ContactStatus = "PENDING" | "READ" | "REPLIED" | "ARCHIVED";

/**
 * Contact message subject.
 */
export type ContactSubject =
  "GENERAL" | "SUPPORT" | "FEEDBACK" | "PARTNERSHIP" | "OTHER";

/**
 * Contact form submission.
 */
export interface ContactMessage {
  readonly id: ID;
  readonly name: string;
  readonly email: string;
  readonly subject: ContactSubject;
  readonly message: string;
  readonly status: ContactStatus;
  readonly createdAt: ISODateString;
  readonly updatedAt: ISODateString;
}

/**
 * Contact form request.
 */
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: ContactSubject;
  readonly message: string;
}

/**
 * Contact message summary.
 */
export interface ContactSummary {
  readonly id: ID;
  readonly name: string;
  readonly email: string;
  readonly subject: ContactSubject;
  readonly status: ContactStatus;
  readonly createdAt: ISODateString;
}

/**
 * Contact filters.
 */
export interface ContactFilters {
  readonly status?: ContactStatus;
  readonly subject?: ContactSubject;
  readonly search?: string;
}

/**
 * Contact statistics.
 */
export interface ContactStats {
  readonly total: number;
  readonly pending: number;
  readonly read: number;
  readonly replied: number;
  readonly archived: number;
}
