import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADropdown,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDropdownDisabledItems",
  components: {
    AlohaExample,
    ADropdown,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const actions = [
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_EDIT_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_DUPLICATE_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_ARCHIVE_",
        disabled: true,
        callback: () => {},
      },
      {
        type: "divider",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_DELETE_",
        class: "a_dropdown__item a_text_danger",
        callback: () => {},
      },
    ];

    return {
      codeHtml,
      codeJs,
      actions,
    };
  },
};
