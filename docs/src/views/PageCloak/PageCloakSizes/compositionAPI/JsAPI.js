export default function JsAPI() {
  const codeJs = `import ACloak from "aloha-vue/src/ACloak/ACloak";
    
export default {
  name: "PageCloakSizes",
  components: {
    ACloak,
  },
};`;

  return {
    codeJs,
  };
}
