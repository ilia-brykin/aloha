export default function JsAPI() {
  const codeJs = `import { 
  ADisclosure,
} from "aloha-vue";
    
export default {
  name: "PageDisclosureSlots",
  components: {
    ADisclosure,
  },
};`;

  return {
    codeJs,
  };
}
