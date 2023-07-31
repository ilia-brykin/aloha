import {
  ref,
} from "vue";

import AInputNumber from "../../../../../src/ui/AInputNumber/AInputNumber";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import AProgress from "../../../../../src/AProgress/AProgress";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageProgressClassProgressBarFunction",
  components: {
    AInputNumber,
    AlohaExample,
    AProgress,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const getClassProgressBar = percent => {
      if (percent >= 80) {
        return "a_bg_danger";
      }
      if (percent > 50) {
        return "a_bg_warning";
      }
      return "a_bg_success";
    };
    const model = ref(50);

    return {
      codeHtml,
      codeJs,
      getClassProgressBar,
      model,
    };
  },
};
