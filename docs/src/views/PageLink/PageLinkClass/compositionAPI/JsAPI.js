export default function JsAPI() {
  const codeJs = `import Alink from "aloha-vue/src/Alink/Alink";
    
export default {
  name: "PageLinkClass",
  components: {
    Alink,
  },
};`;

  return {
    codeJs,
  };
}
