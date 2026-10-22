import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMenuBasicExample",
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
        id: "components",
        label: "Components",
        icon: "MenuAppFill",
        children: [
          {
            id: "accordion",
            label: "Accordion",
            to: { name: "PageAccordion" },
          },
          {
            id: "forms",
            label: "Form controls",
            children: [
              {
                id: "input",
                label: "Input",
                to: { name: "PageInput" },
              },
              {
                id: "select",
                label: "Select",
                to: { name: "PageSelect" },
              },
            ],
          },
        ],
      },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "button", label: "Button", icon: "EjectFill", to: { name: "PageButton" } },
      { id: "collapse", label: "Collapse", icon: "ArrowsCollapse", to: { name: "PageCollapse" } },
      { id: "dropdown", label: "Dropdown", icon: "MenuDown", to: { name: "PageDropdown" } },
      { id: "link", label: "Link", icon: "BoxArrowUpRight", to: { name: "PageLink" } },
      { id: "list", label: "List", icon: "ListUl", to: { name: "PageList" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
      { id: "tabs", label: "Tabs", icon: "SegmentedNav", to: { name: "PageTabs" } },
      { id: "translation", label: "Translation", icon: "Translate", to: { name: "PageTranslation" } },
    ];

    return {
      codeHtml,
      codeJs,
      menuItems,
    };
  },
};
