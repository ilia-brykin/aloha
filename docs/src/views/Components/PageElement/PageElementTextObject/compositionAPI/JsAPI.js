export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementTextObject",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
