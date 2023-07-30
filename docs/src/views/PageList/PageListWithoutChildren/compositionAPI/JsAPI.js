export default function JsAPI() {
  const codeJs = `import AList from "aloha-vue/src/AList/AList";
    
export default {
  name: "AListWithoutChildren",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
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
