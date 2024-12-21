export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotPrepend",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
