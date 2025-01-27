import {
  ref,
} from "vue";

import {
  AFieldset,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFieldsetChildrenBasic",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
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
      {
        type: "date",
        label: "Date",
        id: "aloha.date",
      },
      {
        type: "file",
        label: "File",
        id: "aloha.file",
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
