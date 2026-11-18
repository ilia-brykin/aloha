export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateScore",
  components: {
    ARate,
  },
  setup() {
    const model = ref(4);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
