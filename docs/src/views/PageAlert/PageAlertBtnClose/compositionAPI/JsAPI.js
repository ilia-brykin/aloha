export default function JsAPI() {
  const codeJs = `import AAlert from "aloha-vue/src/AAlert/AAlert";
    
export default {
  name: "PageAlertBtnClose",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
