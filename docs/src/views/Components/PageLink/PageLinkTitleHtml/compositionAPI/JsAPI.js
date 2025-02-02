export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTitleHtml",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
