export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationAriaLabel",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
