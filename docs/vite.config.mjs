import vue from "@vitejs/plugin-vue";
import path from "path";
import eslintPlugin from "vite-plugin-eslint2";
import {
  defineConfig,
} from "vite";
import {
  viteStaticCopy,
} from "vite-plugin-static-copy";


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
    viteStaticCopy({
      targets: [
        {
          src: "dist/index.html", // исходный файл
          dest: "./",            // директория назначения
          rename: "404.html",    // переименование файла
        },
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
      "@floating-ui/vue": path.resolve(__dirname, "node_modules/@floating-ui/vue"),
    },
  },
  server: {
    port: 9000,
    strictPort: true,
    open: true,
    hmr: true,
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
            return "vendor";
          }
          if (id.includes("ar.json")) {
            return "translations-ar";
          }
          if (id.includes("de.json")) {
            return "translations-de";
          }
          if (id.includes("en.json")) {
            return "translations-en";
          }
          if (id.includes("es.json")) {
            return "translations-es";
          }
          if (id.includes("fr.json")) {
            return "translations-fr";
          }
          if (id.includes("hr.json")) {
            return "translations-hr";
          }
          if (id.includes("it.json")) {
            return "translations-it";
          }
          if (id.includes("ru.json")) {
            return "translations-ru";
          }

          return null;
        },
      },
    },
  },
});
