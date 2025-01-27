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
  name: "PageFieldsetChildrenTree",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha4.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha4.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha4.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha4.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha4.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha4.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha4.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha4.date",
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
