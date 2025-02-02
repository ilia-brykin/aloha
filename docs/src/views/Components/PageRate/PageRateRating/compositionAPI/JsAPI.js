export default function JsAPI() {
  const codeJs = `import { 
  ARate,
} from "aloha-vue";
    
export default {
  name: "PageRateRating",
  components: {
    ARate,
  },
};`;

  return {
    codeJs,
  };
}
