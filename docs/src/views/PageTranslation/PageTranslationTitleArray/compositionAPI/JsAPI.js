export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationTitleArray",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
