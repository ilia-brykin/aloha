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
      { id: "input", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "modal", label: "Modal", icon: "Window", to: { name: "PageModal" } },
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
