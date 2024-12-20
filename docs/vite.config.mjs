import vue from "@vitejs/plugin-vue";
import path from "path";
import eslintPlugin from "vite-plugin-eslint2";
import {
  defineConfig,
} from "vite";

import {
  fileURLToPath,
} from "url";
import {
  dirname,
} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevelopment = process.env.DEV === "true";

export default defineConfig({
  base: isDevelopment ? "/" : "/aloha/",
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
      include: [
        "src/**/*.js",
        "src/**/*.vue",
        "../src/**/*.js",
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      axios: path.resolve(__dirname, "node_modules/axios"),
      fecha: path.resolve(__dirname, "node_modules/fecha"),
      "lodash-es": path.resolve(__dirname, "node_modules/lodash-es"),
      moment: path.resolve(__dirname, "node_modules/moment"),
      vue: path.resolve(__dirname, "node_modules/vue"),
      "tiny-emitter": path.resolve(__dirname, "node_modules/tiny-emitter"),
      dompurify: path.resolve(__dirname, "node_modules/dompurify"),
      tinymce: path.resolve(__dirname, "node_modules/tinymce"),
      "@floating-ui/vue": path.resolve(__dirname, "node_modules/@floating-ui/vue"),
    },
  },
  server: {
    port: 9000,
    open: true,
    fs: {
      allow: [
        "./",
        "../src", // Allow access to src
      ],
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "bundle.[name].[hash].js",
        chunkFileNames: "chunk.[name].[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lodash")) {
              return "vendor-lodash";
            }
            if (id.includes("tinymce")) {
              return "vendor-tinymce";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
