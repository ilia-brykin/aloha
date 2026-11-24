export default function JsAPI() {
  const codeJs = `import {
  ADropdown,
} from "aloha-vue";

export default {
  components: {
    ADropdown,
  },
  setup() {
    const actions = [
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_EDIT_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_DUPLICATE_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_ARCHIVE_",
        disabled: true,
        callback: () => {},
      },
      {
        type: "divider",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_DELETE_",
        class: "a_dropdown__item a_text_danger",
        callback: () => {},
      },
    ];

    return {
      actions,
    };
  },
};`;

  return {
    codeJs,
  };
}
