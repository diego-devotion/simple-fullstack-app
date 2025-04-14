import 'dotenv/config';
import { z } from 'zod';
import { portEnvSchema } from './schemas/portEnv.js';
import { logLevelSchema } from './schemas/logLevel.js';

const envSchema = z.object({
  API_CORS_ORIGIN: z.string().optional(),
  API_PORT: portEnvSchema('API_PORT', 3000),
  LOG_LEVEL: logLevelSchema('LOG_LEVEL')
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(`Invalid environment variables: ${parsed.error.format()}`);
  process.exit(1);
}

const env = {
  ...parsed.data,
  API_CORS_ORIGIN: parsed.data.API_CORS_ORIGIN ?? `http://localhost:${parsed.data.API_PORT}`
};

export { env };
