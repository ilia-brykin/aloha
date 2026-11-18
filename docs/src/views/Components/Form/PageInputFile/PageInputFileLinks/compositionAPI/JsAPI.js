export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputFile,
} from "aloha-vue";

export default {
  name: "PageInputFileLinks",
  components: {
    AInputFile,
  },
  setup() {
    const model = ref([
      {
        name: "Contract.pdf",
        size: 245760,
        url: "./assets/Tennis_ball_purple_background.png",
      },
      {
        name: "Invoice 2026-11.pdf",
        size: 81920,
        url: "./assets/Tennis_ball_purple_background.png",
      },
    ]);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
