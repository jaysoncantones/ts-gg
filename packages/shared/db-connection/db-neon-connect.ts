import { Pool } from "@neondatabase/serverless";
import { drizzle, NeonDatabase } from "drizzle-orm/neon-serverless";

export const DBNeonConnect = (DATABASE_URL: string) => {
  const client = new Pool({ connectionString: DATABASE_URL });
  const drizzleConnection = drizzle({ client });
  return drizzleConnection;
};

export type DBNeonConnect = NeonDatabase<Record<string, never>> & {
  $client: Pool;
};
