import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    js.configs.recommended,
    prettier,

    {
        ignores: ["eslint.config.mjs", "node_modules/**", "out/**", "build/**", "coverage/**", "public/**"],
    },

    {
        plugins: {
            import: importPlugin,
            "simple-import-sort": simpleImportSort,
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
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [["^react", "^[a-z]"], ["^@/generic/(.*)$"], ["^\\u0000"], ["^\\.\\.(?!/?$)", "^\\.\\./?$"], ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]],
                },
            ],
            "simple-import-sort/exports": "error",

            "no-restricted-imports": [
                "error",
                {
                    patterns: ["../*", "./../*", "./*"],
                },
            ],

            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
];
