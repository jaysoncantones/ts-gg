import { config } from "dotenv"

config({path: ".env"})

export default {
    schema: "./schema/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
}

