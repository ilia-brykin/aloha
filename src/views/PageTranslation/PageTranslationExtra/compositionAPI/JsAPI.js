export default function JsAPI() {
  const codeJs = `import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationExtra",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
