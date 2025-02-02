export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateIconFill",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
