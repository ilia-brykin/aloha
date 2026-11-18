export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpCharType",
  components: {
    AInputOtp,
  },
  setup() {
    const modelNumeric = ref("");
    const modelAlphanumeric = ref("");
    const modelAny = ref("");

    return {
      modelAlphanumeric,
      modelAny,
      modelNumeric,
    };
  },
};`;

  return {
    codeJs,
  };
}
