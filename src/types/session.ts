import type { ID, ISODateString } from "./common";
import type { Permission } from "./permission";
import type { UserRole } from "./role";

/**
 * Session status.
 */
export type SessionStatus = "authenticated" | "unauthenticated" | "expired";

/**
 * Authenticated session user.
 */
export interface SessionUser {
  readonly id: ID;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;

  readonly role: UserRole;
  readonly permissions: readonly Permission[];
}

/**
 * User session.
 */
export interface UserSession {
  readonly user: SessionUser;

  readonly accessToken: string;
  readonly refreshToken?: string;

  readonly expiresAt: ISODateString;

  readonly status: SessionStatus;
}

/**
 * Session metadata.
 */
export interface SessionMetadata {
  readonly sessionId: ID;
  readonly createdAt: ISODateString;
  readonly lastActivityAt: ISODateString;
  readonly ipAddress?: string;
  readonly userAgent?: string;
}

/**
 * Complete session.
 */
export interface Session {
  readonly session: UserSession;
  readonly metadata: SessionMetadata;
}

/**
 * Session refresh result.
 */
export interface SessionRefreshResult {
  readonly session: UserSession;
  readonly refreshedAt: ISODateString;
}
