export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSafeHtml",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
