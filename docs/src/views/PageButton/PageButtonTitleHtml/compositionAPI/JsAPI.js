export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTitleHtml",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
