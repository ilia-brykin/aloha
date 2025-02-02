export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationBasic",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
