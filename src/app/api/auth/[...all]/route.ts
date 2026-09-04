import { authServer } from "@/lib/better-auth/auth-server";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(authServer);
