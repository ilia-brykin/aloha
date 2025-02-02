export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitle",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
