export default function JsAPI() {
  const codeJs = `import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkSafeHtml",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
