import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

const restrictedProcessEnvMessage =
  "Please use getServerEnv() / clientEnv from @/env.server.ts and @/env.client.ts";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: ["generated/**"],
  },
  ...nextCoreWebVitals,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "no-restricted-properties": [
        "error",
        {
          object: "process",
          property: "env",
          message: restrictedProcessEnvMessage,
        },
      ],
    },
  },
  {
    files: [
      "src/env.server.ts",
      "src/env.client.ts",
      "prisma.config.ts",
      "next.config.ts",
      "src/instrumentation.ts",
    ],
    rules: {
      "no-restricted-properties": "off",
    },
  },
];

export default eslintConfig;
