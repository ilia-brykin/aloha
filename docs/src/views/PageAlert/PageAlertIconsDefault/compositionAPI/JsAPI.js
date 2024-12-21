export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsDefault",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
