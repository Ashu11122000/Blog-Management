/**
 * Generic entity identifier.
 *
 * Prisma uses UUIDs for all primary keys.
 */
export type ID = string;

/**
 * ISO 8601 date string.
 *
 * Example:
 * 2026-08-06T12:30:45.000Z
 */
export type ISODateString = string;

/**
 * Nullable value.
 */
export type Nullable<T> = T | null;

/**
 * Optional nullable value.
 */
export type Optional<T> = T | undefined;

/**
 * Primitive values.
 */
export type Primitive =
  string | number | boolean | bigint | symbol | null | undefined;

/**
 * Generic key-value object.
 */
export type Dictionary<T = unknown> = Readonly<Record<string, T>>;

/**
 * Generic JSON value.
 */
export type Json = Primitive | Json[] | { [key: string]: Json };

/**
 * Sort direction.
 */
export type SortDirection = "asc" | "desc";

/**
 * Order direction.
 */
export type OrderDirection = "ASC" | "DESC";

/**
 * Theme mode.
 */
export type ThemeMode = "light" | "dark" | "system";

/**
 * Generic loading state.
 */
export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Generic entity timestamps.
 */
export interface Timestamps {
  readonly createdAt: ISODateString;
  readonly updatedAt: ISODateString;
}

/**
 * Soft delete support.
 */
export interface SoftDelete {
  readonly deletedAt: Nullable<ISODateString>;
}

/**
 * Base entity.
 */
export interface BaseEntity extends Timestamps {
  readonly id: ID;
}

/**
 * Entity with soft delete support.
 */
export interface SoftDeleteEntity extends BaseEntity, SoftDelete {}
