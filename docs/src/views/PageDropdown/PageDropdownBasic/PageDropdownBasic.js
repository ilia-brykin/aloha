import ADropdown from "../../../../../src/ADropdown/ADropdown";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDropdownBasic",
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
