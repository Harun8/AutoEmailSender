import {
  index,
  int,
  mysqlTable,
  bigint,
  varchar,
} from "drizzle-orm/mysql-core";
export const users = mysqlTable(
  "users",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    userName: varchar("userName", { length: 256 }),
    email: varchar("email", { length: 256 }),
    password: varchar("password", { length: 256 }),
  },
  (users) => ({
    nameIdx: index("name_idx").on(users.userName),
  })
);

export const EmailTemplates = mysqlTable("emailTemplates", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  recipient: varchar("recipient", { length: 256 }),
});
