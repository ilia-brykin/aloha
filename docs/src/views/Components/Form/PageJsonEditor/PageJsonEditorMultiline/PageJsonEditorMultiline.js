import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorMultiline",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      subject: "Your order",
      body: "Hello,\n\nthank you for your order.\nWe send it tomorrow.\n\nBest regards\nThe team",
      footer: "Aloha GmbH · Bonn",
    });

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
