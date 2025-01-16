import {
  ref,
} from "vue";

import AElement from "../../../../../../src/AElement/AElement";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AOneCheckbox from "../../../../../../src/ui/AOneCheckbox/AOneCheckbox";

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
