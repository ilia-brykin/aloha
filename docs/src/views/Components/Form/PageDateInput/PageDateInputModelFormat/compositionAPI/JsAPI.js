export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ADateInput,
} from "aloha-vue";

export default {
  components: {
    ADateInput,
  },
  setup() {
    const modelUtc = ref("2025-03-05T13:30:00Z");
    const modelTokens = ref("05.03.2025");
    const modelTimestamp = ref(Date.now());

    return {
      modelTimestamp,
      modelTokens,
      modelUtc,
    };
  },
};`;

  return {
    codeJs,
  };
}
