export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementSizes",
  components: {
    AElement,
  },
  setup() {
    const onAlert = type => {
      alert(type);
    };
    
     return {
      onAlert,
    };
  },
};`;

  return {
    codeJs,
  };
}
