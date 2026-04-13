import prisma from "@/lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
  },
});
