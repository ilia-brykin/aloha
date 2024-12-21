export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertSlot",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
