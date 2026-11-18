export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInputOtp,
} from "aloha-vue";

export default {
  name: "PageInputOtpValidator",
  components: {
    AInputOtp,
  },
  setup() {
    const modelHex = ref("");
    const modelLetters = ref("");
    const validatorHex = ({ char }) => /^[\\da-f]$/i.test(char);
    const validatorLetters = ({ char }) => /^\\p{L}$/u.test(char);

    return {
      modelHex,
      modelLetters,
      validatorHex,
      validatorLetters,
    };
  },
};`;

  return {
    codeJs,
  };
}
