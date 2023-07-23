export default function JsAPI() {
  const codeJs = `import ARate from "aloha-vue/src/ARate/ARate";
    
export default {
  name: "PageRateIconFill",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
