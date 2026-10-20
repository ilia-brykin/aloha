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
  name: "PageValidatedJsonModePrimitiveList",
  components: {
    AlohaExample,
    AValidatedJson,
  },
  setup() {
    const model = ref(["Aloha", "Vue"]);
    const children = [{ id: "value", type: "text", label: "_A_VALIDATED_JSON_COMPONENT_LABEL_VALUE_", required: true }];
    const { codeHtml } = HtmlAPI();
    const { codeJs } = JsAPI();
    return { children, codeHtml, codeJs, model };
  },
};
