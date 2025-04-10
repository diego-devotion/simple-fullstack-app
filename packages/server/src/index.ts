import { Server } from "./server/Server.js";
import { apiConfig } from "./config/config.js";
import { serverRouter } from "./routes/index.js";

const server = new Server(apiConfig, serverRouter);
server.start();

export { serverRouter };
export type { ServerRouter } from "./routes/index.js";
