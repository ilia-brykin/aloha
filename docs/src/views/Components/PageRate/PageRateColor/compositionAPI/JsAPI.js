export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateColor",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
