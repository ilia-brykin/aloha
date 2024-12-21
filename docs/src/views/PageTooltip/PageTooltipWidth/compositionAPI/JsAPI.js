export default function JsAPI() {
  const codeJs = `import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipWidth",
  components: {
    ATooltip,
  },
};`;

  return {
    codeJs,
  };
}
