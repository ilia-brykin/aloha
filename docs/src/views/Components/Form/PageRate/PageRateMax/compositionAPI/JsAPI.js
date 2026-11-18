export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateMax",
  components: {
    ARate,
  },
  setup() {
    const model = ref(7);

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
