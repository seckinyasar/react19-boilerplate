/**
 * Required env vars for this app (keep in sync with `.env.example`).
 * Values come from Vercel/host `process.env` — no filesystem `.env` needed at runtime.
 */
const REQUIRED_ENV_KEYS = [
  "BETTER_AUTH_SECRET",
  "BETTER_AUTH_URL",
  "DATABASE_URL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
  "DISCORD_CLIENT_ID",
  "DISCORD_CLIENT_SECRET",
  "RESEND_API_KEY",
] as const;

export function assertRequiredEnv(): void {
  const missing: string[] = [];

  for (const key of REQUIRED_ENV_KEYS) {
    const value = process.env[key];
    if (value === undefined || value.trim() === "") {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    missing.sort();
    throw new Error(
      `Missing or empty required environment variables: ${missing.join(", ")}`,
    );
  }
}
