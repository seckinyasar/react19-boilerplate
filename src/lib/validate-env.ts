import { getServerEnv } from "@/env.server";

export { REQUIRED_SERVER_ENV_KEYS as REQUIRED_ENV_KEYS } from "@/env";

export function assertRequiredEnv(): void {
  getServerEnv();
}
