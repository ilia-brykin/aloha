export default function JsAPI() {
  const codeJs = `import ATranslation from "aloha-vue/src/ATranslation/ATranslation";
    
export default {
  name: "PageTranslationSafeHtml",
  components: {
    ATranslation,
  },
  // "_A_TRANSLATION_EXAMPLE_HTML_": "<button class='a_btn a_btn_primary' onclick='alert("Aloha")'>Aloha</button>",
};`;

  return {
    codeJs,
  };
}
