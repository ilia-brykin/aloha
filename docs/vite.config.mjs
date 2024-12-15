import vue from "@vitejs/plugin-vue";
import path from "path";
import eslintPlugin from "vite-plugin-eslint";
import {
  defineConfig,
} from "vite";

const isDevelopment = process.env.DEV === "true";

export default defineConfig({
  base: isDevelopment ? "/" : "/aloha/",
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
      include: ["src/**/*.js", "src/**/*.vue"],
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
      "@public": path.resolve(__dirname, "public"),
      axios: path.resolve(__dirname, "node_modules/axios"),
      fecha: path.resolve(__dirname, "node_modules/fecha"),
      "lodash-es": path.resolve(__dirname, "node_modules/lodash-es"),
      moment: path.resolve(__dirname, "node_modules/moment"),
      "vue-style-loader": path.resolve(__dirname, "node_modules/vue-style-loader"),
      "vue-upload-component": path.resolve(__dirname, "node_modules/vue-upload-component"),
      vue: path.resolve(__dirname, "node_modules/vue"),
      vuex: path.resolve(__dirname, "node_modules/vuex"),
      leaflet: path.resolve(__dirname, "node_modules/leaflet"),
      inputmask: path.resolve(__dirname, "node_modules/inputmask"),
      autosize: path.resolve(__dirname, "node_modules/autosize"),
      mediaelement: path.resolve(__dirname, "node_modules/mediaelement"),
      "mediaelement-plugins": path.resolve(__dirname, "node_modules/mediaelement-plugins"),
      "get-contrast-ratio": path.resolve(__dirname, "node_modules/get-contrast-ratio"),
      popperjs: path.resolve(__dirname, "node_modules/@popperjs/core"),
      "tiny-emitter": path.resolve(__dirname, "node_modules/tiny-emitter"),
      dompurify: path.resolve(__dirname, "node_modules/dompurify"),
      tinymce: path.resolve(__dirname, "node_modules/tinymce"),
      "@floating-ui/vue": path.resolve(__dirname, "node_modules/@floating-ui/vue"),
    },
  },
  server: {
    port: 9000,
    open: true,
    hmr: false,
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
