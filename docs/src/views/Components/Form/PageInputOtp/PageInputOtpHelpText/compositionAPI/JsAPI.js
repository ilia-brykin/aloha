export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpHelpText",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("");

    return {
      model,
    };
  },
};`;

  return {
    codeJs,
  };
}
