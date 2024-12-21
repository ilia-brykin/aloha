export default function JsAPI() {
  const codeJs = `import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipBasic",
  components: {
    ATooltip,
  },
};`;

  return {
    codeJs,
  };
}
