export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkHtml",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
