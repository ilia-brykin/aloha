import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    target: "es2022",
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "AlohaVue",
      fileName: format => `aloha-vue.${ format }.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "moment/dist/moment",
      ],
      output: {
        globals: {
          vue: "Vue",
          moment: "moment",
        },
      },
    },
  },
});
