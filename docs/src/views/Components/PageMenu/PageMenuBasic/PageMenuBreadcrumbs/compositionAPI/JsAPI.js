export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AMenu,
  AMenuButtonToggle,
  ASwitch,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
    ASwitch,
  },
  setup() {
    const showCountChildren = ref(true);

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
      menuItems,
      showCountChildren,
    };
  },
};`;

  return {
    codeJs,
  };
}
