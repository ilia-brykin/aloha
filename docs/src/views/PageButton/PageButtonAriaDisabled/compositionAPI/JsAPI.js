export default function JsAPI() {
  const codeJs = `import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonAriaDisabled",
  components: {
    AButton,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`;

  return {
    codeJs,
  };
}