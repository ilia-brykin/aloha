export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";
    
export default {
  name: "PageTranslationHideWithoutTranslation",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
