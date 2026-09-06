import { sql } from 'drizzle-orm';
import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const farmsTable = sqliteTable('farms', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  createAt: int({ mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const usersTable = sqliteTable('users', {
  id: int().primaryKey({ autoIncrement: true }),
  farmId: int()
    .notNull()
    .references(() => farmsTable.id),
  email: text().notNull().unique(),
  paswordHash: text().notNull(),
  role: text().notNull().default('user'),
  createAt: int({ mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
});
