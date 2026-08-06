import type { BaseEntity, ID, ISODateString, Nullable } from "./common";

/**
 * Audit information for persisted entities.
 */
export interface AuditFields {
  readonly createdAt: ISODateString;
  readonly updatedAt: ISODateString;
}

/**
 * Soft delete metadata.
 */
export interface SoftDeleteFields {
  readonly deletedAt: Nullable<ISODateString>;
}

/**
 * Entity with optimistic locking support.
 */
export interface VersionedEntity {
  readonly version: number;
}

/**
 * Base database entity.
 */
export type DatabaseEntity = BaseEntity;

/**
 * Database entity with soft delete support.
 */
export interface SoftDeletableEntity extends DatabaseEntity, SoftDeleteFields {}

/**
 * Database entity with versioning support.
 */
export interface VersionedDatabaseEntity
  extends DatabaseEntity, VersionedEntity {}

/**
 * Complete database entity.
 */
export interface PersistentEntity
  extends DatabaseEntity, SoftDeleteFields, VersionedEntity {}

/**
 * Database transaction context.
 */
export interface TransactionContext {
  readonly transactionId: ID;
  readonly startedAt: ISODateString;
}

/**
 * Database operation result.
 */
export interface DatabaseResult<T> {
  readonly data: T;
  readonly affectedRows: number;
}

/**
 * Database health information.
 */
export interface DatabaseHealth {
  readonly connected: boolean;
  readonly provider: string;
  readonly latency: number;
  readonly checkedAt: ISODateString;
}
