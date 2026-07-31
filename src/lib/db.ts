import prisma from "./prisma";

/**
 * Central database client.
 *
 * Import this instead of importing Prisma directly.
 */
export const db = prisma;

/**
 * Execute a database operation safely.
 */
export async function executeDbOperation<T>(
  operation: () => Promise<T>,
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}

export default db;
