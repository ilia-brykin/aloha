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
    const modelMonth = ref("2025-03");
    const modelYear = ref("1998");

    return {
      modelMonth,
      modelYear,
    };
  },
};`;

  return {
    codeJs,
  };
}
