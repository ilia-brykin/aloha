export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotPrepend",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
