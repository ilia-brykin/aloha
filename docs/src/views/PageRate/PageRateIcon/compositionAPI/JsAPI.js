export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateIcon",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
