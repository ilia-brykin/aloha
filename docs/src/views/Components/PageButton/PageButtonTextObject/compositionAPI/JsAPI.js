export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTextObject",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
