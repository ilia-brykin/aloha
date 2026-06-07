import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADropdown,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDropdownHasCaret",
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
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
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
