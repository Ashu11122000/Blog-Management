import type { ID, ISODateString } from "./common";
import type { UserRole } from "./role";

/**
 * Public user summary.
 */
export interface UserSummary {
  readonly id: ID;
  readonly name: string;
  readonly username: string;
  readonly image?: string | null;
}

/**
 * Public user profile.
 */
export interface UserProfile {
  readonly id: ID;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly website?: string | null;
  readonly role: UserRole;
  readonly createdAt: ISODateString;
}

/**
 * User preferences.
 */
export interface UserPreferences {
  readonly theme: "light" | "dark" | "system";
  readonly emailNotifications: boolean;
  readonly marketingEmails: boolean;
}

/**
 * Complete user.
 */
export interface User {
  readonly id: ID;

  readonly name: string;

  readonly username: string;

  readonly email: string;

  readonly bio?: string | null;

  readonly image?: string | null;

  readonly website?: string | null;

  readonly role: UserRole;

  readonly preferences?: UserPreferences;

  readonly createdAt: ISODateString;

  readonly updatedAt: ISODateString;
}

/**
 * Create user request.
 */
export interface CreateUserRequest {
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

/**
 * Update user request.
 */
export interface UpdateUserRequest {
  readonly name?: string;
  readonly username?: string;
  readonly bio?: string;
  readonly image?: string;
  readonly website?: string;
}

/**
 * User statistics.
 */
export interface UserStats {
  readonly totalPosts: number;
  readonly totalComments: number;
  readonly totalViews: number;
  readonly joinedAt: ISODateString;
}

/**
 * Author summary.
 */
export interface AuthorSummary extends UserSummary {
  readonly bio?: string | null;
  readonly totalPosts: number;
}
