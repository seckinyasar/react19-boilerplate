export async function register() {
  const { assertRequiredEnv } = await import("@/lib/validate-env");

  if (process.env.NEXT_RUNTIME === "nodejs") {
    assertRequiredEnv();
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    assertRequiredEnv();
  }
}
