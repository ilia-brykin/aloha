export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotAppend",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
