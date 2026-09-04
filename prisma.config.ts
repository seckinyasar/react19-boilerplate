import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL_UNPOOLED"]!,
  },
});

//? prisma.config.ts is only for Prisma CLI, not for the application.
//? So we use the unpooled database URL.
