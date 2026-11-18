export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateClearable",
  components: {
    ARate,
  },
  setup() {
    const model = ref(3);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
