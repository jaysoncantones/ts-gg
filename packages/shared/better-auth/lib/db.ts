import { config } from "dotenv";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// import drizzleConfig from "./drizzle.config";

config({ path: ".env" });

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);
export const db = drizzle(client);
