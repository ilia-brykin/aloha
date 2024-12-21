export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkSlotTitle",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
