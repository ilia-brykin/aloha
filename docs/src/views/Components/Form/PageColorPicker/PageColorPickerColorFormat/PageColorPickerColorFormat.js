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
    const model = ref("hsl(145, 63%, 29%)");
    const modelRgb = ref("rgb(7, 117, 176)");

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
      modelRgb,
    };
  },
};
