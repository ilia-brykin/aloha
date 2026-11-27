export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AJsonEditor,
  },
  setup() {
    const TEXT = "{\\n  \\"id\\": 12345678901234567890,\\n  \\"price\\": 9.99\\n}";
    const modelWarn = ref(TEXT);
    const modelBigint = ref(TEXT);

    return {
      modelBigint,
      modelWarn,
    };
  },
};`;

  return {
    codeJs,
  };
}
