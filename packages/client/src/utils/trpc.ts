import { ServerRouter } from "@devotionlabs/server";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<ServerRouter>();
