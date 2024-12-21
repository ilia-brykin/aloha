export default function JsAPI() {
  const codeJs = `import { 
  ALoading,
} from "aloha-vue";
    
export default {
  name: "PageLoadingAlign",
  components: {
    ALoading,
  },
};`;

  return {
    codeJs,
  };
}
