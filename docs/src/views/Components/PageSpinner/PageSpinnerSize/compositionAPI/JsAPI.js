export default function JsAPI() {
  const codeJs = `import { 
  ASpinner,
} from "aloha-vue";
    
export default {
  name: "PageSpinnerSize",
  components: {
    ASpinner,
  },
};`;

  return {
    codeJs,
  };
}
