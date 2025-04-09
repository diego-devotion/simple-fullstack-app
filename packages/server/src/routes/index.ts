import { healthRouter } from "./routers/health/index.js";
import { router } from "./trpc.js";

export const serverRouter = router({
  health: healthRouter,
});

export type ServerRouter = typeof serverRouter;
