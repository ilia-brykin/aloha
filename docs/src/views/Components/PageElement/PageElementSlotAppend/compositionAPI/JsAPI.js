export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSlotAppend",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
