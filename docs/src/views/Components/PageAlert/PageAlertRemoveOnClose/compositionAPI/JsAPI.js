export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertRemoveOnClose",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
