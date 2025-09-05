import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@generic": path.resolve(__dirname, "./"),
            "@generic/src": path.resolve(__dirname, "./src"),
            "@generic/components": path.resolve(__dirname, "./src/components"),
        },
    },
});
