import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  uuid,
  varchar,
  integer,
  timestamp,
  pgEnum,
  date,
  check,
} from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", [
  "BORROWED",
  "RETURNED",
]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  universityId: integer("university_id").notNull().unique(),
  universityCard: text("university_card"),
  status: STATUS_ENUM("status").default("PENDING"),
  role: ROLE_ENUM("role").default("USER").notNull(),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const books = pgTable(
  "books",
  {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    title: varchar("title", { length: 255 }).notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    genre: varchar("genre", { length: 255 }).notNull(),
    rating: integer("rating"),
    totalCopies: integer("total_copies").notNull(),
    availableCopies: integer("available_copies"),
    description: text("description"),
    coverImage: text("cover_image"),
    status: STATUS_ENUM("status").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [
    check(
      "available_copies_check",
      sql`${table.availableCopies} <= ${table.totalCopies}`,
    ),
  ],
);
