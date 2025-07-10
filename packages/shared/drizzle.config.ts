import { config } from "dotenv";

config({ path: ".env" });

export default {
  schema: "./db-schema",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
