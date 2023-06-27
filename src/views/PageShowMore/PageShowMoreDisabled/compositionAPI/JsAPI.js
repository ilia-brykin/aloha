export default function JsAPI() {
  const codeJs = `import AShowMore from "aloha-vue/src/AShowMore/AShowMore";
    
export default {
  name: "PageShowMoreDisabled",
  components: {
    AShowMore,
  },
};`;

  return {
    codeJs,
  };
}
