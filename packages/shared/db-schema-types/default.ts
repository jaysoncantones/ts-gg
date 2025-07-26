import { createSelectSchema } from "drizzle-zod";

import { tbl_ba_user } from "../db-custom-schema";

export const TblBAUserSchema = createSelectSchema(tbl_ba_user);
export const TblBAUserListSchema = TblBAUserSchema.array();
export type TblBAUserSelect = typeof tbl_ba_user.$inferSelect;
export type TblBAUserInsert = typeof tbl_ba_user.$inferInsert;
export type TblBAUserList = TblBAUserSelect[];
