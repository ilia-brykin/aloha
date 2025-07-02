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
  name: "PageValidatedJsonModeJson",
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
        label: "Key",
        id: "key",
        required: true,
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
    const model1 = ref({
      aloha1: {
        key: "aloha1",
      },
    });
    const model2 = ref(undefined);

    return {
      children,
      codeHtml,
      codeJs,
      model1,
      model2,
    };
  },
};
