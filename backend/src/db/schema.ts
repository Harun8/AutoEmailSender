import {
  serial,
  text,
  pgTable,
  pgSchema,
  boolean,
  date,
  integer,
} from "drizzle-orm/pg-core";

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
  recurring: boolean("recurring"),
  text: text("text"),
  date: date("date"),
  theme: text("theme"),
  userId: integer("user_id").references(() => users.id),
});

// countryId: integer('country_id').references(() => countries.id),
