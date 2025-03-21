import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "AlohaVue",
      fileName: format => `aloha-vue.${ format }.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "moment",
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
