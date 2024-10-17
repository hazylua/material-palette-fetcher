import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
    test: {
        root: "./app",
        dir: "./__tests__",
        coverage: {
            enabled: true,
            provider: "v8",
            // reporter: ["text", "json", "html"],
            // include: ["src/**/*.{ts,tsx}"],
        },
    },
    resolve: {
        alias: [{ find: "~", replacement: resolve(__dirname, "./app") }],
    },
});
