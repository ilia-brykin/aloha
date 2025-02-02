export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateShowScore",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
