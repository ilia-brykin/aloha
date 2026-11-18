export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpMask",
  components: {
    AInputOtp,
  },
  setup() {
    const modelMask = ref("12");
    const modelPlaceholder = ref("");

    return {
      modelMask,
      modelPlaceholder,
    };
  },
};`;

  return {
    codeJs,
  };
}
