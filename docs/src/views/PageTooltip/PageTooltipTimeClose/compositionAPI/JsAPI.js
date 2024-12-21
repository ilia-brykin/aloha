export default function JsAPI() {
  const codeJs = `import { 
  ATooltip,
} from "aloha-vue";
    
export default {
  name: "PageTooltipTimeClose",
  components: {
    ATooltip,
  },
};`;

  return {
    codeJs,
  };
}
