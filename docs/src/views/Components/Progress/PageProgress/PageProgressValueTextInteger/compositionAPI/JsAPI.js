export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressValueTextInteger",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
