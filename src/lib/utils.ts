// type ClassValue is a utility type that represents a value that can be used as a class name in a React component. 
// It can be a string, an array of strings, or an object with string keys and boolean values.
// clsx is a utility function that takes a ClassValue and return a string that can be used as a class name in a React component.
import { type ClassValue, clsx } from "clsx";

// tailwind-merge is a utility function that takes a ClassValue and return a string that can be used as a class name in a React component. 
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes intelligently.
 * 
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}