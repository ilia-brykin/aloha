export default function JsAPI() {
  const codeJs = `import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipHideArrow",
  components: {
    ATooltip,
  },
};`;

  return {
    codeJs,
  };
}
