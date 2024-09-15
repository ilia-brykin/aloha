export default function JsAPI() {
  const codeJs = `import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyLabel",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        name: "Tab 1",
        content: "Content 1",
      },
      {
        name: "Tab 2",
        content: "Content 2",
      },
      {
        name: "Tab 3",
        content: "Content 3",
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
