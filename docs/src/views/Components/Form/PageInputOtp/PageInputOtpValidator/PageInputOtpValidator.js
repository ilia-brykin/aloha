import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputOtp,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputOtpValidator",
  components: {
    AlohaExample,
    AInputOtp,
  },
  setup() {
    const modelHex = ref("");
    const modelLetters = ref("");
    const validatorHex = ({ char }) => /^[\da-f]$/i.test(char);
    const validatorLetters = ({ char }) => /^\p{L}$/u.test(char);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      modelHex,
      modelLetters,
      validatorHex,
      validatorLetters,
    };
  },
};
