export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextObject",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
