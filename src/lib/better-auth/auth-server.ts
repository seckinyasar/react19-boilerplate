import prisma from "@/lib/prisma";
import { getServerEnv } from "@/env.server";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";

const serverEnv = getServerEnv();
const resend = new Resend(serverEnv.RESEND_API_KEY);

export const authServer = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }) => {
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: "Login to your account",
          html: `
          <h1>Login to your account</h1>
          <p>This link will expire in 5 minutes:</p>
          <a href="${url}" style="padding: 12px 24px; background: #000; color: #fff; text-decoration: none; border-radius: 8px;">Login</a>
          <p>If the link doesn't work, paste this URL into your browser: ${url}</p>
        `,
        });
      },
      expiresIn: 5 * 60, // 300 seconds
    }),
  ],
  secret: serverEnv.BETTER_AUTH_SECRET,
  baseURL: serverEnv.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: serverEnv.GOOGLE_CLIENT_ID,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: serverEnv.GITHUB_CLIENT_ID,
      clientSecret: serverEnv.GITHUB_CLIENT_SECRET,
    },
    discord: {
      clientId: serverEnv.DISCORD_CLIENT_ID,
      clientSecret: serverEnv.DISCORD_CLIENT_SECRET,
    },
  },
});
