export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpErrors",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123456");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
