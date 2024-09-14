export default function JsAPI() {
  const codeJs = `import ALoading from "aloha-vue/src/ALoading/ALoading";
    
export default {
  name: "PageLoadingAlign",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
