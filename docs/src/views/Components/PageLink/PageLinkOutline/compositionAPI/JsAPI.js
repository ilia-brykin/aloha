export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkOutline",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
