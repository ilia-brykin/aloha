export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateHalfIcon",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
