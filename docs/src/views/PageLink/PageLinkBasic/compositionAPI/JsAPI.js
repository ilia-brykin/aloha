export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkBasic",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
