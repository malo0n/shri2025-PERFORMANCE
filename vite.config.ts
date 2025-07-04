
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
        threshold: 1024,
        ext: ".br",
        deleteOriginFile: false,
      }),
    mode === "production" &&
      compression({
        algorithm: "gzip",
        threshold: 1024,
        ext: ".gz",
        deleteOriginFile: false,
      }),
  ].filter(Boolean),
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: true,
    historyApiFallback: true,
  },
  build: {
    target: "es2018",
    sourcemap: mode !== "production", // Only generate source maps in dev
    manifest: true,
    minify: "esbuild",
    outDir: "dist",
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    assetsInlineLimit: 8192, // Inline assets <8kb
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? "")) {
            return "assets/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
        manualChunks(id) {
          // Improved chunk splitting for better tree-shaking
          if (id.includes('node_modules')) {
            const dirs = id.split('node_modules/')[1].split('/');
            // Group by top-level package for better cache and deduplication
            return dirs[0].startsWith('@') ? dirs.slice(0,2).join('_') : dirs[0];
          }
        },
        
      },
      treeshake: 'smallest'
    },
    brotliSize: true,
    reportCompressedSize: true,
    emptyOutDir: true,
  },
}));
