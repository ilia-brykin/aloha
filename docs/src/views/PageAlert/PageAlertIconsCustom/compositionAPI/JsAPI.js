export default function JsAPI() {
  const codeJs = `import { 
  AAlert,
} from "aloha-vue";
    
export default {
  name: "PageAlertIconsCustom",
  components: {
    AAlert,
  },
};`;

  return {
    codeJs,
  };
}
