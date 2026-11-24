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
    const modelRange = ref(["2025-07-01", "2025-07-14"]);
    const modelRangeDatetime = ref(null);

    return {
      modelRange,
      modelRangeDatetime,
    };
  },
};`;

  return {
    codeJs,
  };
}
