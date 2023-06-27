export default function JsAPI() {
  const codeJs = `import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkTitleHtml",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
