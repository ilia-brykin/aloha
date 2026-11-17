import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageColorPickerForm",
  components: {
    AlohaExample,
    AForm,
  },
  setup() {
    const model = ref({
      brand: "#0775b0",
      native: "#c81e29",
    });
    const data = [
      {
        id: "brand",
        type: "colorPicker",
        label: "colorPicker",
        showAlpha: true,
        predefine: ["#0775b0", "#1b7942", "#c81e29"],
      },
      {
        id: "native",
        type: "color",
        label: "color",
      },
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
      data,
      model,
    };
  },
};
