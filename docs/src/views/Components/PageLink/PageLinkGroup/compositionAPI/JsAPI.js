export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkGroup",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
