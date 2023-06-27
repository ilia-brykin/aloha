export default function JsAPI() {
  const codeJs = `import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonSlotPrepend",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
