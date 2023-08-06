export default function JsAPI() {
  const codeJs = `import AProgressCircle from "aloha-vue/src/AProgressCircle/AProgressCircle";
    
export default {
  name: "PageProgressCircleIndeterminate",
  components: {
    AProgressCircle,
  },
};`;

  return {
    codeJs,
  };
}
