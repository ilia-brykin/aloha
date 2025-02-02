export default function JsAPI() {
  const codeJs = `import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipArrowPadding",
  components: {
    ATooltip,
  },
};`;

  return {
    codeJs,
  };
}
