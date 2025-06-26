import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AList,
  ASelectStyle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectStyleFilterGroups",
  components: {
    AList,
    AlohaExample,
    ASelectStyle,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const groups = [
      [
        "display",
        ["mobile", "tablet", "touch", "desktop", "widescreen", "fullhd", "large"],
      ],
      [
        "flex",
        ["flex_direction", "justify_content", "align_items", "align_self", "justify_self", "flex_wrap", "align_content"],
      ],
      [
        "text_align",
        ["mobile", "tablet", "touch", "desktop", "widescreen", "fullhd", "large"],
      ],
      "text_wrapping",
      "line_limiting",
      "text_transform",
      "font_weight",
      "line_height",
      "font_size",
      "margin",
      "padding",
      "color",
      "background_color",
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    return {
      codeHtml,
      codeJs,
      groups,
      model1,
      model2,
    };
  },
};
