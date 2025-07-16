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
        id: "text",
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
      {
        type: "validatedJson",
        mode: "single",
        id: "validated_json",
        children: [
          {
            type: "text",
            label: "Text",
            id: "text",
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
        ],
      },
    ];
    const model1 = ref(undefined);
    const model2 = ref(undefined);
    const model3 = ref(undefined);
    const model4 = ref({
      text: "s",
    });

    return {
      children,
      codeHtml,
      codeJs,
      model1,
      model2,
      model3,
      model4,
    };
  },
};
