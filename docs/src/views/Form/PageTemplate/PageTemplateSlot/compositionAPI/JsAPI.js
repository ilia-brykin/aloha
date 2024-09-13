export default function JsAPI() {
  const codeJs = `import ATemplate from "aloha-vue/src/ui/ATemplate/ATemplate";
    
export default {
  name: "PageTemplateSlot",
  components: {
    ATemplate,
  },
};`;

  return {
    codeJs,
  };
}
