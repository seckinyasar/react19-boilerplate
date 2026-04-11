import { authInstance } from "@/lib/better-auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(authInstance);
