export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkTransparent",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
