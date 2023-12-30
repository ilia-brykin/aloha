export default function JsAPI() {
  const codeJs = `import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

export default {
  name: "PageFilterListImportCompositionApi",
  setup() {  
    const {
      filterList,
    } = AFiltersAPI();
  },
};`;

  return {
    codeJs,
  };
}
