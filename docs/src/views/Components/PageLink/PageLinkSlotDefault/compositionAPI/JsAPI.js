export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotDefault",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
