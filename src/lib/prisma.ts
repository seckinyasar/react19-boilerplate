import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@root/generated/prisma/client";
import "dotenv/config";
import { getServerEnv } from "@/env.server";

const connectionString = getServerEnv().DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
