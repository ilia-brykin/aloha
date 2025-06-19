export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSlotPrepend",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
