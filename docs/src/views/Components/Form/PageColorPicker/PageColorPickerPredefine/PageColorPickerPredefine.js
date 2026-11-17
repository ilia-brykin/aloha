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
  name: "PageColorPickerPredefine",
  components: {
    AlohaExample,
    AColorPicker,
  },
  setup() {
    const model = ref(undefined);
    const predefine = [
      "#0775b0",
      "#2f3474",
      "#8138b2",
      "#1b7942",
      "#0c8097",
      "#fa9c0f",
      "#c81e29",
      "rgb(0, 0, 0)",
      "hsl(0, 0%, 100%)",
    ];

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
      predefine,
    };
  },
};
