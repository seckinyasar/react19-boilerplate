import { createMcpHandler } from "mcp-handler";

import { registerDevMcpTools } from "@/lib/dev-mcp/register-dev-mcp-tools";

/**
 * Vercel [mcp-handler](https://github.com/vercel/mcp-handler): `basePath: "/api"` şu uçları üretir:
 * - `POST /api/mcp` — Streamable HTTP (Cursor vb.)
 * - `GET/POST /api/sse`, `POST /api/message` — klasik SSE taşıması (Redis; `disableSse` ile kapalı)
 *
 * Tek segmentli route (`[transport]`) sayesinde `/api/mcp`, `/api/sse`, `/api/message` aynı handler'a düşer.
 */
const devMcpHandler = createMcpHandler(
  (server) => {
    registerDevMcpTools(server);
  },
  {
    serverInfo: {
      name: "react19-boilerplate-dev",
      version: "1.0.0",
    },
  },
  {
    basePath: "/api",
    maxDuration: 60,
    verboseLogs: process.env.NODE_ENV === "development",
    // Yerel dev'de Redis zorunlu olmasın; SSE kullanmak için REDIS_URL + disableSse: false
    disableSse: true,
  },
);

function isDevMcpEnabled(): boolean {
  if (process.env.NODE_ENV !== "development") {
    return false;
  }
  if (process.env.ENABLE_DEV_MCP === "false") {
    return false;
  }
  return true;
}

async function handle(req: Request): Promise<Response> {
  if (!isDevMcpEnabled()) {
    return new Response("Not Found", { status: 404 });
  }
  return devMcpHandler(req);
}

export const GET = handle;
export const POST = handle;
export const DELETE = handle;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
