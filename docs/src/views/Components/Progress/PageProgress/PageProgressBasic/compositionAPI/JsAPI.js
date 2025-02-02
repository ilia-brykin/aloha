export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressBasic",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
