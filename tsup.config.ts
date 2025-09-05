import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    clean: true,
    outDir: "dist",
    target: "esnext",
    minify: false,
    splitting: false,
    watch: process.env.NODE_ENV === "development", // ✅ rebuild on file change in dev
});
