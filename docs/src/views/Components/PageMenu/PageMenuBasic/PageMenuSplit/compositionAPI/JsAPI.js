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
    // to + children: the link opens the page, the toggle on the right the children
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
      menuItems,
    };
  },
};`;

  return {
    codeJs,
  };
}
