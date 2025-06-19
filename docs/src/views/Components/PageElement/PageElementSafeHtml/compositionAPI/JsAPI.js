export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSafeHtml",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
