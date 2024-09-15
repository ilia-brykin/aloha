export default function JsAPI() {
  const codeJs = `import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyDisabled",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "Tab 1",
        content: "Content 1",
        disabled: true,
      },
      {
        label: "Tab 2",
        content: "Content 2",
      },
      {
        label: "Tab 3",
        content: "Content 3",
        disabled: true,
      },
      {
        label: "Tab 4",
        content: "Content 4",
        disabled: false,
      },
    ];
    
    return {
      data,
    };
  },
};`;

  return {
    codeJs,
  };
}
