export default function JsAPI() {
  const codeJs = `import ARate from "aloha-vue/src/ARate/ARate";
    
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
