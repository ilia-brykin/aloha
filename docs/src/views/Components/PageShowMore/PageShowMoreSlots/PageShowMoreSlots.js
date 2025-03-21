import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AShowMore,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageShowMoreSlots",
  components: {
    AlohaExample,
    AShowMore,
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
