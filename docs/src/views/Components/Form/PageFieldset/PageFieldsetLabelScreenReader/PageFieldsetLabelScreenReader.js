import {
  ref,
} from "vue";

import {
  AFieldset,
} from "aloha-vue";
import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFieldsetLabelScreenReader",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "label.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "label.checkbox",
      },
    ];
    const model = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      children,
      codeHtml,
      codeJs,
      model,
    };
  },
};
