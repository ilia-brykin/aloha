export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotAppend",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
