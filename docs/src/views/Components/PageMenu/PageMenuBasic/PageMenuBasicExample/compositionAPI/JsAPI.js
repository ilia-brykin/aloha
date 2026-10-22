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
      menuItems,
    };
  },
};`;

  return {
    codeJs,
  };
}
