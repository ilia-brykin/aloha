import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADropdown,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDropdownButtonIcons",
  components: {
    ADropdown,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      codeHtml,
      codeJs,
      dropdownActions,
    };
  },
};
