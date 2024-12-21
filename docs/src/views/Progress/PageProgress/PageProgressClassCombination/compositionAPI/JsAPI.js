export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressClassCombination",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
