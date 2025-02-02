export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationExtra",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
