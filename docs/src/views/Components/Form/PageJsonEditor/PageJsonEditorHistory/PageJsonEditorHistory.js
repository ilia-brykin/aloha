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
  name: "PageJsonEditorHistory",
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

    // "reset" goes back to this value (by default to the first value of the model)
    const resetValue = {
      title: "Newsletter",
      active: true,
      sendAt: "09:00",
      recipients: ["anna@example.com", "ben@example.com"],
      layout: {
        columns: 2,
        theme: "light",
      },
    };
    const model = ref({ ...resetValue, title: "Changed title" });

    return {
      codeHtml,
      codeJs,
      model,
      resetValue,
    };
  },
};
