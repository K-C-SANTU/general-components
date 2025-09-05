import simpleImportSort from "eslint-plugin-simple-import-sort";
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // ✅ TS parser
import reactHooks from "eslint-plugin-react-hooks";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
    js.configs.recommended,
    prettier,

    {
        ignores: ["eslint.config.mjs", "node_modules/**", "dist/**"],
    },

    {
        files: ["**/*.ts", "**/*.tsx"], // ✅ tell ESLint where to use parser
        languageOptions: {
            parser: tsParser, // ✅ parse TS & JSX
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json", // ensures alias + TS support
                tsconfigRootDir: process.cwd(),
            },
        },

        plugins: {
            import: importPlugin,
            "simple-import-sort": simpleImportSort,
            "@typescript-eslint": tseslint,
            "react-hooks": reactHooks,
        },

        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },

        rules: {
            // 🔹 Auto-sort imports
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        ["^react", "^[a-z]"], // npm deps
                        ["^@generic/(.*)$"], // your aliases
                        ["^\\u0000"], // side effects
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // parent relative
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // same folder
                    ],
                },
            ],
            "simple-import-sort/exports": "error",

            // 🔹 Block parent-relative imports but allow ./localFile
            "no-restricted-imports": ["error", { patterns: ["../*", "./../*"] }],

            // 🔹 General quality
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",

            // 🔹 TypeScript
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],

            // 🔹 React
            "react/react-in-jsx-scope": "off", // not needed for React 17+
            "react/prop-types": "off", // using TS instead
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
];
