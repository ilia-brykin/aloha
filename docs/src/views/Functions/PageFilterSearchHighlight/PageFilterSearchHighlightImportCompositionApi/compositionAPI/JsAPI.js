export default function JsAPI() {
  const codeJs = `import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

export default {
  setup() {  
    const {
      filterSearchHighlight,
    } = AFiltersAPI();
  },
};`;

  return {
    codeJs,
  };
}