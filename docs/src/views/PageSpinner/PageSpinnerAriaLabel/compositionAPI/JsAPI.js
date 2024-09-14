export default function JsAPI() {
  const codeJs = `import ASpinner from "aloha-vue/src/ASpinner/ASpinner";
    
export default {
  name: "PageSpinnerAriaLabel",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
