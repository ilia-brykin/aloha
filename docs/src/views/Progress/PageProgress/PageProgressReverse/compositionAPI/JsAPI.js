export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressReverse",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
