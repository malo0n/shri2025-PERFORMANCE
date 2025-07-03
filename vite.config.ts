import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import path from "path";

export default defineConfig(({ mode }) => ({
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
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      
    },
  },
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
    // rollupOptions: {
    //   output: {
    //     assetFileNames: "[name].[hash][extname]",
    //     chunkFileNames: "chunks/[name].[hash].js",
    //     entryFileNames: "entries/[name].[hash].js",
    //   },
    // },
    minify: "esbuild",
    outDir: "dist",
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    assetsInlineLimit: 4096,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
}));
