export default function JsAPI() {
  const codeJs = `import { 
  ALinkCopy,
} from "aloha-vue";
    
export default {
  name: "PageLinkCopyClass",
  components: {
    ALinkCopy,
  },
};`;

  return {
    codeJs,
  };
}
