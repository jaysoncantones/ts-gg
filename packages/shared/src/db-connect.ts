import { Pool } from '@neondatabase/serverless';
import { drizzle, NeonDatabase } from "drizzle-orm/neon-serverless"

export const dbConnect = (DATABASE_URL: string) => {
    const client = new Pool({ connectionString: DATABASE_URL })
    const drizzleConnection = drizzle({client})
    return drizzleConnection
}

export type DBConnectType = NeonDatabase<Record<string, never>> & {
    $client: Pool
}