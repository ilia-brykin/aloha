export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpSeparator",
  components: {
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const separatorMiddle = ({ index }) => (index === 2 ? "–" : "");

    return {
      model,
      separatorMiddle,
    };
  },
};`;

  return {
    codeJs,
  };
}
