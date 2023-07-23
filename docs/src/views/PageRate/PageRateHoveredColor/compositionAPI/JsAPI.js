export default function JsAPI() {
  const codeJs = `import ARate from "aloha-vue/src/ARate/ARate";
    
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
