export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpLength",
  components: {
    AInputOtp,
  },
  setup() {
    const modelPin = ref("");
    const modelLong = ref("");

    return {
      modelLong,
      modelPin,
    };
  },
};`;

  return {
    codeJs,
  };
}
