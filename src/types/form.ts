import type { ID } from "./common";

/**
 * Generic select option.
 */
export interface SelectOption<T = string> {
  readonly label: string;
  readonly value: T;
  readonly disabled?: boolean;
}

/**
 * Generic multi-select option.
 */
export interface MultiSelectOption<T = string> extends SelectOption<T> {
  readonly selected?: boolean;
}

/**
 * Generic checkbox option.
 */
export interface CheckboxOption<T = string> {
  readonly label: string;
  readonly value: T;
  readonly checked?: boolean;
}

/**
 * Generic radio option.
 */
export interface RadioOption<T = string> {
  readonly label: string;
  readonly value: T;
}

/**
 * Form field error.
 */
export interface FormFieldError {
  readonly field: string;
  readonly message: string;
}

/**
 * Form state.
 */
export interface FormState<T> {
  readonly values: T;
  readonly isDirty: boolean;
  readonly isSubmitting: boolean;
  readonly isSubmitted: boolean;
  readonly isValid: boolean;
  readonly errors: readonly FormFieldError[];
}

/**
 * Rich text editor value.
 */
export interface RichTextField {
  readonly html: string;
  readonly json: Record<string, unknown>;
}

/**
 * Image upload field.
 */
export interface ImageField {
  readonly id?: ID;
  readonly url: string;
  readonly alt: string;
}

/**
 * Slug field.
 */
export interface SlugField {
  readonly title: string;
  readonly slug: string;
}

/**
 * Date range field.
 */
export interface DateRangeField {
  readonly startDate: string;
  readonly endDate: string;
}
