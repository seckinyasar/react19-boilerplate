import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import prisma from "@/lib/prisma";
import { REQUIRED_ENV_KEYS } from "@/lib/validate-env";

import packageJson from "@root/package.json";

function jsonText(data: unknown) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(data, null, 2),
      },
    ],
  };
}

export function registerDevMcpTools(server: McpServer): void {
  server.registerTool(
    "project_info",
    {
      description:
        "package.json adı/sürümü ve kullanılan Next.js sürümü (repo kökü).",
    },
    async () => {
      const nextVersion =
        typeof packageJson.dependencies?.next === "string"
          ? packageJson.dependencies.next
          : null;
      return jsonText({
        name: packageJson.name,
        version: packageJson.version,
        next: nextVersion,
      });
    },
  );

  server.registerTool(
    "db_health",
    {
      description: "PostgreSQL bağlantısını Prisma ile doğrular (SELECT 1).",
    },
    async () => {
      try {
        await prisma.$queryRaw`SELECT 1`;
        return jsonText({ ok: true });
      } catch (e) {
        return jsonText({
          ok: false,
          error: e instanceof Error ? e.message : String(e),
        });
      }
    },
  );

  server.registerTool(
    "list_users",
    {
      description:
        "User tablosundan son kayıtları listeler (e-posta dahil; sadece dev).",
      inputSchema: {
        limit: z.number().int().min(1).max(50).optional().default(20),
      },
    },
    async ({ limit }) => {
      const users = await prisma.user.findMany({
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return jsonText(users);
    },
  );

  server.registerTool(
    "get_user",
    {
      description: "ID ile tek kullanıcı döndürür.",
      inputSchema: { id: z.string().min(1) },
    },
    async ({ id }) => {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return jsonText(user);
    },
  );

  server.registerTool(
    "count_auth_entities",
    {
      description: "User, Session ve Account sayıları (hızlı genel bakış).",
    },
    async () => {
      const [users, sessions, accounts] = await Promise.all([
        prisma.user.count(),
        prisma.session.count(),
        prisma.account.count(),
      ]);
      return jsonText({ users, sessions, accounts });
    },
  );

  server.registerTool(
    "list_sessions",
    {
      description:
        "Session kayıtları (token döndürülmez). İsteğe bağlı userId filtresi.",
      inputSchema: {
        limit: z.number().int().min(1).max(50).optional().default(20),
        userId: z.string().optional(),
      },
    },
    async ({ limit, userId }) => {
      const sessions = await prisma.session.findMany({
        ...(userId ? { where: { userId } } : {}),
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          userId: true,
          expiresAt: true,
          createdAt: true,
          ipAddress: true,
          userAgent: true,
        },
      });
      return jsonText(sessions);
    },
  );

  server.registerTool(
    "list_oauth_accounts",
    {
      description:
        "OAuth hesap özeti (access/refresh token alanları dahil edilmez).",
      inputSchema: {
        limit: z.number().int().min(1).max(50).optional().default(20),
        userId: z.string().optional(),
      },
    },
    async ({ limit, userId }) => {
      const accounts = await prisma.account.findMany({
        ...(userId ? { where: { userId } } : {}),
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          userId: true,
          providerId: true,
          accountId: true,
          scope: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return jsonText(accounts);
    },
  );

  server.registerTool(
    "env_keys_set",
    {
      description:
        "validate-env ile tanımlı gerekli env anahtarlarının tanımlı olup olmadığı (değerler yazılmaz).",
    },
    async () => {
      const keys = REQUIRED_ENV_KEYS.map((key) => ({
        key,
        set: Boolean(process.env[key]?.trim()),
      }));
      return jsonText(keys);
    },
  );
}
