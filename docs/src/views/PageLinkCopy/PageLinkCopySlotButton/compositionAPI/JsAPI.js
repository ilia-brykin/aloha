export default function JsAPI() {
  const codeJs = `import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopySlotButton",
  components: {
    ALinkCopy,
  },
};`;

  return {
    codeJs,
  };
}
