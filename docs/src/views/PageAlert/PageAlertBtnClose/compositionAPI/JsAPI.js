export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBtnClose",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
