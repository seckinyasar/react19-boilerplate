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

/** Dev MCP araçlarını verilen `McpServer` örneğine kaydeder (`mcp-handler` / manuel transport). */
export function registerDevMcpTools(server: McpServer): void {
  server.tool(
    "project_info",
    "package.json adı/sürümü ve kullanılan Next.js sürümü (repo kökü).",
    {},
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

  server.tool(
    "db_health",
    "PostgreSQL bağlantısını Prisma ile doğrular (SELECT 1).",
    {},
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

  server.tool(
    "list_users",
    "User tablosundan son kayıtları listeler (e-posta dahil; sadece dev).",
    {
      limit: z.number().int().min(1).max(50).optional().default(20),
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

  server.tool(
    "get_user",
    "ID ile tek kullanıcı döndürür.",
    { id: z.string().min(1) },
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

  server.tool(
    "count_auth_entities",
    "User, Session ve Account sayıları (hızlı genel bakış).",
    {},
    async () => {
      const [users, sessions, accounts] = await Promise.all([
        prisma.user.count(),
        prisma.session.count(),
        prisma.account.count(),
      ]);
      return jsonText({ users, sessions, accounts });
    },
  );

  server.tool(
    "list_sessions",
    "Session kayıtları (token döndürülmez). İsteğe bağlı userId filtresi.",
    {
      limit: z.number().int().min(1).max(50).optional().default(20),
      userId: z.string().optional(),
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

  server.tool(
    "list_oauth_accounts",
    "OAuth hesap özeti (access/refresh token alanları dahil edilmez).",
    {
      limit: z.number().int().min(1).max(50).optional().default(20),
      userId: z.string().optional(),
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

  server.tool(
    "env_keys_set",
    "validate-env ile tanımlı gerekli env anahtarlarının tanımlı olup olmadığı (değerler yazılmaz).",
    {},
    async () => {
      const keys = REQUIRED_ENV_KEYS.map((key) => ({
        key,
        set: Boolean(process.env[key]?.trim()),
      }));
      return jsonText(keys);
    },
  );
}
