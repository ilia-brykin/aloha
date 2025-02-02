export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateReadonly",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
