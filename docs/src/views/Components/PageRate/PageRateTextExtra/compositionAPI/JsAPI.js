export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateTextExtra",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
