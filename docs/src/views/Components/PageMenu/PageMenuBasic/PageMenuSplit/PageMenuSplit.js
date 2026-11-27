import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMenuSplit",
  components: {
    AlohaExample,
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const menuItems = [
      {
        id: "forms",
        label: "Forms",
        icon: "FileEarmarkText",
        to: { name: "PageForm" },
        children: [
          { id: "input", label: "Input", to: { name: "PageInput" } },
          { id: "select", label: "Select", to: { name: "PageSelect" } },
          {
            id: "choice",
            label: "Choice",
            to: { name: "PageCheckbox" },
            children: [
              { id: "checkbox", label: "Checkbox", to: { name: "PageCheckbox" } },
              { id: "radio", label: "Radio", to: { name: "PageRadio" } },
            ],
          },
        ],
      },
      {
        id: "overlays",
        label: "Overlays",
        icon: "Window",
        children: [
          { id: "modal", label: "Modal", to: { name: "PageModal" } },
          { id: "popover", label: "Popover", to: { name: "PagePopover" } },
        ],
      },
      { id: "button", label: "Button", icon: "CheckLg", to: { name: "PageButton" } },
    ];

    return {
      codeHtml,
      codeJs,
      menuItems,
    };
  },
};
