export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateSize",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
