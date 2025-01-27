import {
  ref,
} from "vue";

import {
  AElement,
  AOneCheckbox,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageOneCheckboxSlotName",
  components: {
    AElement,
    AlohaExample,
    AOneCheckbox,
  },
  setup() {
    const model = ref(undefined);

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
