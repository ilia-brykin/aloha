export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressShowValue",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
