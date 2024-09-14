export default function JsAPI() {
  const codeJs = `import ASpinner from "aloha-vue/src/ASpinner/ASpinner";
    
export default {
  name: "PageSpinnerSizes",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
