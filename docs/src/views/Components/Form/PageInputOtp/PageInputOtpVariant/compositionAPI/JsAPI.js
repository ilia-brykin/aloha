export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpVariant",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("123");
    const variants = ["outlined", "filled", "underlined"];

    return {
      model,
      variants,
    };
  },
};`;

  return {
    codeJs,
  };
}
