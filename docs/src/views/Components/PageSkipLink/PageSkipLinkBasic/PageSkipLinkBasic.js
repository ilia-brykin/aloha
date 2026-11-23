import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASkipLink,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSkipLinkBasic",
  components: {
    AlohaExample,
    ASkipLink,
    ATranslation,
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
