export default function JsAPI() {
  const codeJs = `import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsKeyContent",
  components: {
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "Tab 1",
        aloha: "<strong>Content 1</strong>",
      },
      {
        label: "Tab 2",
        aloha: "<strong>Content 2</strong>",
      },
      {
        label: "Tab 3",
        aloha: "<strong>Content 3</strong>",
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
