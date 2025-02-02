export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonTextTag",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
