import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@root/generated/prisma/client";
import "dotenv/config";

import { getServerEnv } from "@/env.server";

const connectionString = getServerEnv().DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
