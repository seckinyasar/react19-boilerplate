# Dev MCP (`/api/mcp`) Cheatsheet

Tools live in `src/lib/dev-mcp/register-dev-mcp-tools.ts`; the HTTP entry is `src/app/api/[transport]/route.ts` via [Vercel mcp-handler](https://github.com/vercel/mcp-handler) (`POST /api/mcp`, optional SSE paths with Redis). **Development only** (`NODE_ENV === "development"`). Disabled in production builds (404).

## Available Tools

> Prefix --> dev-mcp

| Tool                  | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `project_info`        | Package name/version from root `package.json` and declared Next.js dependency version      |
| `db_health`           | Verify PostgreSQL connectivity via Prisma (`SELECT 1`)                                     |
| `list_users`          | List recent `User` rows (optional `limit` 1–50, default 20); includes email — dev use only |
| `get_user`            | Fetch a single user by `id`                                                                |
| `count_auth_entities` | Return counts for users, sessions, and OAuth accounts                                      |
| `list_sessions`       | List sessions without tokens (optional `limit`, optional `userId` filter)                  |
| `list_oauth_accounts` | OAuth-linked accounts summary without access/refresh tokens (optional `limit`, `userId`)   |
| `env_keys_set`        | For each key in `REQUIRED_ENV_KEYS` (`validate-env`), report whether it is set (no values) |

---

## Setup

`.mcp.json` (project root) — HTTP transport to the Next route:

```json
{
  "mcpServers": {
    "dev-mcp": {
      "url": "http://localhost:3000/api/mcp"
    }
  }
}
```

Use the port your dev server prints (default `3000`). You can run this alongside `next-devtools` in the same `mcpServers` object.

## Troubleshooting

- **404 from `/api/mcp`:** Not in development (`NODE_ENV !== "development"`) or `ENABLE_DEV_MCP=false`.
- **Connection errors:** Dev server not running, or `url` port does not match `next dev`.
- **MCP client requirements:** Streamable HTTP expects clients to send appropriate `Accept` headers (`application/json` and `text/event-stream` per SDK); official clients usually handle this.
