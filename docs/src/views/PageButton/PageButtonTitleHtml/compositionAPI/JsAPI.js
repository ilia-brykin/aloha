export default function JsAPI() {
  const codeJs = `import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonTitleHtml",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
