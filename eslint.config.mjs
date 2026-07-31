import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // General
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // Variables
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // TypeScript
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      // React / Next
      "@next/next/no-img-element": "warn",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "dist/**",
    "node_modules/**",
    "src/generated/**",
    "prisma/migrations/**",
    "next-env.d.ts",
  ]),
]);
