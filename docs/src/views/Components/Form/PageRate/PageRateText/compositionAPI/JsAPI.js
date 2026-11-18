export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ARate,
} from "aloha-vue";

export default {
  name: "PageRateText",
  components: {
    ARate,
  },
  setup() {
    const modelDefault = ref(3);
    const modelCustom = ref(5);
    const texts = [
      "_A_RATE_EXAMPLE_TEXT_1_",
      "_A_RATE_EXAMPLE_TEXT_2_",
      "_A_RATE_EXAMPLE_TEXT_3_",
      "_A_RATE_EXAMPLE_TEXT_4_",
      "_A_RATE_EXAMPLE_TEXT_5_",
    ];

    return {
      modelCustom,
      modelDefault,
      texts,
    };
  },
};`;

  return {
    codeJs,
  };
}
