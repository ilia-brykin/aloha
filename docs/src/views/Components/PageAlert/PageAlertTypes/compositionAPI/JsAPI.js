export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertBasic",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
