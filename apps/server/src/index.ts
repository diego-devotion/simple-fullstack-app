import 'dotenv/config';
import { Server } from './server/Server.js';
import { serverRouter } from './routes/index.js';
import { env } from './config/env.js';

const { API_PORT, API_CORS_ORIGIN } = env;

const server = new Server({ port: API_PORT, corsOrigin: API_CORS_ORIGIN }, serverRouter);
server.start();

export { serverRouter };
export type { ServerRouter } from './routes/index.js';
