export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSizes",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
