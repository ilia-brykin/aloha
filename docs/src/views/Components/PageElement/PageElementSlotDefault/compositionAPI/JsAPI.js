export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSlotDefault",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
