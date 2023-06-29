export default function JsAPI() {
  const codeJs = `import AButton from "aloha-vue/src/AButton/AButton";
    
export default {
  name: "PageButtonStop",
  components: {
    AButton,
  },
  setup() {
    const showAlert = () => {
      alert("Aloha");
    };

    return {
      showAlert,
    };
  },
};`;

  return {
    codeJs,
  };
}
