export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateModelValue",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
