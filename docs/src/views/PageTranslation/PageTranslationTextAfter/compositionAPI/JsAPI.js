export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTextAfter",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
