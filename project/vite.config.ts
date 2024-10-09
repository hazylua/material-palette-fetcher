import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        remix({
            routes(defineRoutes) {
                return defineRoutes((route) => {
                    route("/", "modules/home/route.tsx", { index: true });
                    route("/palettes/schemes", "modules/palettes/schemes.tsx");
                    // route("about", "about/route.tsx");
                    // route("concerts", "concerts/layout.tsx", () => {
                    //   route("", "concerts/home.tsx", { index: true });
                    //   route("trending", "concerts/trending.tsx");
                    //   route(":city", "concerts/city.tsx");
                    // });
                });
            },
            future: {
                v3_fetcherPersist: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true,
            },
        }),
        tsconfigPaths(),
    ],
});
