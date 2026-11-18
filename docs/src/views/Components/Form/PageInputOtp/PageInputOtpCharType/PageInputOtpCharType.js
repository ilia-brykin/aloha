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
  name: "PageInputOtpCharType",
  components: {
    AlohaExample,
    AInputOtp,
  },
  setup() {
    const modelNumeric = ref("");
    const modelAlphanumeric = ref("");
    const modelAny = ref("");

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      modelAlphanumeric,
      modelAny,
      modelNumeric,
    };
  },
};
