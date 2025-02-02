export default function JsAPI() {
  const codeJs = `import { 
  AProgress,
} from "aloha-vue";
    
export default {
  name: "PageProgressSlotText",
  components: {
    AProgress,
  },
};`;

  return {
    codeJs,
  };
}
