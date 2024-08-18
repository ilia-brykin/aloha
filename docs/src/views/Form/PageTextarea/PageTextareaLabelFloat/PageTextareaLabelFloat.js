import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import ATextarea from "../../../../../../src/ui/ATextarea/ATextarea";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTextareaLabelFloat",
  components: {
    AlohaExample,
    ATextarea,
  },
  setup() {
    const model = ref("Aloha");

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
