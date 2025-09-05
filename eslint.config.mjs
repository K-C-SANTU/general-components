import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * ESLint Flat Config
 * - Next.js + TypeScript + React + Prettier
 */
export default [
  // Base recommended rules
  js.configs.recommended,

  // Next.js configs (core web vitals + typescript)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Prettier last so it disables conflicting rules
  prettier,

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "public/**",
      "next-env.d.ts",
      ".yalc/**",
    ],
  },

  {
    rules: {
      // 🔹 Prettier integration
      "prettier/prettier": ["error"],

      // 🔹 Code quality
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-vars": "off", // handled by TS
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // 🔹 Import order
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],

      // 🔹 React
      "react/react-in-jsx-scope": "off", // not needed in React 17+
      "react/prop-types": "off", // using TypeScript

      // 🔹 React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
