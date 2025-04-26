import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      // semi: ["error", "always"],
      // quotes: ["error", "single"],
      // Next.js specific flag
      "@next/next/no-html-link-for-pages": "error",
    },
  },
];

export default eslintConfig;

// "rules": {
//   "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
//   "jsx-a11y/anchor-is-valid": "off", // Next.js use his own internal link system
//   "react/require-default-props": "off", // Allow non-defined react props as undefined
//   "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
//   "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
//   "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
//   "import/prefer-default-export": "off", // Named export is easier to refactor automatically
//   "class-methods-use-this": "off", // _document.tsx use render method without `this` keyword
//   "@typescript-eslint/no-unused-vars": "off",
//   "prettier/prettier": [
//     "off",
//     { "printWidth": 80, "trailingComma": "none" }
//   ], //! Set to error in prod
//   "unused-imports/no-unused-imports": "off",
//   "unused-imports/no-unused-vars": ["off", { "argsIgnorePattern": "^_" }]
// }
