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
  name: "PageInputOtpSeparator",
  components: {
    AlohaExample,
    AInputOtp,
  },
  setup() {
    const model = ref("");
    const separatorMiddle = ({ index }) => (index === 2 ? "–" : "");

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model,
      separatorMiddle,
    };
  },
};
