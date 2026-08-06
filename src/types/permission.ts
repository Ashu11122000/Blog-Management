import type { ID } from "./common";

/**
 * Available application permissions.
 */
export type Permission =
  | "dashboard:read"
  | "users:read"
  | "users:create"
  | "users:update"
  | "users:delete"
  | "posts:read"
  | "posts:create"
  | "posts:update"
  | "posts:delete"
  | "categories:read"
  | "categories:create"
  | "categories:update"
  | "categories:delete"
  | "tags:read"
  | "tags:create"
  | "tags:update"
  | "tags:delete"
  | "comments:read"
  | "comments:moderate"
  | "comments:delete"
  | "media:read"
  | "media:upload"
  | "media:delete"
  | "settings:read"
  | "settings:update";

/**
 * Permission definition.
 */
export interface PermissionDefinition {
  readonly id: ID;
  readonly name: Permission;
  readonly description: string;
}

/**
 * Permission group.
 */
export interface PermissionGroup {
  readonly id: ID;
  readonly name: string;
  readonly permissions: readonly PermissionDefinition[];
}

/**
 * Permission assignment.
 */
export interface PermissionAssignment {
  readonly userId: ID;
  readonly permissions: readonly Permission[];
}
