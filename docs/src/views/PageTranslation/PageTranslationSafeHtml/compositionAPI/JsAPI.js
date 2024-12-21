export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSafeHtml",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
