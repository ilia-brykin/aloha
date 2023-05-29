export default function JsAPI() {
  const codeJs = `import ATooltip from "aloha-vue/src/ATooltip/ATooltip";
    
export default {
  name: "PageTooltipArrowPaddingFunction",
  components: {
    ATooltip,
  },
  setup() {
    const arrowPaddingCallback = ({ popper, reference, placement }) => {
      console.log("placement", placement);
      console.log("popper", popper);
      console.log("reference", reference);
      return popper.width / reference.width + 400;
    };

    const title = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.\`;

    return {
      arrowPaddingCallback,
      title,
    };
  },
};`;

  return {
    codeJs,
  };
}
