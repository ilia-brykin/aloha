import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ADropdown,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDropdownHeader",
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
        type: "header",
        text: "_A_DROPDOWN_EXAMPLE_EXPORT_",
      },
      {
        type: "button",
        text: "PDF",
        callback: () => {},
      },
      {
        type: "button",
        text: "CSV",
        callback: () => {},
      },
      {
        type: "header",
        text: "_A_DROPDOWN_EXAMPLE_SHARE_",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_EMAIL_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_COPY_LINK_",
        callback: () => {},
      },
      {
        type: "divider",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_SETTINGS_",
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
