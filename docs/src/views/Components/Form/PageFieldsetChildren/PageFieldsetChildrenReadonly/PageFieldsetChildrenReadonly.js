import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AFieldset,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFieldsetChildrenReadonly",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
    const children1 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha5.text1",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha5.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha5.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha5.checkbox",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha5.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha5.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha5.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha5.date",
      },
    ];
    const children2 = [
      {
        type: "text",
        label: "Text 1",
        id: "aloha6.text1",
        readonlyDefault: "---",
      },
      {
        type: "fieldset",
        label: "Fieldset 1",
        id: "aloha6.fieldset1",
        children: [
          {
            type: "text",
            label: "Text 2",
            id: "aloha6.text2",
          },
          {
            type: "oneCheckbox",
            label: "Checkbox",
            id: "aloha6.checkbox",
            readonlyDefault: "---",
          },
        ],
      },
      {
        type: "fieldset",
        label: "Fieldset 2",
        id: "aloha6.fieldset2",
        children: [
          {
            type: "text",
            label: "Text 3",
            id: "aloha6.text3",
          },
          {
            type: "currency",
            label: "Currency",
            id: "aloha6.currency",
          },
        ],
      },
      {
        type: "date",
        label: "Date",
        id: "aloha6.date",
      },
    ];
    const model1 = ref({
      aloha5: {
        text2: "Aloha",
        date: "2022-01-01",
      },
    });
    const model2 = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      children1,
      children2,
      codeHtml,
      codeJs,
      model1,
      model2,
    };
  },
};
