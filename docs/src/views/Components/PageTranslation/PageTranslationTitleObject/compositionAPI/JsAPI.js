export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
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
