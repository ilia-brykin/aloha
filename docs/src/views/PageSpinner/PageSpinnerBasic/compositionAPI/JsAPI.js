export default function JsAPI() {
  const codeJs = `import { 
  ASpinner,
} from "aloha-vue";
    
export default {
  name: "PageSpinnerBasic",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
