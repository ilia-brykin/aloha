export default function JsAPI() {
  const codeJs = `import AList from "aloha-vue/src/AList/AList";
    
export default {
  name: "PageListSeparator",
  components: {
    AList,
  },
  setup() {
    const items = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];

    return {
      items,
    };
  },
};`;

  return {
    codeJs,
  };
}
