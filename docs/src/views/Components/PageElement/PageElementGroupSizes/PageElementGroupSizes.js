import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AElement,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageElementGroupSizes",
  components: {
    AElement,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const onAlert = type => {
      // eslint-disable-next-line no-alert
      alert(type);
    };

    return {
      codeHtml,
      codeJs,
      onAlert,
    };
  },
};
