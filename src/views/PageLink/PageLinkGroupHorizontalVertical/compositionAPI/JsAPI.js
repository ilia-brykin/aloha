export default function JsAPI() {
  const codeJs = `import ALink from "aloha-vue/src/ALink/ALink";
    
export default {
  name: "PageLinkGroupHorizontalVertical",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
