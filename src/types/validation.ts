/**
 * Validation severity level.
 */
export type ValidationSeverity = "error" | "warning";

/**
 * Single validation issue.
 */
export interface ValidationIssue {
  readonly field: string;
  readonly message: string;
  readonly severity: ValidationSeverity;
}

/**
 * Validation result.
 */
export interface ValidationResult {
  readonly valid: boolean;
  readonly issues: readonly ValidationIssue[];
}

/**
 * Field validation state.
 */
export interface FieldValidationState {
  readonly touched: boolean;
  readonly dirty: boolean;
  readonly valid: boolean;
  readonly error?: string;
}

/**
 * Form validation state.
 */
export interface FormValidationState {
  readonly valid: boolean;
  readonly submitting: boolean;
  readonly fields: Readonly<Record<string, FieldValidationState>>;
}

/**
 * Generic validation response.
 */
export interface ValidationResponse<T> {
  readonly data?: T;
  readonly validation: ValidationResult;
}
