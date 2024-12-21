export default function JsAPI() {
  const codeJs = `import { 
  ALoading,
} from "aloha-vue";
    
export default {
  name: "PageLoadingSizes",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
