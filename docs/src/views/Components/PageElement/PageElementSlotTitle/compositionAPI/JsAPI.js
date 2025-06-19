export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSlotTitle",
  components: {
    AElement,
  },
};`;

  return {
    codeJs,
  };
}
