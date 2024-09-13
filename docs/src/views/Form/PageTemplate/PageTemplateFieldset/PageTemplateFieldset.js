import {
  ref,
} from "vue";

import AElement from "../../../../../../src/AElement/AElement";
import AFieldset from "../../../../../../src/ui/AFieldset/AFieldset";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTemplateFieldset",
  components: {
    AElement,
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
        type: "template",
        slotName: "template",
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
