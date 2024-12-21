export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressIndeterminate",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
