export default function JsAPI() {
  const codeJs = `import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyDisabled",
  components: {
    ALinkCopy,
  },
};`;

  return {
    codeJs,
  };
}
