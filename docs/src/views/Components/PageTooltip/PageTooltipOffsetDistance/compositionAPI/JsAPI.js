export default function JsAPI() {
  const codeJs = `import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipOffsetDistance",
  components: {
    ATooltip,
  },
};`;

  return {
    codeJs,
  };
}
