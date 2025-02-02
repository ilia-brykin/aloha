export default function JsAPI() {
  const codeJs = `import { 
  ALoading,
} from "aloha-vue";
    
export default {
  name: "PageLoadingBasic",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
