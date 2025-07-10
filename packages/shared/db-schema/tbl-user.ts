import { pgTable, serial, uuid, text } from "drizzle-orm/pg-core";

export const tbl_user = pgTable("tbl_user", {
  id: serial("id").notNull().unique(),
  uuid: uuid("uuid1").defaultRandom().primaryKey(),
  name: text("name").default("").notNull(),
});
