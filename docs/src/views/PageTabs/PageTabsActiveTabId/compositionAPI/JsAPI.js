export default function JsAPI() {
  const codeJs = `import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsActiveTabId",
  components: {
    ATabs,
  },
  setup() {
    const data1 = [
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
      {
        label: "Tab 4",
        content: "Content 4",
        id: "4",
      },
    ];
    
    const data2 = [
      {
        label: "Tab 1",
        content: "Content 1",
      },
      {
        label: "Tab 2",
        content: "Content 2",
      },
      {
        label: "Tab 3",
        content: "Content 3",
      },
      {
        label: "Tab 4",
        content: "Content 4",
      },
    ];
    
    return {
      data1,
      data2,
    };
  },
};`;

  return {
    codeJs,
  };
}
