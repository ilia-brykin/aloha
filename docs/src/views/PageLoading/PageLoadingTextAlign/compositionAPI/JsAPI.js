export default function JsAPI() {
  const codeJs = `import ALoading from "aloha-vue/src/ALoading/ALoading";
    
export default {
  name: "PageLoadingTextAlign",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
