import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import react from "@vitejs/plugin-react";

// 👇 restore __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // generates entry *.d.ts
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"), // ✅ main entry for your library
            name: "GenericComponents",
            formats: ["es", "cjs"],
            fileName: (format) => `generic-components.${format}.js`,
        },
        rollupOptions: {
            // ✅ mark peer deps as external
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@generic": path.resolve(__dirname, "./"),
            "@generic/src": path.resolve(__dirname, "./src"),
            "@generic/components": path.resolve(__dirname, "./src/components"),
        },
    },
});
