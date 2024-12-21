export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressSizes",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
