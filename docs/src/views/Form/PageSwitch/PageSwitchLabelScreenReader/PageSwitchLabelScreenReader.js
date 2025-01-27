import {
  ref,
} from "vue";

import {
  ASwitch,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSwitchLabelScreenReader",
  components: {
    AlohaExample,
    ASwitch,
  },
  setup() {
    const model = ref(false);

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
