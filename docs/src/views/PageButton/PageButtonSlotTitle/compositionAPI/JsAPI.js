export default function JsAPI() {
  const codeJs = `import { 
  AButton,
} from "aloha-vue";
    
export default {
  name: "PageButtonSlotTitle",
  components: {
    AButton,
  },
};`;

  return {
    codeJs,
  };
}
