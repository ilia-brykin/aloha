export default function JsAPI() {
  const codeJs = `import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

export default {
  setup() {  
    const {
      filterLink,
    } = AFiltersAPI();
  },
};`;

  return {
    codeJs,
  };
}
