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
        type: "header",
        text: "_A_DROPDOWN_EXAMPLE_EXPORT_",
      },
      {
        type: "button",
        text: "PDF",
        callback: () => {},
      },
      {
        type: "button",
        text: "CSV",
        callback: () => {},
      },
      {
        type: "header",
        text: "_A_DROPDOWN_EXAMPLE_SHARE_",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_EMAIL_",
        callback: () => {},
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_COPY_LINK_",
        callback: () => {},
      },
      {
        type: "divider",
      },
      {
        type: "button",
        text: "_A_DROPDOWN_EXAMPLE_SETTINGS_",
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
