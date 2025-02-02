export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressClassProgressBar",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
