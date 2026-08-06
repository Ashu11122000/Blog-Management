import type { ID } from "./common";
import type { Permission } from "./permission";

/**
 * Available application roles.
 */
export type UserRole = "ADMIN" | "EDITOR" | "AUTHOR" | "USER";

/**
 * Role definition.
 */
export interface RoleDefinition {
  readonly id: ID;
  readonly name: UserRole;
  readonly description: string;
}

/**
 * Role with assigned permissions.
 */
export interface RolePermissions {
  readonly role: UserRole;
  readonly permissions: readonly Permission[];
}

/**
 * User role assignment.
 */
export interface UserRoleAssignment {
  readonly userId: ID;
  readonly role: UserRole;
}
