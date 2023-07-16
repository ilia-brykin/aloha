export default function JsAPI() {
  const codeJs = `import ADropdown from "aloha-vue/src/ADropdown/ADropdown";
    
export default {
  name: "PageDropdownTriggers",
  components: {
    ADropdown,
  },
  setup() {
    const dropdownActions = [
      {
        text: "Actions 0",
        type: "button",
        callback: () => {},
      },
      {
        text: "Actions 1",
        type: "button",
        callback: () => {},
      },
    ];

    return {
      dropdownActions,
    };
  },
};`;

  return {
    codeJs,
  };
}
