export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonHtml",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
