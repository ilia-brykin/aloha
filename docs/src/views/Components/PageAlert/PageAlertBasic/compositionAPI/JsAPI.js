export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertTypes",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
