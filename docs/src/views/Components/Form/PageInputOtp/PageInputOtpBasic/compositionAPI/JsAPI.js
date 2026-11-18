export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpBasic",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
