import cors, { CorsOptions } from 'cors';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { ApiConfig } from './types.js';
import { ServerRouter } from '../routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from '../logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiFilesPath = path.resolve(__dirname, '../../../client/dist');

export class Server {
  private port: number;
  private app: express.Application;

  constructor(config: ApiConfig, router: ServerRouter) {
    const { port: apiPort, corsOrigin } = config;

    this.port = apiPort;
    this.app = express();
    this.setupCors(corsOrigin);
    this.exposeApi(router);
    this.exposeUi();
  }

  private setupCors(corsOrigin: CorsOptions['origin']) {
    this.app.use(
      cors({
        origin: corsOrigin
      })
    );
  }

  private exposeApi(router: ServerRouter) {
    this.app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: router
      })
    );
  }

  private exposeUi() {
    this.app.use(express.static(uiFilesPath));

    this.app.get('/*splat', (_req, res) => {
      res.sendFile(path.join(uiFilesPath, 'index.html'));
    });
  }

  public start() {
    this.app.listen(this.port, () => logger.info(`Server ready at port ${this.port}`));
  }
}
