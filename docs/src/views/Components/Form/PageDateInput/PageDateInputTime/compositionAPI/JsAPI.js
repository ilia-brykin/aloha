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
    const modelDatetime = ref("2025-03-05T14:30");
    const modelTime = ref("09:00");

    return {
      modelDatetime,
      modelTime,
    };
  },
};`;

  return {
    codeJs,
  };
}
