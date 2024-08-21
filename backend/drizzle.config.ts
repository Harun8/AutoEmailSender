import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: path.resolve("./drizzle"), // Ensure the full path is resolved
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: process.env.DBPassword,
    database: "AutoEmailSender",
  },
});
