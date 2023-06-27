export default function JsAPI() {
  const codeJs = `import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationHtml",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
