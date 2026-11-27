import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorForm",
  components: {
    AForm,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_JSON_EDITOR_EXAMPLE_NAME_",
      },
      {
        type: "jsonEditor",
        id: "options",
        label: "_A_JSON_EDITOR_EXAMPLE_OPTIONS_",
        rules: { "/timeout": { type: "number", min: 1 } },
        modes: ["tree", "code"],
      },
    ];
    const model = ref({
      name: "Import",
      options: { timeout: 30, retries: 3 },
    });

    return {
      codeHtml,
      codeJs,
      dataForm,
      model,
    };
  },
};
