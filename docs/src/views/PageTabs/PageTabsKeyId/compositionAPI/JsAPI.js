export default function JsAPI() {
  const codeJs = `import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyId",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "Tab 1",
        content: "Content 1",
        id: "1",
      },
      {
        label: "Tab 2",
        content: "Content 2",
        id: "2",
      },
      {
        label: "Tab 3",
        content: "Content 3",
        id: "3",
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
