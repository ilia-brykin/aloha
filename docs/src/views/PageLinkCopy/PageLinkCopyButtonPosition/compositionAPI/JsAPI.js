export default function JsAPI() {
  const codeJs = `import ALinkCopy from "aloha-vue/src/ALinkCopy/ALinkCopy";
    
export default {
  name: "PageLinkCopyButtonPosition",
  components: {
    ALinkCopy,
  },
};`;

  return {
    codeJs,
  };
}
