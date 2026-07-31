import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:postgres@localhost:5432/blog_management_system?schema=public",
});

try {
  await client.connect();

  const result = await client.query(
    "SELECT current_database(), current_user;"
  );

  console.log(result.rows);
} catch (error) {
  console.error(error);
} finally {
  await client.end();
}