import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/shri2025-PERFORMANCE/" : "/",
  plugins: [
    react({
      jsxRuntime: "automatic",
      babel: {
        plugins: ["babel-plugin-macros"],
      },
    }),
    mode === "production" &&
      compression({
        algorithm: "brotliCompress",
        threshold: 128,
      }),
  ],
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: true,
    historyApiFallback: true,
  },
  build: {
    sourcemap: true,
    manifest: true,
    minify: "esbuild",
    outDir: "dist",
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    assetsInlineLimit: 4096,
  },
}));
