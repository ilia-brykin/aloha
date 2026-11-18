import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ARate,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageRateColors",
  components: {
    AlohaExample,
    ARate,
  },
  setup() {
    const modelArray = ref(2);
    const modelObject = ref(6);
    const colorsArray = ["var(--a_color_danger)", "var(--a_color_warning)", "var(--a_color_success)"];
    const colorsObject = {
      3: "var(--a_color_danger)",
      7: "var(--a_color_warning)",
      10: "var(--a_color_success)",
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      colorsArray,
      colorsObject,
      modelArray,
      modelObject,
    };
  },
};
