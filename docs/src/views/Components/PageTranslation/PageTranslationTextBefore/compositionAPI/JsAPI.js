export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextBefore",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
