export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationPlaceholder",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
