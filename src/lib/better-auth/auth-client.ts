import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL as string,
  plugins: [magicLinkClient()],
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
