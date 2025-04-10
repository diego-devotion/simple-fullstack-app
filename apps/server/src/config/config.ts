import * as dotenv from 'dotenv';
import { ApiConfig } from './types.js';
import { defaultApiConfig } from './params.js';

dotenv.config();

const { port, corsOrigin } = defaultApiConfig;

export const apiConfig: ApiConfig = {
  port: Number(process.env.FORGUARD_API_PORT) || port,
  corsOrigin: process.env.CORS_ORIGIN || corsOrigin
};
