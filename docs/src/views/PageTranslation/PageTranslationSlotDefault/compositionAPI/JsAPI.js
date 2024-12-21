export default function JsAPI() {
  const codeJs = `import { 
  ATranslation,
} from "aloha-vue";";
    
export default {
  name: "PageTranslationSlotDefault",
  components: {
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
