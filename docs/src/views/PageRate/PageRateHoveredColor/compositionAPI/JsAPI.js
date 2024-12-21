export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateHoveredColor",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
