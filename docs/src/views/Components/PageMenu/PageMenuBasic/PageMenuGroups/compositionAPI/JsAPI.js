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
      { id: "input", group: "Forms", label: "Input", icon: "FileEarmarkText", to: { name: "PageInput" } },
      { id: "select", group: "Forms", label: "Select", icon: "ListUl", to: { name: "PageSelect" } },
      { id: "checkbox", group: "Forms", label: "Checkbox", icon: "CheckLg", to: { name: "PageCheckbox" } },
      { id: "radio", group: "Forms", label: "Radio", icon: "CheckLg", to: { name: "PageRadio" } },
      { id: "alert", group: "Feedback", label: "Alert", icon: "ExclamationTriangle", to: { name: "PageAlert" } },
      { id: "loading", group: "Feedback", label: "Loading", icon: "HourglassSplit", to: { name: "PageLoading" } },
      {
        id: "notification",
        group: "Feedback",
        label: "Notification (disabled)",
        icon: "Bell",
        to: { name: "PageNotification" },
        disabled: true,
      },
      { id: "modal", group: "Overlays", label: "Modal", icon: "Window", to: { name: "PageModal" } },
      { id: "dropdown", group: "Overlays", label: "Dropdown", icon: "MenuDown", to: { name: "PageDropdown" } },
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
