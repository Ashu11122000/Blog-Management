/**
 * Makes all properties optional recursively.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Makes all properties required recursively.
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Makes all properties readonly recursively.
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * Makes selected keys optional.
 */
export type OptionalFields<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

/**
 * Makes selected keys required.
 */
export type RequiredFields<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Makes selected keys nullable.
 */
export type NullableFields<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? T[P] | null : T[P];
};

/**
 * Extracts the value type of an object.
 */
export type ValueOf<T> = T[keyof T];

/**
 * Flattens complex intersection types for better IntelliSense.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Extracts the resolved type of a Promise-returning function.
 */
export type AsyncReturnType<T extends (...args: never[]) => Promise<unknown>> =
  Awaited<ReturnType<T>>;

/**
 * Creates a branded type.
 */
export type Brand<T, B extends string> = T & {
  readonly __brand: B;
};

/**
 * Non-empty array.
 */
export type NonEmptyArray<T> = [T, ...T[]];

/**
 * Nullable type.
 */
export type Nullable<T> = T | null;

/**
 * Optional type.
 */
export type Optional<T> = T | undefined;

/**
 * Mutable version of a readonly type.
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Keys whose values are assignable to U.
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
