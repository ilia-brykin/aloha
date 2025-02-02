export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationHtmlAfterBefore",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
