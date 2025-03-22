import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASwitch,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSwitchReadonly",
  components: {
    AlohaExample,
    ASwitch,
  },
  setup() {
    const model1 = ref(false);
    const model2 = ref(true);
    const model3 = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model1,
      model2,
      model3,
    };
  },
};
