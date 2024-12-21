export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressMinMax",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
