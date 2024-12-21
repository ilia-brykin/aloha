export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
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
