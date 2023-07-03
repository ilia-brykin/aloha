export default function JsAPI() {
  const codeJs = `import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonTextTag",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
