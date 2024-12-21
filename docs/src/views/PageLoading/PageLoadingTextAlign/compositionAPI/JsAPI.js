export default function JsAPI() {
  const codeJs = `import { 
  ALoading,
} from "aloha-vue";
    
export default {
  name: "PageLoadingTextAlign",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
