import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  base: "/",
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    prerender({
      staticDir: "dist",
      routes: [
        "/",
        "/about",
        "/support",
        "/programs",
        "/programs/java-fullstack-angular",
        "/programs/ai-java-backend",
        "/programs/angular-frontend",
        "/programs/flutter",
        "/programs/android-java",
        "/programs/digital-marketing",
        "/programs/java-placement",
        "/programs/python-placement",
        "/freelancing",
        "/freelancing/full-stack",
        "/freelancing/frontend",
        "/freelancing/wordpress-shopify",
        "/freelancing/static-sites",
        "/freelancing/digital-marketing",
        "/freelancing/seo",
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});