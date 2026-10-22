export default function JsAPI() {
  const codeJs = `import {
  AMenu,
  AMenuButtonToggle,
} from "aloha-vue";

export default {
  components: {
    AMenu,
    AMenuButtonToggle,
  },
  setup() {
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
      menuItems,
    };
  },
};`;

  return {
    codeJs,
  };
}
