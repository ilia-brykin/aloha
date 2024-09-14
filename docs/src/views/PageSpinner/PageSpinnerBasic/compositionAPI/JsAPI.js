export default function JsAPI() {
  const codeJs = `import ASpinner from "aloha-vue/src/ASpinner/ASpinner";
    
export default {
  name: "PageSpinnerBasic",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
