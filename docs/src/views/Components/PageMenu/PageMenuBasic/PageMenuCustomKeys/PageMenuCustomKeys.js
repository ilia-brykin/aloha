import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMenuCustomKeys",
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
        code: "forms",
        title: "Form controls",
        symbol: "FileEarmarkText",
        section: "Components",
        items: [
          { code: "input", title: "Input", to: { name: "PageInput" } },
          { code: "select", title: "Select", to: { name: "PageSelect" } },
          { code: "checkbox", title: "Checkbox", to: { name: "PageCheckbox" } },
        ],
      },
      {
        code: "navigation",
        title: "Navigation",
        symbol: "MenuAppFill",
        section: "Components",
        items: [
          { code: "tabs", title: "Tabs", to: { name: "PageTabs" } },
          { code: "link", title: "Link", to: { name: "PageLink" } },
        ],
      },
      { code: "alert", title: "Alert", symbol: "ExclamationTriangle", section: "Feedback", to: { name: "PageAlert" } },
      { code: "modal", title: "Modal", symbol: "Window", section: "Feedback", to: { name: "PageModal" } },
    ];

    return {
      codeHtml,
      codeJs,
      menuItems,
    };
  },
};
