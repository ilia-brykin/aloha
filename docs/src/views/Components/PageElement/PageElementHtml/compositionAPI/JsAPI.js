export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementHtml",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
