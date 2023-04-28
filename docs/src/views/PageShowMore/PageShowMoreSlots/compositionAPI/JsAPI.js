export default function JsAPI() {
  const codeJs = `import AShowMore from "aloha-vue/src/AShowMore/AShowMore";
    
export default {
  name: "PageShowMoreSlots",
  components: {
    AShowMore,
  },
};`;

  return {
    codeJs,
  };
}
