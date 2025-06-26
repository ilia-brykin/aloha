import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AValidatedJson,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageValidatedJsonModeSingle",
  components: {
    AlohaExample,
    AValidatedJson,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "aloha.currency",
      },
    ];
    const model1 = ref(undefined);

    return {
      children,
      codeHtml,
      codeJs,
      model1,
    };
  },
};
