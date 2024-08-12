import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("my_schema");

export const users = mySchema.table("users", {
  id: serial("id").primaryKey(),
  userName: text("userName"),
  email: text("email"),
  password: text("password"),
});

export const EmailTemplates = mySchema.table("emailTemplates", {
  id: serial("id").primaryKey(),
  recipient: text("recipient"),
});
