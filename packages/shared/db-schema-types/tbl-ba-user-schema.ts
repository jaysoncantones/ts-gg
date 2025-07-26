import { z } from "zod";

import { tbl_ba_user } from "../db-custom-schema";

export const TblBAUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const TblBAUser = z.object({
  data: TblBAUserSchema.array(),
  error: z.string().nullable(),
});

export type TblBAUser = z.infer<typeof TblBAUser>;
export type TblBAUserSelect = typeof tbl_ba_user.$inferSelect;
export type TblBAUserInsert = typeof tbl_ba_user.$inferInsert;
