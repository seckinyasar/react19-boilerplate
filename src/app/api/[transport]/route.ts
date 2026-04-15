import { createMcpHandler } from "mcp-handler";

import { getServerEnv, NODE_ENV } from "@/env.server";
import { registerDevMcpTools } from "@/lib/dev-mcp/register-dev-mcp-tools";

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
    verboseLogs: NODE_ENV === "development",
    disableSse: true,
  },
);

function isDevMcpEnabled(): boolean {
  if (NODE_ENV !== "development") {
    return false;
  }
  if (getServerEnv().ENABLE_DEV_MCP === "false") {
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
