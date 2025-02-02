export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTextObject",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
