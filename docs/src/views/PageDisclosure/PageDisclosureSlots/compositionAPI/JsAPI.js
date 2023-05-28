export default function JsAPI() {
  const codeJs = `import ADisclosure from "aloha-vue/src/ADisclosure/ADisclosure";
    
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
