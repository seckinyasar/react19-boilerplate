import "server-only";

import { serverEnvSchema, type ServerEnv } from "@/env";

let serverEnvCache: ServerEnv | undefined;

export const getServerEnv = (): ServerEnv => {
  if (serverEnvCache !== undefined) {
    return serverEnvCache;
  }
  const raw = { ...process.env } as Record<string, string | undefined>;
  serverEnvCache = serverEnvSchema.parse(raw);
  return serverEnvCache;
};

export const NODE_ENV = process.env.NODE_ENV as
  | "development"
  | "production"
  | "test";
