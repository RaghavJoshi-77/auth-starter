import {serial , text , timestamp , pgTable } from "drizzle-orm/pg-core"

export const userTable = pgTable("users_table", {
  id: serial("id").primaryKey().notNull(),
  username: text("name").notNull().unique(),
  password: text("password").notNull(),
  googleId: text("google_id").notNull().unique(),
  githubId: text("github_id").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
})
