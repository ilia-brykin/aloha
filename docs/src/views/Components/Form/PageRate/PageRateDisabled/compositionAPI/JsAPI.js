export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateDisabled",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);
    const modelDecimal = ref(3.7);

    return {
      model,
      modelDecimal,
    };
  },
};`;

  return {
    codeJs,
  };
}
