import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMenuBreadcrumbs",
  components: {
    AlohaExample,
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const showCountChildren = ref(true);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const menuItems = [
      {
        id: "components",
        label: "Components and reusable interface patterns",
        icon: "MenuAppFill",
        children: [
          {
            id: "forms",
            label: "Form controls and data entry components",
            children: [
              {
                id: "text",
                label: "Text fields and numeric input controls",
                children: [
                  { id: "input", label: "Input", to: { name: "PageInput" } },
                  { id: "input-number", label: "Input number", to: { name: "PageInputNumber" } },
                ],
              },
              { id: "select", label: "Select", to: { name: "PageSelect" } },
            ],
          },
          { id: "button", label: "Button", to: { name: "PageButton" } },
        ],
      },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
    ];

    return {
      codeHtml,
      codeJs,
      menuItems,
      showCountChildren,
    };
  },
};
