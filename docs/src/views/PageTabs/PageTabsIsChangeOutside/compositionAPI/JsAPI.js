export default function JsAPI() {
  const codeJs = `import ATabs from "aloha-vue/src/ATabs/ATabs";
    
export default {
  name: "PageTabsIsChangeOutside",
  components: {
    ATabs,
  },
  setup() {
    const activeTabId = ref("1");
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
      {
        label: "Tab 4",
        content: "Content 4",
        id: "4",
      },
    ];

    const changeTab = ({ $event, tab, tabId, index }) => {
      console.log("$event, tab, tabId, index", $event, tab, tabId, index);
      activeTabId.value = tabId;
    };
    
    return {
      activeTabId,
      changeTab,
      data,
    };
  },
};`;

  return {
    codeJs,
  };
}
