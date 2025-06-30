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
  name: "PageValidatedJsonModeListTyped",
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
        type: "select",
        label: "Aloha",
        id: "aloha",
        required: true,
        data: [
          {
            label: "Foo",
            value: "foo",
          },
          {
            label: "Bar",
            value: "bar",
          },
        ],
        keyLabel: "label",
        keyId: "value",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "checkbox",
      },
      {
        type: "currency",
        label: "Currency",
        id: "currency",
      },
    ];
    const model1 = ref(undefined);
    const typedChildren = {
      foo: [
        {
          id: "text_foo",
          type: "text",
          label: "Text foo",
        },
        {
          type: "oneCheckbox",
          label: "Checkbox foo",
          id: "checkbox_foo",
        },
      ],
      bar: [
        {
          id: "text_bar",
          type: "text",
          label: "Text bar",
        },
      ],
    };

    return {
      children,
      codeHtml,
      codeJs,
      model1,
      typedChildren,
    };
  },
};
