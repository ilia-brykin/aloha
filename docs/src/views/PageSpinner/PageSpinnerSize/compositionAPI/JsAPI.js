export default function JsAPI() {
  const codeJs = `import ASpinner from "aloha-vue/src/ASpinner/ASpinner";
    
export default {
  name: "PageSpinnerSize",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
