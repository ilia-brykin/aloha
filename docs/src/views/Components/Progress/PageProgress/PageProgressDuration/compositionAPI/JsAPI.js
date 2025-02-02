export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressDuration",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
