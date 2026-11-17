import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AColorPicker,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageColorPickerColorFormat",
  components: {
    AlohaExample,
    AColorPicker,
  },
  setup() {
    const modelRgb = ref("rgba(7, 117, 176, 0.8)");
    const modelHsl = ref("hsl(145, 63%, 29%)");
    const modelHsv = ref("hsv(276, 68%, 70%)");

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      modelHsl,
      modelHsv,
      modelRgb,
    };
  },
};
