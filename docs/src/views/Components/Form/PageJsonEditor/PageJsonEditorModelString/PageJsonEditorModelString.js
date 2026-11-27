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
  name: "PageJsonEditorModelString",
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

    // the model is the JSON text, e.g. from a database field
    const model = ref("{\"debug\":false,\"level\":\"info\",\"targets\":[\"console\",\"file\"]}");

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
