export default function JsAPI() {
  const codeJs = `import { 
  ASpinner,
} from "aloha-vue";
    
export default {
  name: "PageSpinnerAriaLabel",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
