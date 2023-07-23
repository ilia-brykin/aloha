export default function JsAPI() {
  const codeJs = `import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateRating",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
