export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertCss",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
