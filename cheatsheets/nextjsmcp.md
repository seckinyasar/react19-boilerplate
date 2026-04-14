# Next.js MCP Cheatsheet

## Available Tools

| Tool                      | Description                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `get_errors`              | Retrieve current build errors, runtime errors, and type errors                                              |
| `get_logs`                | Get the path to the dev log file (browser console + server output)                                          |
| `get_page_metadata`       | Get route, component, and rendering info for a specific page                                                |
| `get_project_metadata`    | Retrieve project structure, configuration, and dev server URL                                               |
| `get_routes`              | Scan all routes grouped by `appRouter` / `pagesRouter`. Dynamic segments appear as `[param]` or `[...slug]` |
| `get_server_action_by_id` | Look up a Server Action by ID to find its source file and function name                                     |

---

## Setup

`.mcp.json` (project root):

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

## Workflow

1. Start `npm run dev`
2. Open your agent — it connects automatically via the `/_next/mcp` endpoint
3. Open the relevant page in the browser
4. Write your prompt

---

## Troubleshooting

- Make sure you're on Next.js 16+
- `.mcp.json` must be in the project root
- Dev server must be running
- If not connecting, restart the dev server
- Verify your agent has loaded the MCP server configuration
