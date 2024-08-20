import {
  ref,
} from "vue";

import AInput from "../../../../../../src/ui/AInput/AInput";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputLabelFloat",
  components: {
    AInput,
    AlohaExample,
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
