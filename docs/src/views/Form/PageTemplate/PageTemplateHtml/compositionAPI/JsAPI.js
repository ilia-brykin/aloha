export default function JsAPI() {
  const codeJs = `import ATemplate from "aloha-vue/src/ui/ATemplate/ATemplate";
    
export default {
  name: "PageTemplateHtml",
  components: {
    ATemplate,
  },
  setup() {
    const html = "<ul><li>Aloha 1</li><li>Aloha 2</li></ul>";
    
    return {
      html,
    };
  },
};`;

  return {
    codeJs,
  };
}
