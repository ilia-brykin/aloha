export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateErrors",
  components: {
    ARate,
  },
  setup() {
    const model = ref(0);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
