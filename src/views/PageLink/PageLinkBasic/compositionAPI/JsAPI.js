export default function JsAPI() {
  const codeJs = `import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkBasic",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
