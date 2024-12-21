export default function JsAPI() {
  const codeJs = `import {
  ATemplate,
} from "aloha-vue";
    
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
