import AGroupButtonDropdown from "../../../../../src/AGroupButtonDropdown/AGroupButtonDropdown";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageGroupButtonDropdownIndexFirstDropdownActionOne",
  components: {
    AGroupButtonDropdown,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const actions1 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
    ];

    const actions2 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    const actions3 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    const actions6 = [
      {
        text: "Action 1",
        type: "button",
        classButton: "a_btn a_btn_primary",
        callback: () => {},
      },
      {
        text: "Action 2",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 3",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 4",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 5",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
      {
        text: "Action 6",
        type: "button",
        classButton: "a_btn a_btn_secondary",
        callback: () => {},
      },
    ];

    return {
      actions1,
      actions2,
      actions3,
      actions6,
      codeHtml,
      codeJs,
    };
  },
};
