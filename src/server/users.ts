import { sqliteTable, text } from "drizzle-orm/sqlite-core";
// import { auditSchema } from "./audit";
// import * as posts from "./posts";
// import * as comments from "./comments";
// import * as userKeys from "./userKeys";
// import * as userSessions from "./userSessions";
export const tableName = "users";

export const definition = {
  id: text("id").primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "user">(),
};

export const table = sqliteTable(tableName, {
  ...definition,
  // ...auditSchema,
});

// export const relation = relations(table, ({ many }) => ({
//   posts: many(posts.table),
//   comments: many(comments.table),
//   keys: many(userKeys.table),
//   sessions: many(userSessions.table),
// }));
