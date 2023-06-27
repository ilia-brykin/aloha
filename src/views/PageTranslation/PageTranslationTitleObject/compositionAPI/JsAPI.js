export default function JsAPI() {
  const codeJs = `import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationTitleObject",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
