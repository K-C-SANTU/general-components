import simpleImportSort from "eslint-plugin-simple-import-sort";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    js.configs.recommended,
    prettier,

    {
        ignores: ["eslint.config.mjs", "node_modules/**", "dist/**", "tsup.config.ts"],
    },

    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json",
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
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        ["^react", "^[a-z]"],
                        ["^@generic/(.*)$"],
                        ["^\\u0000"],
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    ],
                },
            ],
            "simple-import-sort/exports": "error",

            "no-restricted-imports": ["error", { patterns: ["../*", "./../*"] }],

            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",

            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],

            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
];
