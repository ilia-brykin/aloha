export default function JsAPI() {
  const codeJs = `import {
  ADropdown,
  ATranslation,
} from "aloha-vue";

export default {
  name: "PageDropdownCloseByButtonInvisibleInViewport",
  components: {
    ADropdown,
    ATranslation,
  },
  setup() {
    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
      },
      {
        text: "_A_DROPDOWN_ACTION_2_",
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
