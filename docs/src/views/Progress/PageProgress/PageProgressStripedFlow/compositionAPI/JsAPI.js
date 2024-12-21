export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressStripedFlow",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
