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
    const model = ref("2025-W10");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
