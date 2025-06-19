export default function JsAPI() {
  const codeJs = `import { 
  AElement,
} from "aloha-vue";
    
export default {
  name: "PageElementStop",
  components: {
    AElement,
  },
  setup() {
    const showAlert = () => {
      alert("Aloha");
    };

    return {
      showAlert,
    };
  },
};`;

  return {
    codeJs,
  };
}
