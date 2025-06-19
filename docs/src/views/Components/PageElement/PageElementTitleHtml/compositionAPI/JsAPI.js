export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementTitleHtml",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
