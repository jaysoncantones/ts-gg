import { config } from "dotenv";

config({ path: ".env" });

export default {
  schema: "./server/src/db/schema.ts",
  out: "./server/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
