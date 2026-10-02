import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.js", import.meta.url)),
      name: "AlohaVue",
      fileName: format => `aloha-vue.${ format }.js`,
    },
    rolldownOptions: {
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
