import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ADisclosure from "../../../../../src/ADisclosure/ADisclosure";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDisclosureSlots",
  components: {
    AlohaExample,
    ADisclosure,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
    };
  },
};
