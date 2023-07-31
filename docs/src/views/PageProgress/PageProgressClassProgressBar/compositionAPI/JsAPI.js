export default function JsAPI() {
  const codeJs = `import AProgress from "aloha-vue/src/AProgress/AProgress";
    
export default {
  name: "PageProgressClassProgressBar",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
