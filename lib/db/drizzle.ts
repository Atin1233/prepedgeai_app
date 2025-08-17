import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';
import { isDatabaseAvailable } from '../env-check';

dotenv.config();

// Handle missing POSTGRES_URL during build time
let client: postgres.Sql;
let db: ReturnType<typeof drizzle>;

if (isDatabaseAvailable()) {
  client = postgres(process.env.POSTGRES_URL!);
  db = drizzle(client, { schema });
} else {
  // Create a mock client for build time
  console.warn('POSTGRES_URL not set - using mock database client for build');
  client = {} as postgres.Sql;
  db = {} as ReturnType<typeof drizzle>;
}

export { client, db };
