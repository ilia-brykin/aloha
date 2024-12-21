export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotDefault",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
