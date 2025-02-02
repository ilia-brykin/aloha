export default function JsAPI() {
  const codeJs = `import { 
  ALoading,
} from "aloha-vue";
    
export default {
  name: "PageLoadingText",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
