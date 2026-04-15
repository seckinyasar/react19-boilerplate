import { z } from "zod";

export const serverEnvSchema = z.object({
  DATABASE_URL: z.url(),
  DATABASE_URL_UNPOOLED: z.url().optional(),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.url(),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(32),
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(32),
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_CLIENT_SECRET: z.string().min(32),
  RESEND_API_KEY: z.string().min(32),
  NEON_MCP_TOKEN: z.string().min(32).optional(),
  ENABLE_DEV_MCP: z.preprocess(
    (v) => (v === undefined || v === "" ? "true" : v),
    z.enum(["true", "false"]),
  ),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

export const REQUIRED_SERVER_ENV_KEYS = [
  "DATABASE_URL",
  "BETTER_AUTH_SECRET",
  "BETTER_AUTH_URL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
  "DISCORD_CLIENT_ID",
  "DISCORD_CLIENT_SECRET",
  "RESEND_API_KEY",
] as const satisfies readonly (keyof ServerEnv)[];
