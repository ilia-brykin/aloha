export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressStriped",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
