import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
// const client = new Client({
//   connectionString: "postgres://user:password@host:port/db",
// });

// or
export const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: process.env.DBPassword,
  database: "AutoEmailSender",
});
