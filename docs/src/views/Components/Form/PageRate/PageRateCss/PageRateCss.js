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
  name: "PageRateCss",
  components: {
    AlohaExample,
    ARate,
  },
  setup() {
    const model = ref(4);
    const styleRate = {
      "--a_rate_fill_color": "var(--a_color_primary)",
      "--a_rate_icon_size": "2rem",
      "--a_rate_gap": ".5rem",
      "--a_rate_text_font_size": "1.25rem",
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
      model,
      styleRate,
    };
  },
};
