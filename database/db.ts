import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config as dotenvConfig } from "dotenv";
import config from "../lib/config";

dotenvConfig({ path: ".env.local" });

const sql = neon(config.env.databaseUrl!);
export const db = drizzle({ client: sql });
