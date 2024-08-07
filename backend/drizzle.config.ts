import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: process.env.DBPassword,
    database: "AutoEmailSender",
  },
});
