export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSafeHtml",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
