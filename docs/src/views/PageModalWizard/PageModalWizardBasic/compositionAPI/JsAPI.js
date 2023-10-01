export default function JsAPI() {
  const codeJs = `import AModalWizard from "aloha-vue/src/AModalWizard/AModalWizard";
    
export default {
  name: "PageModalWizardBasic",
  components: {
    AModalWizard,
  },
};`;

  return {
    codeJs,
  };
}
